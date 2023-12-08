<template>
    <div class = "nav-bar">
        <ul class="nav">
            <li v-for="item in navigationList">
                <a :href="item.url">{{item.title}}</a>
            </li>
        </ul>
        <span class="download">下载豆瓣客户端</span>
        <span class="login">登录/注册</span>
    </div>


</template>
<script setup lang="ts">
const navigationList = [
    { url: 'https://www.douban.com', title: '豆瓣' },
    { url: 'https://book.douban.com', title: '读书' },
    { url: 'https://movie.douban.com', title: '电影' },
    { url: 'https://music.douban.com', title: '音乐' },
    { url: 'https://www.douban.com/location', title: '同城' },
    { url: 'https://www.douban.com/group', title: '小组' },
    { url: 'https://read.douban.com/?dcs=top-nav&amp;dcm=douban', title: '阅读' },
    { url: 'https://fm.douban.com/?from_=shire_top_nav', title: 'FM' },
    { url: 'https://time.douban.com/?dt_time_source=douban-web_top_nav', title: '时间' },
    { url: 'https://market.douban.com/?utm_campaign=douban_top_nav&amp;utm_source=douban&amp;utm_medium=pc_web', title: '豆品' },
]
</script>

<style scoped>
.nav-bar {
    display: flex;
    width: 100%;
    min-width: 1040px;
    align-items: center;
    background-color: #545652;
    height: 28px;
}
.nav {
    height: 100%;
    list-style: none;
}
.nav > li, .download, .login{
    font: 12px Helvetica,Arial,sans-serif;
    padding: 0 12px;
    display: inline;
}
.nav a, .download, .login {
    color: #d5d5d5;
}
.nav a:hover, .login:hover, .download:hover {
    color: #f8f8f8;
}
.login {
    margin: 0 12px;
}
.download {
    margin-left: auto;
    padding: 0 8px;
}
</style>