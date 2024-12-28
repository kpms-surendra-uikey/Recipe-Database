<template>
    <div v-if="!loading" style="margin-top: 10px; margin-bottom: 10px;">
        <el-space wrap>
            <el-card class="box-card" style="height: 400px; width: 300px" v-for="recipe in recipes" :key="recipe.id">
                <template #header>
                <div class="card-header">
                    <span style="font-size: var(--el-font-size-large);">{{ recipe.name }} </span>
                </div>
                </template>
                <el-image style="width: 150px; height: 150px" fit="cover" :src="recipe.thumbnail_url" />
                <el-text line-clamp="3">
                    {{ recipe.description }}
                </el-text>
                <template #footer>
                    <el-button type="primary" @click="setDataForDialog(true, recipe.name, recipe.instructions, recipe.video_url)">
                        How to Cook!!
                    </el-button>
                </template>
            </el-card>
        </el-space>
        <el-dialog
            v-model="dialogVisible"
            :title="nameOfTheDish"
            width="500"
            :before-close="handleClose"
        >
            <div class="counter" v-for="instruction in instructions" :key="instruction.id"> {{ instruction.display_text }}</div>
            <template #footer>
            <div class="dialog-footer">
                <el-button @click="dialogVisible = false">Cancel</el-button>
                <el-button type="primary" @click="dialogVisible = false">
                Confirm
                </el-button>
            </div>
            </template>
        </el-dialog>
    </div>
    <div v-else style="margin-top: 20px; margin-bottom: 10px; z-index: 10;">
        <div v-loading="loading"></div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { ElMessageBox } from 'element-plus';

defineProps({
    loading: { type: Boolean, required: true },
    recipes: { type: Array, required: true }
});

const instructions = ref([]);
const nameOfTheDish = ref('');
const videoURL = ref('');
const dialogVisible = ref(false);

const handleClose = (done) => {
  done();
};

const setDataForDialog = (visible, name, howToPrepare, video) => {
    dialogVisible.value = true;
    instructions.value = howToPrepare;
    nameOfTheDish.value = name;
    videoURL.value = video;
}

</script>

<style scoped>
.counter {
    display: list-item;
    list-style-type: decimal;
    margin-left: 10%;
    text-align: left;
}
</style>