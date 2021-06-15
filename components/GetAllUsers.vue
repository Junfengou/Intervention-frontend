<template>
    <div class="wrapper">
        <div class="btn">
            <h3>Gimmie all users</h3>
            <button @click="fetchUsers">fetch users</button>
            <NuxtLink to="/"><b-button type="button" >Home</b-button></NuxtLink>
        </div>

        <div class="users" v-for="user in userList" :key="user.userId">
            <p>name: {{ user.name }}</p>
            <p>email: {{ user.email }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                userList: []
            }
        },
        methods: {
            async fetchUsers() {
               const users =  await fetch("http://localhost:7000/users").then(res => res.json())
               console.log(users);
               this.userList = users;
               console.log(this.userList);
            }
        },
        mounted() {

        }
    }
</script>

<style lang="scss" scoped>

    .wrapper {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
    }

    .btn {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 2rem;
        gap: 1rem;
    }

    .users {
        font-size: 0.9rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 0.5rem;
    }
</style>