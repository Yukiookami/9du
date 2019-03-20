<template>
  <div @click="goTo()" class="pro-item">
    <router-link to="#">
      <div class="hide-text">
        <span class="num">{{num}}</span>
        <span class="date">{{date}}</span>
        <h3>{{proTitle}}</h3>
      </div>
      <!-- <img :src="proImg" alt=""> -->
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['proImg', 'proTitle', 'proUrl', 'id', 'date'],
  data () {
    return {
      num: ''
    }
  },
  methods: {
    goTo: function () {
      this.$router.push({
        name: 'gndNewsDetil',
        params: {
          id: this.id
        }
      })
    }
  },
  mounted: function () {
    this.num = this.date.substring(8, 10)
  }
}
</script>

<style scoped>
.num {
  font-family: STCaiyun;
  font-size: 5rem;
}

.date {
  font-size: 1.5rem;
  margin: -1rem 0 4rem;
  font-family: SimHei;
}

.pro-item {
  position: relative;
  margin: .5rem 0;
  width: 30%;
  height: 400px;
}

/* .pro-item img {
  width: 100%;
} */

.hide-text h3 {
  font-size: 1rem;
  font-weight: normal;
  font-family: SimHei;
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
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  background-color: rgba(0, 0, 0, 0);
  color: #999;
  box-shadow: 0 0 5px rgba(0, 0, 0, .6);
  opacity: 1;
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
