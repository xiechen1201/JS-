import { axiosPost, axiosGet } from "@/libs/https";

function getDayData(date) {
  return new Promise((resolve, reject) => {
    axiosPost({
      url: "/api/calendar/day",
      data: {
        date,
      },
      sussess(data) {
        resolve(data);
      },
      error(err) {
        reject(err);
      },
    });
  });
}

function getMonthData(yearMonth) {
  return new Promise((resolve, reject) => {
    axiosPost({
      url: "/api/calendar/month",
      data: {
        "year-month": yearMonth,
      },
      sussess(data) {
        resolve(data);
      },
      error(err) {
        reject(err);
      },
    });
  });
}

function getYearData(year) {
  return new Promise((resolve, reject) => {
    axiosPost({
      url: "/api/calendar/year",
      data: {
        year,
      },
      sussess(data) {
        resolve(data);
      },
      error(err) {
        reject(err);
      },
    });
  });
}

export { getDayData, getMonthData, getYearData };
