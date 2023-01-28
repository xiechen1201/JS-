import _ from "lodash";

const string = _.join(["hello", "world"]);
const div = document.createElement("div");
div.innerText = string;
document.body.appendChild(div)
