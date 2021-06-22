<template>
  <div class="wrapper">
    <img src="@/assets/logo2.png" alt="img" />
    <p v-if="loggedIn">Welcome back {{loggedIn}}</p>
    <p v-else>Please sign in to access site functions</p>
    <div v-if="loggedIn" class="functions">
      <NuxtLink to="/createstudy">Create Study</NuxtLink>
      <NuxtLink to="/allusers">Get all users</NuxtLink>
      <b-button @click="logOut">Sign out</b-button>
    </div>
    <div v-else>
      <NuxtLink class="navItem" to="/signin"><b-button >Signin</b-button></NuxtLink>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
  export default {
    data() {
      return {
        message: "",
        logo: "@/assets/logo.jpg"
      }
    },

    async mounted() {
      // On initial render, we will send a request to the backend to check if the user is authenticated
      await this.checkUserLoggedIn()
    },

    methods: {
      ...mapActions({
          checkUserLoggedIn: 'authentication/checkUserLoggedIn',
          logOut: 'authentication/logUserOut'
      }),

    },

    computed: {
      ...mapGetters({
        loggedIn: 'authentication/getUser'
      })
    },

    
    
}
</script>

<style lang="scss" scoped>
    .wrapper {
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 2rem;
    }

    img {

      height: 15rem;
      object-fit: contain;
    }

    .functions {
      /* border: solid red; */
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }
</style>