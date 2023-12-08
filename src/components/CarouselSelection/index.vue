<template>
    <el-carousel :autoplay="false" trigger="click" arrow="always" ref="carousel">
        <slot></slot>
    </el-carousel>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const carousel = ref<any>(null)
const backToFirst= () => {
    carousel.value.setActiveItem(0)
}
defineExpose({
    backToFirst
})
</script>

<style scoped>
:deep(.el-carousel__button), :deep(.el-carousel__button:hover){
    background-color: #D8D8D8;
    border-radius: 50%;
    width: 6px;
    height: 6px;
    opacity: 1;
} 
:deep(.el-carousel__button:focus) {
    outline: 0;
}
:deep(.is-active > .el-carousel__button) {
    background-color: #6198D7;
}
:deep(.el-carousel__arrow) {
    width: 18px;
    height: 18px;
    top: auto;
    bottom: -3px;
    background-color: #6d98d2;
    color: #ecf2f9;
}
:deep(.el-carousel__arrow:focus) {
    outline: 0
}
:deep(.el-carousel__arrow--left) {
    left: calc(50% - 60px);
}
:deep(.el-carousel__arrow--right) {
    left: calc(50% + 40px);
}
</style>