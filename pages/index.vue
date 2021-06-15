<template>
  <div class="wrapper">
      <h3>Intervention Platform</h3>
      <p>{{ message }}</p>
      <NuxtLink to="/signin">Sign in</NuxtLink>
      <NuxtLink to="/signup">Sign up</NuxtLink>
      <NuxtLink to="/createstudy">Create Study</NuxtLink>
      <NuxtLink to="/allusers">Get all users</NuxtLink>
      <button @click="logout">logout</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: "",
      }
    },

    async mounted() {
      try {

        const res =  await fetch('http://localhost:7000/users/user', {
          headers: {'Content-Type': 'application/json' },
          credentials: 'include',
      })

      const content = await res.json()
      if(content.name === undefined) this.message = "Please log in"
      else this.message = content.name + " Welcome back!"

      this.$nuxt.$emit('auth', true);
      
      
      console.log(content);

      }
      catch(e) {
        this.message = "You are not logged in"
        this.$nuxt.$emit('auth', false);
      }
    },
    methods: {
      async logout() {
        await fetch("http://localhost:7000/users/logout", {
          method: 'POST',
          headers: {'Content-Type': 'application/json' },
          credentials: 'include',
        })
        await this.$router.push('/signin')
      }
    }
    
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
</style>