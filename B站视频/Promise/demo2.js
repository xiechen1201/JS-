let fs = require("fs");
let uid = 1;

// ## 回调的写法
fs.readFile("./data/user.json", "utf-8", (err, data) => {
  let userData = JSON.parse(data);
  let userInfo = userData.find((el) => el.id === uid);

  fs.readFile("./data/userCourse.json", "utf-8", (err, data) => {
    let userCourseData = JSON.parse(data);
    let userID = userInfo.id;
    let userCourse = userCourseData.find((el) => el.uid === userID);

    fs.readFile("./data/course.json", "utf-8", (err, data) => {
      let couresData = JSON.parse(data);
      let userCourses = userCourse.courses;

      let _arr = [];
      userCourses.map((id) => {
        couresData.map((item) => {
          if (item.id === id) {
            _arr.push(item);
          }
        });
      });

      let userCourseInfo = {
        username: userInfo.username,
        coures: _arr,
      };

      fs.writeFileSync(`./data/build-${userInfo.username}.json`, JSON.stringify(userCourseInfo));
    });
  });
});
