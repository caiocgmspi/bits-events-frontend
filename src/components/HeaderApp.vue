<script setup>

</script>

<template>
    <div id="app-header">
        <div class="header-logo">
            <img alt="Vue logo" src="@/assets/logo.png">
        </div>
    </div>
</template>

<style scoped>
#app-header{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    background-color: cyan;
    padding: 1rem 1rem;
    height: 80px;
}

.header-logo{
    height: 100%;
}

.header-logo img{
    width: auto;
    max-width: 120px;
    height: 100%;
}
</style>