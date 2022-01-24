<template>
  <div class="main1">
    <h1>{{ msg }}</h1>
    <h1>{{ roadpart }}</h1>
    <button @click="add">点击</button>
    <div v-html="strhtml"></div>
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
      client: {}
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
      this.strhtml = '<img src="/static/car_1_1_1.png" style="left:283px;position: relative;"></img><img src="/static/car_1_1_1.png" style="left:383px;position: relative;"></img>'
    }
  },
  mqtt: {
    'VueMqtt/car' (data, topic) {
      console.log(topic + ': ' + String.fromCharCode.apply(null, data))
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
</style>
