<template>
  <div @click="goTo()" class="pro-item">
    <router-link to="#">
      <div class="hide-text">
        <h3>{{proTitle}}</h3>
      </div>
      <img :src="proImg" alt="">
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['proImg', 'proTitle', 'proUrl', 'id'],
  methods: {
    goTo: function () {
      this.$router.push({
        name: 'proDetil',
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
  margin: 1rem 0;
  width: 31%;
  line-height: 0;
}

.pro-item img {
  width: 100%;
}

.hide-text {
  position: absolute;
  top: 0;
  bottom: 3px;
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
  background-color: rgba(0, 0, 0, .8);
  color: #FFF;
  opacity: 0;
}

.hide-text:hover {
  opacity: 1;
}

.hide-text,
.hide-text:hover {
  -webkit-transition: .5s all ease-in-out;
  -o-transition: .5s all ease-in-out;
  transition: .5s all ease-in-out;
}

@media screen and (max-width: 1200px) {
  .pro-item {
    width: 47%;
  }
}

@media screen and (max-width: 700px) {
  .pro-item {
    width: 100%;
  }
}
</style>
