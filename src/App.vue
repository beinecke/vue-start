<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    <tableui></tableui>
    <Checkboxui></Checkboxui>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Tableui from './components/table'
import Checkboxui from './components/checkbox'

export default {
  name: 'app',
  components: {
    Hello,
    Tableui,
    Checkboxui
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
