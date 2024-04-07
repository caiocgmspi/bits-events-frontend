<script setup>

</script>

<template>
    <div id="main-app">
        <router-link to="/accounts">Accounts</router-link>
        <router-view></router-view>
    </div>
</template>

<style scoped>
#main-app{
    padding: 1rem 1rem;
    background-color: yellow;
    flex-grow: 1;
}
</style>