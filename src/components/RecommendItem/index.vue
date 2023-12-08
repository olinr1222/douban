<template>
    <div class="item">
        <a :href="props.item.url">
            <img :src="props.item.imgurl" />
        </a>
        <div class="content">
            <span class="title">{{props.item.title}}</span>
            <p class="desc">{{props.item.description}}</p>
        </div>
    </div>

</template>


<style scoped>
.item {
    width: 675px;
    height: 240px;
    white-space: normal;
    display: flex;
}
.item > a, .item > a > img {
    width: 350px;
    height: 240px;
}
.content {
    width: 277px;
    height: 168px;
    padding: 48px 24px 24px 24px;
    background-color: #F9F9F9;
    text-align: left;
}
.title {
    font-size: 18px;
    color: #111;
    line-height: 28px;
    margin-left: 4px;
    margin-bottom: 1px;
}
.desc {
    font-size: 13px;
    line-height: 20px;
    color: #999;
    white-space: normal;
    margin: 13px 0;
    
}
</style>

<script setup lang="ts">
interface Prop {
    item: {
        imgurl: string,
        url: string,
        title: string,
        description: string
    }
}
const props = withDefaults(defineProps<Prop>(), {
    item: () => {
        return {
            imgurl: '',
            url: '',
            title: '',
            description: ''
        }
    }
})

</script>
