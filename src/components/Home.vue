<template>
  <div class="main1">
    <h1>{{ msg }}</h1>
    <h1>{{ roadpart }}</h1>
    <h1>{{ distance }}</h1>
    <div class="toeast1" v-html="strhtml"></div>
    <button @click="add">一辆车模拟</button>
  </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      msg: '路段信息',
      roadpart: 0,
      strhtml: '',
      mtopic: 'car',
      messge: '',
      distance: 10
    }
  },
  mounted: function () {
    // console.log(this.$route.query)
    // let q = this.$route.query
    // this.roadpart = q.id
  },
  watch: {
    '$route' (to, from) {
      console.log(this.$route.query)
      let q = this.$route.query
      this.roadpart = q.id
    }
  },
  methods: {
    add () {
      this.strhtml = '<img src="/static/car_1_1_1.png" style="left:283px;position: absolute;"></img><img src="/static/car_1_1_1.png" style="left:383px;position: absolute;"></img>'
    }
  },
  mqtt: {
    'VueMqtt/car' (data, topic) {
      //{
      // 	"direction": 1,
      // 	"roadlane": 1,
      // 	"cartype": 1,
      // 	"carcolor": 1,
      // 	"distance": 10
      // }
      //{direction:方向1向东2向西,roadlane:车道,cartype:1小2中3大,carcolor:红橙黄绿青蓝紫}
      console.log(topic + ': ' + String.fromCharCode.apply(null, data))
      var obj = JSON.parse(data)


      //设置定时器，每3秒刷新一次
     var self = this;
     setInterval(mockcar,500)
     function mockcar() {
       self.distance += 10
       console.log(self.distance)
       self.strhtml = '<img src="/static/car_1_1_1.png" style="left:'+self.distance+'px;position: absolute;"></img>'
     }
     mockcar();   
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.main1 {
    width: 2000px;
    height: 600px;
    background: url('/static/road.png');
  }

.toeast1 {
 float: left;
 width: 5760px;
 height: 100px;
  }
</style>
