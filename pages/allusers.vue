<template>
    <div>
        <LazyGetAllUsers />
    </div>
</template>

<script>
    export default {
        // middleware name is based on the file name that's in the middleware directory
        middleware: 'authenticated',
    }
</script>

<style lang="scss" scoped>

</style>