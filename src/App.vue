<template>
  <div class="main">
    <nav id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/todo">Todos</router-link>
    </nav>
    <div class="views">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
@import "@/styles/_global.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.views {
  margin-top: 5em;
}
#nav {
  padding: 30px;
}

a {
  font-weight: bold;
  color: #2c3e50;
}
</style>
