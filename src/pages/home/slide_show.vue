<template>
  <div class='lp-slideshow-gallery'>
    <div class='container' ref="containerRef" :style="style">
      <div
        v-for="(image, index) in input"
        :key="index"
        :class="['slide', {'active': slideIndex === index}]"
      >
        <div class='number-text'>
          {{ index + 1 }} / {{ input.length }}
        </div>
        <img class='image' :src="image.medium" :alt="index" />
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
  import Vue from 'vue';
  export default Vue.extend({
    props: {
      input: Array,
      ratio: String,
      timeout: Number,
      mode: String,
    },
    data() {
      return {
        slideIndex: 0,
        automaticInterval: null,
        style: {
          height: '10px',
        },
      };
    },
    computed: {
      ratioWH() {
        const ratioWHArray = this.$props.ratio.split(':');
        return {
          ratioWH: ratioWHArray[0] / ratioWHArray[1],
        };
      },
    },
    methods: {
      getNewSlideIndex(step: number) {
        const numberSlide = this.$props.input.length;
        let newSlideIndex = this.$data.slideIndex + step;

        if (newSlideIndex >= numberSlide) {
          newSlideIndex = 0;
        } else if (newSlideIndex < 0) {
          newSlideIndex = numberSlide - 1;
        }
        return newSlideIndex;
      },
      updateDimensions() {
        const element = this.$refs.containerRef as HTMLElement;
        const height = element ? element.offsetWidth : 0;
        this.$data.style = { height: `${(height / this.ratioWH.ratioWH)}px` };
      },
    },
    mounted() {
      this.updateDimensions();
      window.addEventListener('resize', this.updateDimensions);
      if (this.$props.mode === 'automatic') {
        this.$data.automaticInterval = setInterval(
          () => {
            const nextSlide = this.getNewSlideIndex(1);
            this.$data.slideIndex = nextSlide;
          }, this.$props.timeout,
        );
      }
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.updateDimensions);
      if (this.$data.automaticInterval) {
        clearInterval(this.$data.automaticInterval);
      }
    },
  });
</script>

<style>
  @import './slide_show.css';
</style>