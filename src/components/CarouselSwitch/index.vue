<template>
    <div>
        <el-carousel :autoplay=true :interval='props.stime' trigger="click" arrow="always" @change="onChange">
            <slot></slot>
            <span class="summary">{{current}} / {{props.total}}</span>
        </el-carousel>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
interface Props {
    total: number
    stime: number
}
const props = withDefaults(defineProps<Props>(), {
    total: 1,
    stime: 10000
})
const current = ref(1)
const onChange = (now: number) => {
    current.value = now + 1
}
</script>

<style scoped>
:deep(.el-carousel__button), :deep(.el-carousel__button:hover){
    background-color: #d8d8d8;
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
    top: -40px;
    left: auto;
    background-color: #6d98d2;
    color: #ecf2f9;
}
:deep(.el-carousel--horizontal) {
    overflow: visible;
    clip-path: polygon(0 -1000%, 100% -1000%, 100% 1100%, 0 1100%);
}
:deep(.el-carousel__arrow:focus) {
    outline: 0
}
:deep(.el-carousel__arrow--left) {
    right: 28px;
}
:deep(.el-carousel__arrow--right) {
    right: 2px;
}
:deep(.el-carousel__indicators--horizontal) {
    display: none;
}
.summary {
    position: absolute;
    top: -50px;
    right: 60px;
    font-size: 13px;
    color: #666;
}
</style>