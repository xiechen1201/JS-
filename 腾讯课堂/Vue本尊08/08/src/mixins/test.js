export default {
  data() {
    return {
      title: "This is mixin title.",
      author: "This is mixin author.",
      content: "This is mixin content."
    };
  },
  mounted() {
    console.log("This is Mixin mounted calling.");
  },
  methods: {
    doMixin() {
      console.log("doMixin");
    },
    doComponent() {
      console.log("doMixinComponent");
    }
  }
};
