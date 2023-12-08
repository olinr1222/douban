<template>
    <div class="mv-bar">
        <div class="search-bar">
            <a href="https://movie.douban.com"></a>
            <div class="search">
                <input placeholder="搜索电影、电视剧、综艺、影人"/>
            </div>
            <div class="search-btn">
                <img src="@/imgs/search.png" />
            </div>
        </div>
        <ul>
            <li v-for="item in barList">
                <a :href="item.url">{{item.title}}</a>
            </li>
        </ul>
        <a href="https://movie.douban.com/annual/2022?fullscreen=1&amp;source=movie_navigation" class="movieannual"></a>
    </div>

</template>

<script setup lang="ts">
const barList = [
    {url: "https://movie.douban.com/cinema/nowplaying/", title: "影讯&购票"},
    {url: "https://movie.douban.com/explore", title: "选电影"},
    {url: "https://movie.douban.com/tv/", title: "电视剧"},
    {url: "https://movie.douban.com/chart", title: "排行榜"},
    {url: "https://movie.douban.com/review/best/", title: "影评"},
    {url: "https://movie.douban.com/annual/2022?fullscreen=1&amp;source=navigation", title: "2022年度榜单"},
    {url: "https://standbyme2022.douban.com/?autorotate=false&amp;fullscreen=true&amp;hidenav=true&amp;source=web_navigation", title: "2022书影音报告"},
]
</script>

<style scoped>
.mv-bar {
    position: relative;
    min-width: 1040px;
    width: 100%;
    background-color: #f0f3f5;
    padding-bottom: 9px;
}
.search-bar {
    margin: 0 auto;
    display: flex;
    align-items: center;
    height: 74px;
    width: 1040px;
    border-bottom: 1px solid #e5ebe4;
}
.search-bar > a {
    display: inline-block;
    width: 145px;
    height: 56px;
    background-image: url('https://img3.doubanio.com/dae/accounts/resources/164cfd8/movie/assets/lg_movie@2x.png');
    background-repeat: no-repeat;
    background-size: 79%;
    background-position: 0 12px;
}
.search {
    width: 470px;
    height: 30px;
    border-bottom: 2px solid #dadada;
    margin-left: 10px;
    border-radius: 4px 0 0 4px;
    background-color: #fff;
    display: flex;
    align-items: center;
}
.search input {
    width: 96%;
    height: 30px;
    padding-left: 10px;
    border: none;
    vertical-align: middle;
}
input:focus {
    outline: none;
}
.search-btn {
    width: 32px;
    height: 32px;
    background-color: #9098a1;
    border-radius: 0 4px 4px 0;
    display: flex;
}
.search-btn img {
    width: 20px;
    height: 20px;
    margin: auto;
}
ul {
    margin: 9px auto;
    margin-bottom: 0;
    text-align: left;
    width: 1040px;
    list-style: none;
}
li {
    display: inline;
    margin-right: 25px;
}
li > a {
    color: #27a;
    font-size: 14px;
}
.movieannual {
    position: absolute;
    width: 186px;
    height: 96px;
    top: 25px;
    left: 50%;
    margin-left: 200px;
    background-image: url(//img3.doubanio.com/dae/accounts/resources/164cfd8/movie/assets/annual_2022.png);
    background-repeat: no-repeat;
    background-size: contain;
}
</style>