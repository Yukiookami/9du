<template>
  <div class="mask-f">
    <div @click="back()" class="back">
      <img src="../assets/backX.svg" alt="">
    </div>
    <div class="work-title">
      <h3>{{name}}</h3>
      <span>{{ename}}</span>
    </div>
    <Carousel class="silde" :autoplay-speed='speed'
    autoplay v-model="value2" loop :radius-dot='dot' dots='outside' arrow='always'>
        <CarouselItem v-for='(item, index) in imgList' :key='index'>
            <div class="slide-son">
              <img :src="item.url" alt="">
            </div>
        </CarouselItem>
    </Carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value2: 0,
      speed: 4000,
      imgList: [],
      dot: true,
      ename: '',
      name: ''
    }
  },
  mounted: function () {
    this.$http.get('http://47.107.163.62:8089/project/getProjectImageById?id=' + this.$route.params.id)
      .then((res) => {
        this.name = res.data.data.name
        this.ename = res.data.data.englishName
        this.imgList = res.data.data.list
      })
  },
  methods: {
    back: function () {
      window.history.go(-2)
    }
  }
}
</script>

<style scoped>
.silde {
  margin-top: 5rem;
  background-color: rgba(0, 0, 0, .85);
  height: 700px;
  font-size: 2rem;
}

.back img {
  height: 1.5rem;
  width: 1.5rem;
}

.mask-f {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 2147483647;
  background-color: #fff;
}

.silde /deep/ .ivu-carousel-dots li button.radius {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.slide-son {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 700px;
}

.slide-son img {
  height: 100%;
  width: auto;
}

.back {
  position: fixed;
  top: 4rem;
  right: 2rem;
  z-index: 999;
}

.work-title {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  top: 4rem;
  color: #999;
  font-size: 1.2rem;
}

.work-title h3 {
  font-weight: normal;
  font-size: 1.3rem;
  font-family: STFangsong;
}

.work-title span {
  font-family: Arial, Helvetica, sans-serif;
}

@media screen and (max-width: 1200px) {
  .slide-son,
  .silde {
    height: 400px;
  }
}

@media screen and (max-width: 800px) {
  .slide-son,
  .silde {
    height: 300px;
  }
}

@media screen and (max-width: 500px) {
  .slide-son,
  .silde {
    height: 200px;
  }

  .back {
    top: 5rem;
    right: 1rem;
  }
}
</style>
