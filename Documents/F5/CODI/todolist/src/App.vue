<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

ul {
  margin: 0px;
  padding: 0px;
}

li {
  list-style: none;
  margin: 4px;
}

.textEdit {
  border: none;
  // border-radius: 25px;
  // color: white;
}


.deleteBtn {
  background-color: #F44336;
  border: none;
  border-radius: 5px;
  color: white;
  margin-left: 10px;
  padding: 10px 18px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
}
.submitBtn {
  background-color: #055b34;
  border: none;
  border-radius: 5px;
  color: white;
  margin-left: 10px;
  padding: 10px 18px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
}
.updateBtn {
  background-color: #1160a5;
  border: none;
  border-radius: 5px;
  color: white;
  margin-left: 10px;
  padding: 10px 18px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>