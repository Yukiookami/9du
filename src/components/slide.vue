<template>
  <div id="slideBox">
      <div class="right" @click="go()">
        <img src="../assets/left.svg" alt="">
      </div>
      <div class="left" @click="back()">
        <img src="../assets/right.svg" alt="">
      </div>
    <div class="slide-list">
      <div v-if="pos === 1" class="text-pos-box">
        <span>{{title}}</span><br>
        <span>{{content}}</span>
      </div>
      <img v-for="(item,imgIndex) in imgList" :key="imgIndex"
      :class="{'show-img': imgIndex === mark}" :src="item.slide" alt=""
      @mousemove="clearTime" @mouseout="goTime">
      <div class="dot-box">
        <span v-for="(item,dotIndex) in imgList" @click="changeTime(dotIndex)"
        :key="dotIndex" :class="{'select': dotIndex === mark}"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['imgList', 'pos', 'title', 'content'],
  data () {
    return {
      mark: 0,
      timeSet: ''
    }
  },
  mounted () {
    var that = this
    that.timeSet = setInterval(function () {
      if (that.mark >= that.imgList.length - 1) {
        that.mark = 0
      } else {
        that.mark++
      }
    }, 4000)
  },
  methods: {
    clearTime: function () {
      clearInterval(this.timeSet)
    },
    goTime: function () {
      var _this = this
      this.timeSet = setInterval(function () {
        if (_this.mark >= _this.imgList.length - 1) {
          _this.mark = 0
        } else {
          _this.mark++
        }
      }, 4000)
    },
    changeTime: function (dotIndex) {
      this.mark = dotIndex
      var _this = this
      clearInterval(this.timeSet)
      this.timeSet = setInterval(function () {
        if (_this.mark >= _this.imgList.length - 1) {
          _this.mark = 0
        } else {
          _this.mark++
        }
      }, 4000)
    },
    go: function () {
      this.clearTime()
      if (this.mark === this.imgList.length - 1) {
        this.mark = 0
      } else {
        this.mark++
      }
      this.goTime()
    },
    back: function () {
      this.clearTime()
      if (this.mark < 1) {
        this.mark = this.imgList.length - 1
      } else {
        this.mark--
      }
      this.goTime()
    }
  }
}
</script>

<style scoped>
  #slideBox {
    overflow: hidden;
    position: relative;
    width: 100%;
    max-height: 948px;
  }

  .slide-list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
  }

  .slide-list img {
    position: absolute;
    width: 100%;
    opacity: 0;
  }

  .dot-box {
    position: absolute;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    bottom: 1rem;
  }

  .dot-box span {
    margin: 0 .5rem;
    height: .8rem;
    width: .8rem;
    border-radius: 50%;
    border: 2px solid #FFF;
    cursor: pointer;
  }

  .show-img {
    opacity: 1 !important;
  }

  .slide-list img,
  .show-img,
  .select,
  .dot-box span {
    -webkit-transition: 1s all ease-in-out;
    -o-transition: 1s all ease-in-out;
    transition: 1s all ease-in-out;
  }

  .select {
    background-color: #FFF;
  }

  .text-pos-box {
    text-align: center;
    position: absolute;
    color: #FFF;
    bottom: 8%;
    z-index: 2147483645;
    font-size: 3rem;
    font-family: SimHei;
  }

  .text-pos-box>:last-child {
    font-family: broadway;
    font-size: 6rem;
    font-weight: bold;
  }

  .left,
  .right {
    position: absolute;
    width: 2.5rem;
    height: 2.5rem;
    top: 50%;
    border-radius: 50%;
    padding: .5rem;
    background-color: rgba(0, 0, 0, .3);
    cursor: pointer;
    z-index: 2147483647;
  }

  .left img,
  .right img {
    width: 100%;
    height: 100%;
  }

  .left {
    left: 2rem;
  }

  .right {
    right: 2rem;
  }

  @media screen and (max-width: 1900px) {
    #slideBox {
      max-height: 848px;
    }
  }

  @media screen and (max-width: 1580px) {
    #slideBox {
      max-height: 748px;
    }
  }

  @media screen and (max-width: 1500px) {
    #slideBox {
      max-height: 648px;
    }
  }

  @media screen and (max-width: 1320px) {
    #slideBox {
      max-height: 548px;
    }

    .text-pos-box {
      font-size: 1.5rem;
    }

    .text-pos-box>:last-child  {
      font-size: 3rem;
    }
  }

  @media screen and (max-width: 1060px) {
    #slideBox {
      max-height: 348px;
    }

    .text-pos-box {
      font-size: 1rem;
      bottom: 15%;
    }

    .text-pos-box>:last-child  {
      font-size: 2rem;
    }

    .dot-box span {
      width: .5rem;
      height: .5rem;
    }
  }

  @media screen and (max-width: 750px) {
    #slideBox {
      max-height: 248px;
    }
  }

  @media screen and (max-width: 400px) {
    #slideBox {
      max-height: 200px;
    }

    .text-pos-box {
      font-size: .75rem;
      bottom: 15%;
    }

    .text-pos-box>:last-child  {
      font-size: 1.5rem;
    }
  }
</style>
