
<template>
    <meta name="referrer" content="no-referrer">
    <div class="panel-s">
        <ContentHead v-bind="$attrs"></ContentHead>
        <ul>
            <li v-for="value in props.dataList">
                <CommentItem :item="value"></CommentItem>
            </li>
        </ul>
    </div>

</template>



<script setup lang="ts">
import CommentItem from '@/components/CommentItem/index.vue'
import ContentHead from '@/components/ContentHead/index.vue'
interface Props {
    dataList: object[]
}
const props = withDefaults(defineProps<Props>(), {
    dataList: () => { return []; },
})
</script>

<style scoped>
.panel-s {
    width: 100%;
    height: min-content;
}
ul {
    list-style: none;
}
:deep(li:first-child .item) {
    padding-top: 0;
}
:deep(li:last-child .item) {
    border-bottom: none;
}
</style>
