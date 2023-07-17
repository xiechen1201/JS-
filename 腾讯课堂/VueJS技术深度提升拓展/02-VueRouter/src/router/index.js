import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import User from "../views/User.vue";
import UserSettings from "../views/UserSettings.vue";
import UserEmailsSubscriptions from "../views/UserEmailsSubscriptions.vue";
import UserProfile from "../views/UserProfile.vue";
import UserProfilePreview from "../views/UserProfilePreview.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/user/:id",
    name: "User",
    component: User,
    props: true
  },
  /*   {
    path: "/user/:id",
    name: "User",
    component: User,
    children: [
      {
        path: "profile",
        component: UserPropfile
      },
      {
        path: "posts",
        component: UserPosts
      }
    ]
  }, */
  {
    path: "/settings",
    component: UserSettings,
    children: [
      {
        path: "emails",
        component: UserEmailsSubscriptions
      },
      {
        path: "profile",
        components: {
          default: UserProfile,
          helper: UserProfilePreview
        }
      }
    ]
  },
  {
    path: "/user-*",
    component: User
  }
];

export default new VueRouter({
  routes
});
