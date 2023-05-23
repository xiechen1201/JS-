<template>
    <div>
      <button @click="$emit('switchMyLight')">switch my light</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "MySwitch",
    emits:["switchMyLight"]
  };
  </script>
  