const http = require("http");
const url = require("url");

/* http
  .createServer((req, res) => {
    res.end("Hello world");
  })
  .listen(3000, () => {
    console.log("server running at prot 3000");
  }); */

class Server {
  constructor() {}

  start() {
    const server = http.createServer(this.handleRequest);
    server.listen(3000, () => {
      console.log("server running at prot 3000");
    });
  }
  // req是请求，res是响应
  // 请求会有请求行、请求头、请求体
  handleRequest(req, res) {
    if (req.url.startsWith("/?")) {
      console.log(req.url);
      console.log(req.method);
      console.log(req.httpVersion);
      // console.log(req.headers);

      console.log(url.parse(req.url));
    }

    /*  var arr = []

    // 接收请求
    req.on("data", (chunks) => {
      arr.push(chunks)
    });

    req.on("end", () => {
      console.log(Buffer.concat(arr).toString())
    }); */

    // 返回状态码和状态描述信息
    res.statusCode = "200";
    res.statusMessage = "Test OK";

    // 设置响应头
    res.setHeader("TestName", "XieChen");
    res.setHeader("Content-Type", "text/html;charset=utf-8");

    // 返回响应信息
    res.end("你好");
  }
}

const app = new Server();
app.start();
