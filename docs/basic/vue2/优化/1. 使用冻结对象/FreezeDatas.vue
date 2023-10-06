<script>
export default {
  data() {
    return {
      normalDatas: [],
      freezeDatas: [],
    }
  },
  methods: {
    loadNormalDatas() {
      this.normalDatas = this.getDatas()
      console.log('normalDatas', this.normalDatas)
    },
    loadFrozenDatas() {
      this.freezeDatas = Object.freeze(this.getDatas())
      console.log('freezeDatas', this.freezeDatas)
    },
    getDatas() {
      /* const res = Array(1000000).fill()
      return res.map(it => ({ id: it, name: `name ${it}`, addresses: { city: `city ${it}`, province: `province ${it}` } })) */
      const result = []
      for (let i = 0; i < 1000000; i++) {
        result.push({
          id: i,
          name: `name${i}`,
          address: {
            city: `city${i}`,
            province: `province${i}`,
          },
        })
      }
      return result
    },
  },
}
</script>

<template>
  <div class="demo" style="text-align: center">
    <button @click="loadNormalDatas">load normal datas</button>
    <button @click="loadFrozenDatas">load frozen datas</button>
    <h1>normal datas count: {{ normalDatas.length }}</h1>
    <h1>freeze datas count: {{ freezeDatas.length }}</h1>
  </div>
</template>
