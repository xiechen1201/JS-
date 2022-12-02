## package.json

每个项目文件都可以看作是一个包

commonJS 规范一个完整的包应该包含哪些文件？

    1、bind 文件夹，存放二进制目录

    2、lib 文件夹，存放相关的 JavaScript 代码

    3、doc 文件夹，存放文档的目录

    4、test 文件夹，存放单元测试的代码

    5、package.json，包描述文件

```json
// package.json
{
  // 主页
  "homepage": "",
  // 包的名称
  "name": "",
  // 包的版本
  "version": "1.2.11",
  // 包的描述
  "description": "",
  // 包的作者
  "author": "",
  // 关键字，详见：imgs/WX20221122-102806.png
  "keywords": [],
  // 包的维护者
  "maintainers": [],
  // bug
  "bugs": [],
  // 许可
  "licenses": [],
  // 可以使用该包的操作系统
  "os": ["linux", "windows", "macos"],
  // 开发环境依赖包及版本。一般都是构建工具如 webpack、eslint，存放本身和当前包没有太多的关系的工具
  /*
    1.xx.xx 大版本
    1.1.xx 次要版本
    1.1.1 小版本
    >= 1.0.3 大于等于
    <= 1.0.3 小于等于
    ^1.0.3 (插入号)安装的版本不能低于该版本同时不能更改大版本号，否则可能存在兼容问题
    ~= 1.0.3 大版本和次要版本都不能改变
  */
  "devDependencies": {},
  // 生产环境依赖包及版本。一般都是依赖包如 vue、babel
  "dependencies": {},
  // 脚本说明对象
  /*
    使用 babel 的时候执行文件：
    ./node_modules/.bin/babal src --out-dir lib
  */
  /*
    配置了 scripts 后就可以通过 npm run build 执行脚本

    run 关键字会找 node_modules/.bin 文件夹
    .bin 相当于本地的可运行的文件（存放系统命令）
  */
  "scripts": {
    "build": "babel src --out-dir lib"
  },
  // 包的入口文件，默认为 index.js
  "main": {},
  "bin": {}
}
```

## npm

Linux 系统文件：

    /bin 系统命令

    /boot 启动需要的文件

    /dev 设备存放的文件

    /lib 存放系统函数

    /home 用户主目录

      下面是用户的文件夹

    /root 管理员目录

    /etc 系统的配置文件

    /sbin 管理员才能执行的命令

    /usr 系统资源目录

    /usr/bin 系统命令

    /usr/sbin 管理员才能执行的命令

    /$

    /~

<br>
<br>

npm 是包管理工具。

npm 和包的关系？

npm 分为：网站（搜索包）、注册表（相当于一个数据库）、命令行 cli（一般命令行都叫 cli）

npm 的命令？

    npm -v

    npm install <packageName> -g

        i 表示缩写 install

        -v 表示缩写 --version

        -g 表示缩写 --global

        -S 表示缩写 --save

        -D 表示缩写 --save-dev

    npm uninstall <packageName> -g

npm 的服务器在国外，下载包的时候比较慢，可以使用 cnpm 淘宝镜像

