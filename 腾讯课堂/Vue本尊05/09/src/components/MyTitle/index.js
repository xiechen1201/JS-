import "./MyTitle.scss";
import MyTitleView from "./MyTitle.tpl";

export default MyTitleView(
  {
    data() {
      return {
        title: "This is my title.",
        subTitle: "This is my subTitle."
      };
    },
    methods: {
      handTitleClick(e) {
        console.log(e.target.innerText);
      }
    }
  },
  {
    template: true,
    data: true,
    methods: true
  }
);
