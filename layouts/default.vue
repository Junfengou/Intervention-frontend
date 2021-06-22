<template>
  <div>
    <Nav />
    <Nuxt />
  </div>
</template>

<script>
  import '../node_modules/@braid/vue-formulate/themes/snow/snow.scss';
  export default {
    name: 'layout', // name of the component
    data() {
      return {
        auth: false
      }
    },
    mounted() {
      // boolean
      this.$nuxt.$on('auth',auth => {
        this.auth = auth;
      }) 
    },

  }

</script>

<style>
  :root {
    --orange: #f66a0a;
    --green: #28a745;
    --blue: #0070f3;
    --lightBlue: #79b8ff;
    --lightestBlue: #c8e1ff;
    --offWhite: #e2e9ee;
    --grey: #6a737d;
    --grey2: #586069;
    --black: #1a1e22;
    --darkGrey: #24292e;
    --white: #ffffff;
    --purple: #d075e0;
    --pink: #e367a9;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  
</style>
