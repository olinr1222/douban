<template>
    <div class="item">
        <div class="mv-img">
            <a :href="props.item.mvurl">
                <img :src="props.item.imgurl" :alt="props.item.mv" />
            </a>
        </div>
        <div class="comment">
            <h3>
                <a :href="props.item.commenturl">{{props.item.title}}</a>
            </h3>
            <div class="author">
                <a :href="props.item.publisherurl">{{props.item.publisher}}</a>
                 评论 
                <a :href="props.item.commenturl">{{props.item.mv}}</a>
                <span class="star" v-if="props.item.number.length != 0"></span>
            </div>
            <div class="desc">
                {{props.item.desc}}
                <a :href="props.item.commenturl">(全文)</a>
            </div>
        </div>
    </div>
</template>


<style scoped>
.item {
    padding: 24px 0;
    border-bottom: 1px solid #eaeaea;
    display: flex;
}
.mv-img, .mv-img img {
    width: 68px;
}
h3 {
    font-size: 15px;
}
a, a:link {
    color: #37a;
    text-decoration: none;
}
.comment {
    margin-left: 15px;
    text-align: left;
}
.author {
    color: #666;
    padding: 5px 0;
    font-size: 13px;
    line-height: 1.62;
}
.author > a {
    color: #666;
}
.star {
    display: inline-block;
    width: 55px;
    height: 11px;
    background-image: url(https://img1.doubanio.com/f/shire/0147ca9efddcac80050854590d26bee587b008df/pics/rating_icons/ic_rating_s.png);
    background-repeat: no-repeat;
    background-size:cover;
    background-position: v-bind(star_pos);
}
.desc {
    font-size: 13px;
    color: #111;
    line-height: 20px;
}
a:hover {
    background-color: #37a;
    color: #fff;
}
</style>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
interface Props {
    item: {
        publisher: string,
        publisherurl: string,
        imgurl: string,
        mvurl: string,
        mv: string,
        commenturl: string,
        title: string,
        desc: string,
        number: string
    }
}
const props = withDefaults(defineProps<Props>(), {
    item: () => { 
        return {
            publisher: '',
            publisherurl: '',
            imgurl: '',
            mvurl: '',
            mv: '',
            commenturl: '',
            title: '',
            desc: '',
            number: '',
        }
    }
})
const star_pos = ref<any>(null);
onMounted(() => {
    star_pos.value = (() => {
        if(props.item.number.length == 0) return '';
        return '0 -' + (5 - (parseInt(props.item.number) / 10)) * 2 * 11 + 'px';
    })();
})
</script>