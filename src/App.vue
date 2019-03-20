<template>
  <div id="app">
    <gnds-header></gnds-header>
    <router-view></router-view>
    <gnds-footer></gnds-footer>
  </div>
</template>

<script>
import gndsHeader from './components/gndsHeader'
import gndsFooter from './components/gndsFooter'

export default {
  name: 'App',
  components: {
    gndsHeader,
    gndsFooter
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
</style>
