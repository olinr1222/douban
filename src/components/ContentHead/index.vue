<template>
    <div class="header-inner">
        <span>{{props.title}}</span>
        <ul>
            <li v-for="(value, index) in props.startItem">
                <span v-if="value.url == null" @click="handleClick(1, index)" :class="preClass[index]">{{value.name}}</span>
                <a v-else :href="value.url">{{value.name}}</a>
            </li>
        </ul>
        <ul class="footer">
            <li v-for="(value, index) in props.endItem">
                <span v-if="value.url == null" @click="handleClick(1, index)" :class="nxtClass[index]">{{value.name}}</span>
                <a v-else :href="value.url">{{value.name}}</a>
            </li>
        </ul>
    </div>
</template>


<script setup lang="ts">
import { ref } from 'vue';
interface Props {
    title: string,
    startItem?: {
        name: string,
        url?: string
    }[],
    endItem?: {
        name: string,
        url?: string
    }[]
}
const props = withDefaults(defineProps<Props>(), {
    title: '',
    startItem: () => { return []; },
    endItem: () => { return []; },
})
const emit = defineEmits(['type-change'])
const preClass = ref([] as any)
const nxtClass = ref([] as any)
for(let i = 0; i < props.startItem.length; i++) preClass.value.push("");
for(let i = 0; i < props.endItem.length; i++) nxtClass.value.push("");
if(props.startItem.length != 0) preClass.value[0] = 'is-focus'
if(props.endItem.length != 0) nxtClass.value[0] = 'is-focus'
const handleClick = (flag: number, index: number) => {
    if(flag == 1) for(let i = 0; i < props.startItem.length; i++) preClass.value[i] = '';
    else for(let i = 0; i < props.endItem.length; i++) nxtClass.value[i] = '';
    if(flag == 1) preClass.value[index] = 'is-focus'
    else nxtClass.value[index] = 'is-focus'
    emit('type-change', flag, index)
}
</script>

<style scoped>
.header-inner {
    width: 100%;
    padding-bottom: 10px;
    border-bottom: 1px solid #eaeaea;
    margin-bottom: 18px;
    display: flex;
    color: #111;
}
.header-inner > span {
    font-size: 16px;
}
.is-focus, .is-focus:hover {
    color: #111;
    background: none;
}
ul {
    list-style: none;
    margin-left: 14px;
    height: min-content;
}
li {
    display: inline-block;
    color: #9B9B9B;
    font-size: 13px;
    margin-right: 12px;
    height: min-content;
}
span {
    height: min-content;
}
li > span:hover, li > a:hover {
    background-color: #37a;
    color: #fff;
    cursor: pointer;
}
a {
    color: #37a;
    font-size: 13px;
    display: flex;
    align-items: flex-end;
    height: min-content
}
.footer {
    margin-left: auto;
}
</style>
