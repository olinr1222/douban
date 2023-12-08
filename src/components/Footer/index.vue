<template>
    <div class="footer">
        <span class="le">© 2005－2023 douban.com, all rights reserved 北京豆网科技有限公司</span>
        <span class="re">
            <a href="https://www.douban.com/about">关于豆瓣</a>
            · 
            <a href="https://www.douban.com/jobs">在豆瓣工作</a>
            · 
            <a href="https://www.douban.com/about?topic=contactus">联系我们</a>
            · 
            <a href="https://www.douban.com/about/legal">法律声明</a>
            · 
            <a href="https://help.douban.com/?app=movie" target="_blank">帮助中心</a>
            · 
            <a href="https://www.douban.com/doubanapp/">移动应用</a>
            · 
            <a href="https://www.douban.com/partner/">豆瓣广告</a>
        </span>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.footer {
    margin-top: 40px;
    padding: 6px 0;
    border-top: 1px dashed #ddd;
    overflow: hidden;
    zoom: 1;
    color: #999;
    font-size: 12px;
}
.le {
    float: left;
}
.re {
    float: right;
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
</style>