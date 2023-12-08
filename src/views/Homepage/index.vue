<template>
    <div class="home">
        <NavigationBar></NavigationBar>
        <MovieBar></MovieBar>
        <div class="panel">
            <div class="content">
                <div class="movie-panel">
                    <div class="gap">
                        <Carousel
                        :title="'正在热映'"
                        :pageSize=5
                        :height='"270px"'
                        :startItem="onShow"
                        :dataList="orderList"
                        ></Carousel>
                    </div>
                    <div class="gap">
                        <Carousel 
                        :dataList="hotMovie[movie[movieIndex]]"
                        :title="'最近热门电影'"
                        :startItem="hotHeader"
                        :endItem="hotFooter"
                        :pageSize=10
                        @type-change="handleChange"
                        ></Carousel>
                    </div>
                    <div class="gap">
                        <Carousel 
                        :dataList="hotEpisode[episode[episodeIndex]]"
                        :title="'最近热门电视剧'"
                        :startItem="epiHeader"
                        :endItem="epiFooter"
                        :pageSize=10
                        @type-change="handleChange"
                        ></Carousel>
                    </div>
                    <div class="gap">
                        <Carousel 
                        :dataList="recommendList"
                        :title="'热门推荐'"
                        :pageSize=1
                        :stime=5000
                        :height="'240px'"
                        @type-change="handleChange"
                        ></Carousel>
                    </div>
                    <div class="gap">
                        <List
                        :startItem="commentsHeader"
                        :dataList="commentList"
                        :title="'最受欢迎的影评'">
                        ></List>
                    </div>
                </div>
                <div class="ad-panel">
                    <div class="rating-ans">
                        <a href="https://blog.douban.com/douban/2015/12/18/3060/">豆瓣电影评分八问</a>
                    </div>
                    <div class="week-panel">
                        <ContentHead
                        class="ad-head"
                        :title="'一周口碑榜'"
                        :startItem="adWeekList"
                        ></ContentHead>
                        <table class="week-content">
                            <tr v-for="(value, index) in weekList">
                                <td class="order">{{index + 1}}</td>
                                <td class="weektitle">
                                    <a :href="value.url">{{value.name}}</a>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div class="hot-panel">
                        <ContentHead
                        class="hot-header"
                        :title="'热门片单'"
                        ></ContentHead>
                        <ul>
                            <li>
                                <a href="https://www.douban.com/doulist/855500/">治愈系动画推荐</a>
                                <span>2654推荐</span>
                            </li>
                            <li>
                                <a href="https://www.douban.com/doulist/192212/">上瘾黑色幽默</a>
                                <span>4158推荐</span>
                            </li>
                        </ul>
                    </div>
                    <div class="contact-panel">
                        <ContentHead title="合作联系"></ContentHead>
                        <ul>
                            <li>
                                电影合作邮箱：
                                <img src="https://img1.doubanio.com/f/movie/c858df348b4d199c848774ed1b3ed529052f0fa1/pics/movie/email_movie.png" />
                            </li>
                            <li>
                                电视剧合作邮箱：
                                <img src="https://img1.doubanio.com/f/movie/4de38ce91fdad7bcf3246c2594c84fa800eba08a/pics/movie/email_tv.png" />
                                <img class='new' src="https://img1.doubanio.com/f/shire/486503da8c82ffdbecec41c065927f96cbf02e4f/pics/icon/ic_new.png" />
                            </li>
                        </ul>
                    </div>
                    <div class="about-us">
                        <ContentHead title="关注我们" class="about-us-header"></ContentHead>
                        <ul>
                            <li class="wb">
                                <a href="https://weibo.com/doubanfilm"></a>
                                <a href="https://weibo.com/doubanfilm">微博</a>
                            </li>
                            <li class="wx">
                                <a href="https://weibo.com/doubanfilm">
                                    <div class="hover">
                                        <img src="https://img1.doubanio.com/f/movie/2e2ea342f4f4590300de32c5f30a9184176b3541/pics/movie/home_wechat_qrcode@2x.jpg" width="130px" height="130px">
                                    </div>
                                </a>
                                <a>微信</a>
                            </li>
                            <li class="bz">
                                <a href="https://weibo.com/doubanzui"></a>
                                <a href="https://weibo.com/doubanzui">瓣嘴</a>
                            </li>
                            <li class="gy">
                                <a href="https://www.douban.com/people/nobodyfilm/"></a>
                                <a href="https://www.douban.com/people/nobodyfilm/">光影club</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    </div>
</template>



<style scoped>
.home {
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.gap {
    width: 100%;
    margin-bottom: 40px;
}
.panel {
    width: 1040px;
    min-width: 1040px;
    margin-top: 40px;
}
.content {
    width: 100%;
    min-width: 1040px;
    display: flex;
}
.movie-panel {
    width: 675px;
    padding-right: 40px;
    overflow: hidden;
}

.ad-panel {
    margin-left: 25px;
    width: 300px;
}
.rating-ans {
    margin-bottom: 20px;
    padding: 12px 0 12px 18px;
    background-color: #f2f7f6;
    border-radius: 4px;
    width: 282px;
    text-align: left;
    line-height: 1.5;
    height: min-content;
    display: flex;
    align-items: center;
}
.rating-ans > a {
    font-size: 13px;
}
a, a:link {
    color: #37a;
    text-decoration: none;
}
a:hover {
    background-color: #37a;
    color: #fff;
    cursor: pointer;
}
a:visited {
    color: #666699;
    text-decoration: none;
}
:deep(.ad-head) {
    margin-bottom: 5px;
}
.order, .weektitle {
    padding: 7px 0;
    border-bottom: 1px solid #eaeaea;
    line-height: 1.62;
}
.order {
    width: 20px;
    font-size: 9px;
    color: #111;
    text-align: center;
}
.weektitle {
    width: 290px;
    font-size: 13px;
    text-align: left;
}
table {
    border-collapse: collapse;
}
.week-panel {
    margin-bottom: 50px;
}
.hot-header {
    padding-bottom: 10px;
    margin: 0;
}
.hot-panel {
    margin-bottom: 40px;
}
.wx {
    position: relative;
}
.hot-panel li {
    padding: 15px 0;
    border-bottom: 1px solid #eee;
    zoom: 1;
    height: 21px;
}
.hot-panel a, .hot-panel span {
    font-size: 13px;
}
.hot-panel a {
    float: left;
}
.hot-panel span {
    color: #999;
    float: right;
}
.contact-panel {
    margin-bottom: 20px;
}
.contact-panel li {
    line-height: 24px;
    font-size: 13px;
    color: #111;
    text-align: left;
}
.contact-panel li img {
    height: 14px;
    vertical-align: middle;
    margin-top: -2px;
}
.contact-panel li .new {
    height: auto;
    margin-top: -3px;
}
:deep(.about-us-header > span) {
    font-size: 14px;
}
.about-us {
    margin-bottom: 40px;
}
.about-us li {
    width: 60px;
    float: left;
    font-size: 12px;
    text-align: center;
}
.hover {
    display: none;
    position: absolute;
    z-index: 1;
}
.wx > a:first-child:hover > .hover {
    display: block;
    top: 100%;
}
.wb > a:first-child, .wx > a:first-child, .bz > a:first-child, .gy > a:first-child{
    width: 40px;
    display: block;
    height: 40px;
    margin: 0 auto 5px auto;
    background-size: contain;
}

.wb > a:first-child {
    background-image: url(https://img1.doubanio.com/f/movie/8f5f3bdbdc71bfd34eef8e3f16d13c857e59301b/pics/movie/home_weibo.png);
}

.wx > a:first-child {
    background-image: url(https://img1.doubanio.com/f/movie/e291ad8f50f269c21c50471270dc9895ec1be4a1/pics/movie/home_weixin.png);

}
.bz > a:first-child {
    background-image: url(https://img1.doubanio.com/f/movie/8cf33706051d29ae3cf98091070f0ec2481959ed/pics/movie/bite_me.png);
} 
.gy > a:first-child {
    background-image: url(https://img1.doubanio.com/f/movie/cab17c6de1bfdaf598c9ae235738e20022f49e23/pics/movie/home_club.png);
}

</style>

<script setup lang="ts">
import { ref } from 'vue'
import NavigationBar from '@/components/Navigation/index.vue';
import ContentHead from '@/components/ContentHead/index.vue';
import MovieBar from '@/components/MovieBar/index.vue';
import Carousel from './components/Carousel/index.vue'
import Footer from '@/components/Footer/index.vue'
import List from './components/List/index.vue'
import hotMovie from '@/assets/ts/hotMovieList.ts'
import hotEpisode from '@/assets/ts/hotEpisodeList.ts'
import orderList from '@/assets/ts/orderList.ts';
import recommendList from '@/assets/ts/recommendList.ts'
import commentList from '@/assets/ts/commentList.ts'
import weekList from '@/assets/ts/weekList.ts'
const movie = ['热门', '最新', '豆瓣高分', '冷门佳片', '华语', '欧美', '韩国', '日本']
const episode = ['热门', '国产剧', '综艺', '美剧', '日剧', '韩剧', '日本动画', '纪录片']
const hotHeader = [] as any
const epiHeader = [] as any
const movieIndex = ref(0)
const episodeIndex = ref(0)
const onShow = [{
    name: '全部正在热映»',
    url: 'https://movie.douban.com/cinema/nowplaying/beijing/'
}, {
    name:'即将上映»',
    url: 'https://movie.douban.com/cinema/later/beijing/'
}]
const hotFooter = [{
    name: '更多»',
    url: 'https://movie.douban.com/explore#!type=movie'
}]
const epiFooter = [{
    name: '更多»',
    url: 'https://movie.douban.com/tv/#!type=tv'
}]
const adWeekList = [{
    name: '更多榜单»',
    url: 'https://movie.douban.com/chart'
}]
const commentsHeader=[{
    name: '更多热门影评»',
    url: 'https://movie.douban.com/review/best/'
}, {
    name: '新片影评»',
    url: 'https://movie.douban.com/review/latest/'
}]
const handleChange = (flag: number, index: number) => {
    if(flag == 1) movieIndex.value = index;
    else episodeIndex.value = index;
}


for(let i = 0; i < movie.length; i++) hotHeader.push({name: movie[i]});
for(let i = 0; i < episode.length; i++) epiHeader.push({name: episode[i]});
</script>