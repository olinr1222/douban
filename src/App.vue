<script setup lang="ts">
</script>

<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<style>
#app {
    width: 100%;
    margin: 0 !important;
    padding: 0 !important;
    max-width: none !important;
}
body {
    min-width: 1040px;
    align-items: flex-start;
    background-color: white;
}
* {
    margin: 0;
    padding: 0;
}
ul {
    list-style: none;
}
</style>
