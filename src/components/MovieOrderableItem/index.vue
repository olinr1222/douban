<template>
    <div class="item">
        <div class="item-img" @click="toDetail">
            <span class="epi-info">{{props.item.episodes_info}}</span>
            <img :src="props.item.cover" />
        </div>
        <div class="o-info">
            <span @click="toDetail">{{props.item.title}}</span>
            <div class="o-rate">
                <span v-if="props.item.rate.length == 0">暂无评分</span>
                <span v-if="props.item.rate.length != 0" class="star"></span>
                <span v-if="props.item.rate.length != 0" class="rate">{{props.item.rate}}</span>
            </div>
            <span class="btn" @click="onBuy">选座购票</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
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
const star_pos = ref<any>(null);
const toDetail = () => {
    window.open('https://movie.douban.com/subject/' + props.item.id + '/?from=showing', '_blank')
}
const onBuy = () => {
    window.open('https://movie.douban.com/ticket/redirect/?movie_id=' + props.item.id, '__blank')
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
onMounted(() => {
    star_pos.value = (() => {
        if(props.item.rate.length == 0) return '';
        return '0 -' + (5 - (parseInt(props.item.number) / 10)) * 2 * 11 + 'px';
    })();
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
}

.item-img img {
    width: 100%;
    height: auto;
    object-fit: cover;
    object-position: top;
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
.o-info {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.o-info > span:first-child {
    display: block;
    color: #333;
    font: 14px Helvetica, Arial, sans-serif;
    line-height: 1.62;
	word-break: keep-all;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
    margin-top: 12px;
    max-width: 100px;
}
.o-rate {
    height: 19px;
    margin-top: 4px;
    display: flex;
    align-items: flex-start;
}
.o-rate > span {
    display: inline-block;
    font: 12px Helvetica, Arial, sans-serif;
    color: #111111;
    text-align: center;
}
.o-rate > .rate {
    color: #e09015;
}
.star {
    margin-top: 1px;
    margin-right: 5px;
    width: 55px;
    height: 11px;
    background-image: url(https://img1.doubanio.com/f/shire/0147ca9efddcac80050854590d26bee587b008df/pics/rating_icons/ic_rating_s.png);
    background-repeat: no-repeat;
    background-size:cover;
    background-position: v-bind(star_pos);
}
.btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    margin-top: 8px;
    height: 24px;
    line-height: 24px;
    background-color: #268dcd;
    color: #fff;
    border-radius: 2px;
    font: 12px Helvetica, Arial, sans-serif;
}
.item-img:hover, .o-info > span:hover {
    cursor: pointer;
}
</style>