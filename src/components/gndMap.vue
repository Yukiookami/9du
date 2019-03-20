<template>
  <div class="map">
    <div>
      <h2>{{title}}</h2>
      <span>{{content}}</span>
    </div>
    <div class="baidumap" id="allmap"></div>
  </div>
</template>

<script>
import BMap from 'BMap'

export default {
  data () {
    return {
      title: 'Contact Us',
      content: '联 系 我 们'
    }
  },
  methods: {

  },
  mounted () {
    var map = new BMap.Map('allmap')
    var point = new BMap.Point(114.075258, 22.574562)
    map.centerAndZoom(point, 20)
    // 创建标注
    var marker = new BMap.Marker(point)
    // 将标注添加到地图中
    map.addOverlay(marker)
    var opts = {
      // 信息窗口宽度
      width: 200,
      // 信息窗口高度
      height: 50,
      // 信息窗口标题
      title: '九度空间室内设计有限公司',
      // 设置允许信息窗发送短息
      enableMessage: true
    }
    // 创建信息窗口对象
    var infoWindow = new BMap.InfoWindow('深圳市福田区梅林路32号机电大厦首层110-113', opts)
    // 开启信息窗口
    map.openInfoWindow(infoWindow, point)
    marker.addEventListener('click', function () {
      // 开启信息窗口
      map.openInfoWindow(infoWindow, point)
    })
  }
}
</script>

<style scoped>
.map {
  margin: 6rem auto 2rem;
  text-align: center;
  color: #6c7279;
  width: 75%;
}

.map span {
  display: block;
  margin-bottom: 1rem;
  font-size: 12px;
}

.map h2 {
  margin-bottom: .5rem;
  font-family: Arial Black;
}

.map img {
  width: 100%;
  -webkit-filter: grayscale(100%);
          filter: grayscale(100%);
}

.baidumap {
  height: 500px;
  width: 100%;
}
</style>
