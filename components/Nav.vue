<template>
    <nav>
        <div class="logo">
            <img src="@/assets/emblem2.png" alt="img" @click="redirectHome"/>
        </div>
        <div class="navItemContainer">
            <li><NuxtLink class="navItem" to="/signin"><b-button >Signin</b-button></NuxtLink></li>
            <li><b-button @click="logOut">Sign out</b-button></li>
        </div>
    </nav>
</template>

<script>
import { mapActions } from 'vuex'
    export default {
        methods: {
        ...mapActions({
          logOut: 'authentication/logUserOut'
      }),

        async redirectHome() {
            await this.$router.push('/')
        }
    }
}
</script>

<style lang="scss" scoped>
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 2rem;
        background: var(--black);
        height: 5rem;
    }

    .logo {
            img {
                height: 5rem;
                object-fit: contain;
                cursor: pointer;
            }
        }

    .navItemContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
     }

</style>