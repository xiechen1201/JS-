const http = require("http");
const url = require("url");
const fs = require("fs/promises");
const path = require("path");
const crypto = require("crypto");

/* 
    md5
    1、摘要算法，不可逆转
    2、根据内容返回结果
    3、不管内容是否一致返回的结果长度一致
    4、如果内容相同结果自然也是相通的
    5、如果内容发生一点点的变化，结果就会完全不一样
*/

const result = crypto.createHash("md5").update("123").digest("base64");
console.log(result);

class Server {
  constructor() {}

  start() {
    const server = http.createServer(this.handleRequest);
    server.listen(3000, () => {
      console.log("server running at prot 3000");
    });
  }

  async handleRequest(req, res) {
    const { pathname } = url.parse(req.url);

    console.log(pathname);

    if (pathname === "/favicon.ico") {
      res.statusCode = "404";
      res.end("Not Found");
      return;
    }

    const filepath = path.join(__dirname, "../", pathname);
    const statObj = await fs.stat(filepath);

    if (statObj.isFile()) {
      // 读取目录是文件
      let result = await fs.readFile(filepath);

      /**
       * 设置响应头
       * 设置强缓存
       * Expires 是老版本浏览器所支持的
       * Cache-Control 是新版本的所支持的
       * 强缓存：不会缓存 html 文件，这是因为每次访问资源都会有一个 html，强缓存一定要有根文件也就是 html，强缓存会把除 html 文件外的其他资源文件进行缓存
       */
      /* res.setHeader("Expires", new Date(Date.now() + 10 * 1000).toGMTString());
      res.setHeader("Cache-Control", "max-age=10");
      res.setHeader("Cache-Control", "no-store"); */

      /**
       * 协商缓存（或对比缓存）
       * 要解决首页 html 文件也要进行缓存
       * 如果「修改时间」不一样那么就重新读取，否则返回 304 去缓存里读取
       * 缺点：如果内容没变，时间变了，会重新读取
       */
      const lastModifed = statObj.mtime.toGMTString();
      const contentHash = crypto
        .createHash("md5")
        .update(result)
        .digest("base64");
      const ifModifiedSince = req.headers["if-modified-since"];
      const isNoneMatch = req.headers["if-none-match"];

      res.setHeader("Last-Modified", lastModifed);
      res.setHeader("ETag", contentHash);

      if (contentHash === isNoneMatch && lastModifed === ifModifiedSince) {
        res.statusCode = 304;
        return res.end();
      }

      res.end(result);
    } else {
      // 是文件夹目录
      res.statusCode = "404";
      res.end("Not Found");
    }
  }
}

const app = new Server();
app.start();
