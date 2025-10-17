<template>
  <div id="app">
    <h1>Bible Verse's</h1>
    <RandomBibleText />
    <GetVerseSimple />
  </div>
</template>

<script>
import RandomBibleText from "./components/RandomBibleText.vue";
import GetVerseSimple from "./components/GetVerseSimple.vue";

export default {
  name: "App",
  components: {
    RandomBibleText,
    GetVerseSimple,
  },
};
</script>

<style>
#app {
  text-align: center;
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background: #fefefe;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
}

h1 {
  margin-bottom: 20px;
  color: #333;
}
</style>
