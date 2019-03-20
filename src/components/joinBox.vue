<template>
  <div class="join-main">
    <div class="join-box">
      <div class="join-left">
        <img src="../assets/fang.svg" alt="">
        <div class="join-text">
          <h3>{{joinTitle}}</h3>
          <span>{{joinTitleE}}</span>
        </div>
      </div>
      <div @click="showText()" class="add-box">
        <span :class="{'add-up':showTextNum !== joinIndex}"></span>
        <span class="add-down"></span>
      </div>
    </div>
    <div class="join-content hide-text"
    :class="{'show-text':showTextNum === joinIndex}"
    v-html="joinContent"></div>
  </div>
</template>

<script>
export default {
  props: ['joinTitle', 'joinContent', 'joinTitleE', 'joinIndex'],
  data () {
    return {
      showTextNum: -1
    }
  },
  methods: {
    showText: function () {
      if (this.showTextNum === this.joinIndex) {
        this.showTextNum = -1
      } else {
        this.showTextNum = this.joinIndex
      }
    }
  }
}
</script>

<style scoped>
.join-main {
  position: relative;
}

.join-box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  position: relative;
  width: 100%;
  padding: 3rem 2rem 2rem;
  border-top: 1px solid #ccc;
  font-size: 14px;
  color: #6c7279;
}

.join-box h3 {
  margin: 0;
  font-weight: normal;
  color: #000;
}

.join-left {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.join-left img {
  height: 30px;
  width: 30px;
}

.join-text {
  margin-left: 1rem;
  line-height: 1.5rem;
}

.add-box {
  position: relative;
  height: 1.5rem;
  width: 1.5rem;
  cursor: pointer;
}

.add-up,
.add-down {
  position: absolute;
  background-color: #999;
}

.add-up {
  left: 45%;
  height: 1.5rem;
  width: .2rem;
}

.add-down {
  top: 42%;
  height: .2rem;
  width: 1.5rem;
}

.join-content {
  width: 100%;
  padding-left: 3%;
  margin-bottom: 1rem;
  color: #6c7279;
}

.hide-text {
  overflow: hidden;
  max-height: 0;
}

.show-text {
  max-height: 30rem;
  -webkit-transform-origin: 0 0;
      -ms-transform-origin: 0 0;
          transform-origin: 0 0;
}

.hide-text,
.join-content,
.show-text,
.join-main,
.join-box {
  -webkit-transition: 1s all ease-in-out;
  -o-transition: 1s all ease-in-out;
  transition: 1s all ease-in-out;
}
</style>
