<template>
    <div class="item">
        <div class="item-img" @click="toDetail">
            <span class="epi-info">{{props.item.episodes_info}}</span>
            <img :src="props.item.cover" />
        </div>
        <p class="info" @click="toDetail">
            <span v-if="props.item.is_new" class="new">
                <img src="https://img1.doubanio.com/f/movie/caa8f80abecee1fc6f9d31924cef8dd9a24c7227/pics/movie/ic_new.png" width="16" class="new" :alt="props.item.title"/>
            </span>
            {{props.item.title}}
            <strong v-if="props.item.rate != ''">{{props.item.rate}}</strong>
            <span v-else class="rate-default">暂无评分</span>
        </p>
    </div>
</template>

<script setup lang="ts">
interface Props {
    item: { 
        cover: string,
        title: string,
        rate: string,
        is_new: boolean
        episodes_info: string,
        number: string,
        id: string
    }
}
const toDetail = () => {
    window.open('https:/movie.douban.com/subject/' + props.item.id + '/?from=showing', '_blank')
}
const props = withDefaults(defineProps<Props>(), {
    item: () => {
        return {
            cover: '',
            title: '错误',
            rate: '',
            is_new: false,
            episodes_info: '',
            number: '',
            id: ''
        }
    },
})
</script>

<style scoped> 
.item {
    margin-right: 25px;
    margin-bottom: 10px;
}
.item-img {
    width: 115px;
    height: 161px;
    overflow: hidden;
    position: relative;
}
.item-img::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 20px;
    background-image: 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5))';
}

.item-img img {
    width: 100%;
    height: auto;
    object-fit: cover;
    object-position: top;
}
.info {
    height: 44px;
    font-size: 13px;
    color: #37a;
    margin-top: 5px;
    overflow: hidden;

}
.new {
    position: relative;
    top: 2px;
}
.info strong {
    color: #e09015;
    font-weight: normal;
}
.rate-default {
    color: #aaa;
    font-size: 12px;
}
.epi-info {
    position: absolute;
    bottom: 0;
    left: 0;
    color: white;
    padding: 0 5px;
    line-height: 18px;
    font-size: 12px;
    z-index: 1;
}
.item-img:hover, .info:hover{
    cursor: pointer;
}
</style>