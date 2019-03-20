<template>
  <div @click="goDetil()" class="pro-item">
    <router-link to="#">
      <div class="hide-text">
        <h3 v-html="expTitle"></h3>
      </div>
      <img :src="expImg" alt="">
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['expImg', 'expTitle', 'id'],
  methods: {
    goDetil: function () {
      this.$router.push({
        name: 'expertiseDetil',
        params: {
          id: this.id
        }
      })
    }
  }
}
</script>

<style scoped>
.pro-item {
  position: relative;
  margin: .5rem 0;
  width: 32%;
  text-align: center;
}

.pro-item img {
  width: 100%;
}

.hide-text {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  color: #FFF;
  font-size: 1.5rem;
  line-height: 2.5rem;
  opacity: 1;
}

.hide-text:hover {
  background-color: rgba(0, 0, 0, .5);
  opacity: 1;
}

.hide-text,
.hide-text:hover {
  -webkit-transition: .5s all ease-in-out;
  -o-transition: .5s all ease-in-out;
  transition: .5s all ease-in-out;
}

@media screen and (max-width: 1640px) {
  .hide-text {
    font-size: 1.2rem;
  }
}

@media screen and (max-width: 1060px) {
  .hide-text {
    font-size: 1rem;
  }
}

@media screen and (max-width: 790px) {
  .pro-item {
    width: 100%;
  }

  .hide-text {
    font-size: 1.5rem;
  }
}
</style>
