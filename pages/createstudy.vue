<template>
    <div class="d-flex justify-content-center align-items-center" style="height: 100vh">
        <CreateStudy />
        <!-- <h3>hmm</h3> -->
    </div>
</template>

<script>
    export default {
        // page render based on if the user is authenticated...Delete this if needed for development 
        middleware: 'authenticated',
    }
</script>

<style lang="scss" scoped>

</style>