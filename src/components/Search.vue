<template>
    <div>
        <el-input
            v-model="tags"
            size="large"
            style="max-width: 600px; margin-top: 10px; margin-bottom: 10px;"
            placeholder="Please enter the name of the Recipe."
        >
            <template #append>
                <el-button :icon="Search" @click="$emit('submit', 0, 10, tags)" />
            </template>
        </el-input>
    </div>
</template>

<script setup>
import { Search } from '@element-plus/icons-vue';
import { computed, ref } from 'vue';

const tags = ref('Under 30 minutes');

const searchQuery = () => {
    emit("submit", 0, 10, tags.value.split(' ').map(word => word.toLowerCase()).join('_'));
}

defineEmits(['submit']);
</script>

<style lang="scss" scoped>

</style>