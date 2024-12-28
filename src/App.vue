<script setup lang="ts">
import { Header, Footer, Hero, Search } from './components';
import { ref } from 'vue';
import { fetchRecipe } from "./api";

const size = ref(10);
const loading = ref(true);
const recipes = ref([]);

const startingPoint = ref(0);
const sizeOfTheResult = ref(20);
const tags = ref("under_30_minutes");

fetchRecipe(startingPoint.value, sizeOfTheResult.value, tags.value).then(function (response) {
    recipes.value = response.data.results;
    loading.value = false;
})
.catch(function (error) {
    console.log(error);
});

const queryRecipe = (from, size, query) => {
  loading.value = true;
  fetchRecipe(from, size, query).then(function (response) {
    recipes.value = response.data.results;
    loading.value = false;
  });
}
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header style="height: 5vh; text-align: center;"><Header /></el-header>
      <el-main style="height: 90vh; text-align: center; overflow: hidden;">
        <Search @submit="queryRecipe"/>
        <el-scrollbar>
          <Hero :loading="loading" :recipes="recipes"/>
        </el-scrollbar>
      </el-main>
      <el-footer style="height: 5vh; text-align: center;"><Footer /></el-footer>
    </el-container>
  </div>
</template>

<style scoped>
</style>
