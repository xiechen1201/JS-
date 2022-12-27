const fs = require("fs");
const uid = 2;

// ## Promise 的写法

function readFile(path, prevData) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      }

      const resData = JSON.parse(data);
      resolve({
        prevData,
        resData,
      });
    });
  });
}

readFile("./data/user.json")
  .then((res) => {
    const { resData } = res;
    const userInfo = resData.find((el) => el.id === uid);

    return readFile("./data/userCourse.json", userInfo);
  })
  .then((res) => {
    const { prevData, resData } = res;
    const userID = prevData.id;
    const userCourse = resData.find((el) => el.uid === userID);

    return readFile("./data/course.json", {
      username: prevData.username,
      userCourse,
    });
  })
  .then((res) => {
    const { prevData, resData } = res;
    const userCourses = prevData.userCourse.courses;
    const _arr = [];

    userCourses.map((el) => {
      resData.map((item) => {
        if (el === item.id) {
          _arr.push(item);
        }
      });
    });

    const userCourseInfo = {
      username: prevData.username,
      caches: _arr,
    };

    fs.writeFileSync(`./data/build-${userCourseInfo.username}.json`, JSON.stringify(userCourseInfo));
  })
  .catch((err) => {
    console.log(err);
  });
