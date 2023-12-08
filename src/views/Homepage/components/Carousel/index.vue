
<template>
    <meta name="referrer" content="no-referrer">
    <div class="panel-s">
        <ContentHead v-bind="$attrs" @type-change="backToFirst"></ContentHead>
        <ComponentF ref="carousel"
        v-bind="$attrs"
        :total="Math.floor((dataList.length - 1) / props.pageSize) + 1"
        >
            <el-carousel-item v-for="page in (Math.floor((dataList.length - 1) / props.pageSize) + 1)">
                <table>
                    <tr v-for="idx in (Math.floor((Math.min(props.pageSize, dataList.length - (page - 1) * props.pageSize) - 1) / 5) + 1)">
                        <td v-for="col in 5">
                            <ComponentC
                            v-if="(page - 1) * props.pageSize + (idx - 1) * 5 + (col - 1) <= dataList.length"
                            :item="dataList.at((page - 1) * props.pageSize + (idx - 1) * 5 + (col - 1))"
                            ></ComponentC>
                        </td>
                    </tr>
                </table>
            </el-carousel-item>
        </ComponentF>
    </div>

</template>



<script setup lang="ts">
import ContentHead from '@/components/ContentHead/index.vue'
import MovieItem from '@/components/MovieItem/index.vue'
import RecommendItem from '@/components/RecommendItem/index.vue'
import MovieOrderableItem from '@/components/MovieOrderableItem/index.vue'
import CarouselSelection from '@/components/CarouselSelection/index.vue'
import CarouselSwitch from '@/components/CarouselSwitch/index.vue'
import { shallowRef, onMounted, ref} from 'vue'
interface Props {
    dataList: Object[],
    pageSize: number,
    height?: string,
}
const props = withDefaults(defineProps<Props>(), {
    dataList: () => { return []; },
    pageSize: 1,
    height: '450px'
    
})
const height = shallowRef('450px');
const ComponentF = shallowRef(CarouselSelection);
const ComponentC = shallowRef(MovieItem);
onMounted(() => {
    height.value = props.height;
    if(props.height == '270px') {
        ComponentF.value = CarouselSwitch
        ComponentC.value = MovieOrderableItem
    } 
    else if(props.height == '240px') {
        ComponentF.value = CarouselSwitch
        ComponentC.value = RecommendItem
    }
})
const carousel = ref<any>(null)
const backToFirst = () => {
    carousel.value.backToFirst()
}
</script>


<style scoped>
.panel-s {
    width: 100%;
    height: min-content;
}
:deep(.el-carousel__container) {
    height: v-bind(height);
}
table {
    border-spacing: 0;
}
table td {
    width: 115px;
}
</style>
