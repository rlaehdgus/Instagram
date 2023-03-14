<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h3>menu</h3>
  <ul id="menuArea">
    <li><router-link to="/">main page</router-link></li>
    <li><router-link to="/test/page1">test page</router-link></li>
  </ul>

  <router-view/>
</template>

<script>
export default {
  name: 'App',
  components: {
    //HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#menuArea {
  margin-bottom: 50px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
