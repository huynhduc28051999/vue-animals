<template>
  <div class='home-page'>
    <Loading v-if="loading" />
    <div class='container' v-else>
      <div class='content'>
        <div class="inline-block" v-for="(animal, index) in animals.animals" :key="index">
          <div class='image-show'>
            <SlideShow :input="animal.photos" ratio='3:4' :timeout='5000' mode='automatic' />
          </div>
          <h3>{{ animal.name }}</h3>
          <p class='text'>{{ animal.description }}</p>
          <a :href="animal.url">Xem chi tiết</a>
        </div>
      </div>
      <div class="pagination">
        <select :value="limit" class='select-page-size' @change="onPageSizeChange">
          <option>10</option>
          <option>20</option>
          <option>50</option>
          <option>100</option>
        </select>
        <span @click="handlePreClick">&laquo;</span>
        <span
          v-for="index in pageShow"
          :key="index"
          :class="{ active: index + subTrack === page }"
          @click="onChangePage(index + subTrack)"
        >
          {{ index + subTrack }}
        </span>

        <span v-if="total_pages > 6 && total_pages > page" style="cursor: default;">...</span>
        <span
          v-if="total_pages > 6 && total_pages > page" 
          :class="{ active: total_pages === page }"
          @click="onChangePage(total_pages)"
        >
        {{ total_pages }}
        </span>
        <span @click="handleNextClick">&raquo;</span>
      </div>
    </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Loading from '@/components/loading.vue';
import SlideShow from './slide_show.vue';

@Component({
  data: () => ({
    limit: 20,
    page: 1,
    total_pages: 0,
    pageShow: 6,
    subTrack: 0,
  }),
  components: {
    Loading,
    SlideShow,
  },
  computed: {
    loading() {
      return this.$store.state.animal.loading;
    },
    animals() {
      return this.$store.state.animal.animals;
    },
  },
  methods: {
    onPageSizeChange(e) {
      this.$data.limit = e.target.value;
    },
    onChangePage(page) {
      this.$data.page = page;
    },
    handlePreClick() {
      if (this.$data.page > 1) {
        this.$data.page -= 1;
      }
    },
    handleNextClick() {
      if (this.$data.page < this.$data.total_pages) {
        this.$data.page += 1;
      }
    },
  },
  watch: {
    animals(newData) {
      if (newData.pagination) {
        this.$data.total_pages = newData.pagination.total_pages;
        this.$data.pageShow = newData.pagination.total_pages > 6 ? 6 : newData.pagination.total_pages;
      }
    },
    page(newData) {
      this.$data.subTrack = newData - 6 > 0 ? newData - 6 : 0;
      this.$store.dispatch('getAnimals', {
        page: newData,
        limit: this.$data.limit,
      });
    },
    limit(newData) {
      this.$store.dispatch('getAnimals', {
        page: this.$data.page,
        limit: newData,
      });
    },
  },
  mounted() {
    this.$store.dispatch('getAnimals', {
      page: this.$data.page,
      limit: this.$data.limit,
    });
  },
})

export default class Home extends Vue {}
</script>

<style>
  @import './index.css';
</style>