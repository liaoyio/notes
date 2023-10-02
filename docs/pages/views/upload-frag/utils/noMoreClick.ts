/**
 * v-no-more-click 禁止多次点击
 * 参数：
 * disabled，若传true则本指令不执行
 * interval，冻结时长，单位秒
 */
const noMoreClick = {
  mounted(el, binding) {
    el.addEventListener('click', () => {
      if (typeof (binding.value) === 'undefined' || typeof (binding.value.disabled) === 'undefined' || binding.value.disabled === false) {
        const time = binding.value?.interval || 2
        let dom
        if (el.classList.contains('el-button')) dom = el
        // 倒数
        if (dom) {
          const timer2 = setInterval(() => func(), 1000)
          const initialText = dom.innerText
          let count = time
          function func() {
            dom.innerText = `${initialText}(${count})`
            if (count <= 0) {
              dom.innerText = initialText
              clearInterval(timer2)
            }
            count--
          }
          func()
        }
        el.disabled = true
        el.classList.add('is-disabled')
        const timer = setTimeout(() => {
          el.disabled = false
          el.classList.remove('is-disabled')
          clearTimeout(timer)
        }, time * 1000)
      }
    })
  },
}

export default noMoreClick
