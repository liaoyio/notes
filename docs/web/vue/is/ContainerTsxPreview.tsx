import { defineComponent, ref } from 'vue'
import './a.css'

export default defineComponent({
  setup() {
    const num = ref(0)
    const addNum = () => {
      num.value += 2
    }
    return () => (
      <div>
        <div class="container-preview">
          <p>Container Form</p>
          <div>
            <span>新增：{num.value}</span>
            <button class="buttons" onClick={addNum}>按钮</button>
          </div>
        </div>
      </div>
    )
  },
})
