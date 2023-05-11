<template>
  <div ref="loggin-box">
    <!-- <p v-if="showWhat === 'input'">
      <label for="">Username:</label>
      <input type="text" ref="myRef" name="" id="" />
    </p>
    <p v-else-if="showWhat === 'link'">
      <a href="https://www.google.com" ref="myRef">Google</a>
    </p> -->
    <p>
      <label for="">Username:</label>
      <input type="text" ref="myRef" name="" id="" />
    </p>
    <p>
      <label for="">Pssword:</label>
      <input type="password" />
    </p>
    <my-list :data="myList" :page-count="5"></my-list>
  </div>
</template>

<script>
import MyList from "./components/MyList.vue";

export default {
  name: "App",
  components: {
    MyList
  },
  data() {
    return {
      showWhat: "link",
      myList: [
        {
          id: 1,
          text: "Row 1"
        },
        {
          id: 2,
          text: "Row 2"
        },
        {
          id: 3,
          text: "Row 3"
        },
        {
          id: 4,
          text: "Row 4"
        },
        {
          id: 5,
          text: "Row 5"
        },
        {
          id: 6,
          text: "Row 6"
        },
        {
          id: 7,
          text: "Row 7"
        },
        {
          id: 8,
          text: "Row 8"
        },
        {
          id: 9,
          text: "Row 9"
        },
        {
          id: 10,
          text: "Row 10"
        },
      ]
    };
  },

  /* beforeCreate() {
    console.log(this.$refs);
  },
  created() {
    console.log(this.$refs);
  },
  beforeMount() {
    console.log(this.$refs);
  }, */
  mounted() {
    /* const oLink = document.createElement("a")
    oLink.innerText= "Google"
    oLink.href = "https://www.google.com"
    this.$refs.myRef = oLink */

    /* console.log(this.$refs);
    this.showWhat = "input";
    this.$nextTick(() => {
      console.log(this.$refs);
    }); */

    this.$refs.myRef.focus();
    console.log(this.$refs["loggin-box"].offsetHeight);
  }
};
</script>
