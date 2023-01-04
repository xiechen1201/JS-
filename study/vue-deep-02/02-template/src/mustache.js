import mustache from "mustache";

let data = {
  title: "This is My Title",
};
let html = mustache.render(`<h1>{{ title }}</h1>`, data);
console.log(html); // <h1>This is My Title</h1>
