<template>
  <div id="headBox" :class = "{'head-box' : check === 1}">
    <img class="logo" :class = "{'logo-s': check === 1}" src="" alt="">
    <ul class="nav-list" :class = "{'change-pos' : check === 1, 'show-nav': checkClick === true}">
      <li v-for="(item,index) in navList" :key="index" @click="change(index)">
        <router-link :to="item.url" :class="{'nav-visited': visitedNumL === index}">{{item.name}}</router-link>
      </li>
    </ul>
    <div @click="showNav" class="phone-nav">
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      check: 0,
      navList: [
        {
          name: '首页',
          url: '/'
        },
        {
          name: '关于我们',
          url: '/gndsAbout'
        },
        {
          name: '专长领域',
          url: '/expertise'
        },
        {
          name: '项目精选',
          url: '/project'
        },
        {
          name: '新闻资讯',
          url: '/gndNews'
        },
        {
          name: '加入我们',
          url: '/joinUs'
        }
      ],
      visitedNum: 0,
      visitedNumL: 0,
      checkClick: false
    }
  },
  mounted () {
    var that = this
    if (isNaN(parseInt(sessionStorage.getItem('visitedNum')))) {
      sessionStorage.setItem('visitedNum', 0)
    }
    this.visitedNumL = parseInt(sessionStorage.getItem('visitedNum'))
    window.onscroll = function () {
      if (document.body.scrollTop === 0 && document.documentElement.scrollTop === 0) {
        that.check = 0
      } else {
        that.check = 1
      }
    }
  },
  methods: {
    change: function (index) {
      this.visitedNum = index
      sessionStorage.setItem('visitedNum', this.visitedNum)
      this.visitedNumL = parseInt(sessionStorage.getItem('visitedNum'))
      if (document.body.clientWidth <= 900) {
        this.checkClick = !this.checkClick
      }
    },
    showNav: function () {
      this.checkClick = !this.checkClick
    }
  }
}
</script>

<style scoped>
  * {
    font-size: 14px;
  }

  #headBox {
    position: fixed;
    top: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -ms-flex-pack: distribute;
        justify-content: space-around;
    height: 5rem;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.36);
    z-index: 2147483647;
    -webkit-transition: .3s all ease-in-out;
    -o-transition: .3s all ease-in-out;
    transition: .3s all ease-in-out;
  }

  .head-box {
    font-size: 14px;
    background-color: #000 !important;
    height: 4rem !important;
    -webkit-transition: .3s all ease-in-out;
    -o-transition: .3s all ease-in-out;
    transition: .3s all ease-in-out;
  }

  .nav-list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    list-style: none;
  }

  .nav-list a {
    text-decoration: none;
    color: #ccc;
    font-size: 16px;
    font-family: SimHei;
  }

  .nav-visited {
    color: #FFF !important;
  }

  .nav-list,
  .nav-list a:hover,
  .show-nav {
    -webkit-transition: .3s all ease-in-out;
    -o-transition: .3s all ease-in-out;
    transition: .3s all ease-in-out;
  }

  .nav-list a:hover {
    color: #FFF;
  }

  .nav-list li {
    margin: 0 2rem;
  }

  .logo {
    height: 3rem;
    width: 6.8rem;
    background-position: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-image: url('../assets/logo.png')
  }

  .logo-s {
    height: 2.3rem;
    width: 5rem;
  }

  .logo,
  .logo-s {
    -webkit-transition: .3s all ease-in-out;
    -o-transition: .3s all ease-in-out;
    transition: .3s all ease-in-out;
  }

  .phone-nav {
    display: none;
  }

  .line {
    display: block;
    margin: .1rem 0;
    height: .1rem;
    width: 1rem;
    background-color: #FFF;
  }

  @media screen and (max-width: 900px) {
    .nav-list {
      overflow: hidden;
      position: fixed;
      top: 4rem;
      right: 0;
      left: 0;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
          -ms-flex-direction: column;
              flex-direction: column;
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
      max-height: 0;
      line-height: 2rem;
      background-color: rgba(0, 0, 0, 0.36);
    }

    .nav-list,
    .nav-list li {
      margin: 0;
      padding: 0;
    }

    .phone-nav {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
          -ms-flex-direction: column;
              flex-direction: column;
      padding: 1rem;
    }

    #headBox {
      height: 4rem;
    }

    .head-box {
      height: 3rem !important;
    }

    .change-pos {
      top: 3rem;
      background-color: #000;
    }

    .show-nav {
      max-height: 50rem;
    }
  }
</style>
