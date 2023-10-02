

# 妙用 computed 拦截 v-model

大家都知道, vue是单项数据流的，子组件不能直接修改父组件传过来的 `props`，但是在我们封装组件使用`v-model`时，不小心就会打破单行数据流的规则，例如下面这样

:::code-group 

```vue [子组件]
<!-- 子组件 -->
<script setup lang="ts">
defineOptions({ name: 'Child' })
defineProps(['modelValue'] as const)
</script>

<template>
  <el-input v-model="modelValue" />
</template>
```

```vue [父组件]
<!-- 父组件 -->
<script setup lang="ts">
import { ref } from 'vue'
import Child from './Child.vue'

const msg = ref('')
</script>

<Child v-model="msg" />
```
:::

### `emit` 通知父组件修改 `prop`值 

上面代码中，直接在子组件上修改`props`的值，就打破了单向数据流, 为了解决这个问题，我们通常会使用 `emit`自定义事件去通知父组件修改`prop`值

:::code-group 

```vue [子组件]
<!-- 子组件 -->
<script setup lang="ts">
defineOptions({ name: 'Child' })
defineProps(['modelValue'] as const)

const emit = defineEmits(['update:modelValue']) // [!code ++]
const handleValueChange = value => emit('update:modelValue', value) // [!code ++]
</script>

<template>
  <el-input v-model="modelValue" @update:modelValue="handleValueChange" /> // [!code ++]
</template>
```

```vue [父组件]
<!-- 父组件 -->
<script setup lang="ts">
import { ref } from 'vue'
import Child from './Child.vue'

const msg = ref('')
</script>

<Child v-model="msg" />
```
:::


:::tip 
这也是大多数开发者封装组件修改值的方法，其实还有另一种方案，就是利用 `computed` 的 `get`、`set`
:::

### computed 拦截 prop

> vue中的 `computed` 支持对象形式写法, 可以传入一个拥有 `get` 和 `set` 函数的对象，创建一个可手动修改的计算状态。

**利用 `computed` 的 `get` `set` 进行拦截**

:::code-group 

```vue [子组件]
<!-- 子组件 -->
<script setup lang="ts">
import { computed } from 'vue'

defineOptions({ name: 'Child' })
defineProps(['modelValue'] as const)

const emit = defineEmits(['update:modelValue'])

const msg = computed({ // [!code ++]
  get: () => props.modelValue, // [!code ++]
  set: newVal => emit('update:modelValue', newVal) // [!code ++]
}) // [!code ++]
</script>

<template>
  <el-input v-model="msg" /> // [!code ++]
</template>
```

```vue [父组件]
<!-- 父组件 -->
<script setup lang="ts">
import { ref } from 'vue'
import Child from './Child.vue'

const msg = ref('')
</script>

<Child v-model="msg" />
```
:::


### v-model 绑定对象

**那么当v-model绑定的是对象呢？**

可以像下面这样，使用 `computed` 依次拦截多个对象的属性值:


```ts
const name = computed({
  get: () => props.formData.name,
  set: newVal => emit('update:formData', { ...props.modelValue, name: newVal })
})

const age = computed({
  get: () => props.formData.age,
  set: newVal => emit('update:formData', { ...props.modelValue, age: newVal })
})

const phoneNumber = computed({
  get: () => props.formData.phoneNumber,
  set: newVal =>  emit('update:formData', { ...props.modelValue, phoneNumber: newVal })
})

const remark = computed({
  get: () => props.formData.remark,
  set: newVal =>  emit('update:formData', { ...props.modelValue, remark: newVal })
})
```

但是一个个手动拦截 `v-model` 对象的属性值，太过于麻烦，假如有10个输入，我们就需要拦截10次，所以我们需要将拦截整合起来！


### computed 无法直接监听对象

我们会很容易写出下面的代码:

:::code-group

```vue{27-33} [子组件 ErrChild.vue ]
<script setup lang="ts">
import { type PropType, computed, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

interface IForm {
  name: string
  age: string | number
  phoneNumber: string
  remark: string
}

const props = defineProps({
  formData: {
    type: Object as PropType<IForm>,
    required: true,
  },
} as const)

const emit = defineEmits([
  'update:loading',
  'update:formData',
  'submit',
])

const refForm = ref<FormInstance>()

const form = computed({  // [!code focus]
  set: (value: IForm)  => { // [!code focus]
    console.log(`-->监听到了 formData 对象某个值改变:${value}`) // [!code focus]
    emit('update:formData', value) // [!code focus]
  }, // [!code focus]
  get: () => props.formData, // [!code focus]
}) // [!code focus]


const rules: FormRules = {
  name:[
    { required: true, message: '请输入姓名', trigger: 'blur' },
  ],
  age: [
    { required: true, message: '请输入年龄', trigger: 'blur' },
  ],
  phoneNumber: [
    { required: true, message: '请输入电话号码', trigger: 'blur' },
  ],
  remark: [{ required: false }],
}
</script>

<template>
  <el-form
    ref="refForm"
    :model="form"
    :rules="rules"
    status-icon
    label-width="80px"
  >
    <el-form-item prop="name" label="姓名">
      <el-input v-model="form.name" placeholder="请输入姓名" />
    </el-form-item>
    <el-form-item prop="age" label="年龄">
      <el-input v-model="form.age" placeholder="请输入年龄" />
    </el-form-item>
    <el-form-item prop="phoneNumber" label="联系方式">
      <el-input v-model="form.phoneNumber" placeholder="请输入手机号" />
    </el-form-item>
    <el-form-item prop="remark" label="备注">
      <el-input
        v-model="form.remark"
        type="textarea"
        placeholder="请输入备注"
      />
    </el-form-item>
  </el-form>
</template>
```

```vue [父组件]
<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import Child from './ErrChild.vue'

const fromData = reactive({
  name: '',
  age: '',
  phoneNumber: '',
  remark: '',
})
</script>

<template>
  <Child v-model:formData="fromData" />
</template>
```
:::


<script setup>
import Demo1 from './Form/v-model/ErrParent.vue';
import Demo2 from './Form/v-model/Parent.vue';
</script> 

<DemoBlack path="ErrParent.vue">
  <Demo1/>
</DemoBlack>


:::danger 
上面的代码中，我们直接使用的是 props 中的 `formData`对象，这种方式在 computed 的 set 中无法监听到 `formData` 中具体某个值的变化，所以，我们在表单里输入时，log 语句一直没有输出。原因是：`form.xxx` = `xxx` 时, 并不会触发`computed`的`set`，只有`form = xxx`时，才会触发 `set`。
:::



### 使用Proxy代理对象 



所以, 我们需要想一个办法，在 `formData` 的属性修改时，也能`emit("update:formData", newValue)`，为了解决这个问题，我们可以通过`Proxy`代理

:::code-group
```vue{36-48} [子组件 Child.vue ]
<script setup lang="ts">
import { type PropType, computed, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

export interface IForm {
  name: string
  age: string | number
  phoneNumber: string
  remark: string
}

const props = defineProps({
  formData: {
    type: Object as PropType<IForm>,
    required: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
} as const)

const emit = defineEmits([
  'update:loading',
  'update:formData',
  'submit',
])

const refForm = ref<FormInstance>()

const _loading = computed({
  set: (value: boolean) => emit('update:loading', value),
  get: () => props.loading,
})

const form = computed({ // [!code focus]
  get:() => { // [!code focus]
    return new Proxy(props.formData, { // [!code focus]
      get:(target, key) => Reflect.get(target, key), // [!code focus]
      set: (target, key, value) => { // [!code focus]
        console.log('\n ---- Child.vue ---- \n 监听到了 formData 对象某个值改变 -----> :', value, '\n') // [!code focus]
        emit('update:formData', { ...target, [key]: value }) // [!code focus]
        return true // [!code focus]
      }, // [!code focus]
    }) // [!code focus]
  }, // [!code focus]
  set: newValue => emit('update:formData', newValue), // [!code focus]
}) // [!code focus]

const rules: FormRules = {
  name:[{ required: true, message: '请输入姓名', trigger: 'blur' }],
  age: [{ required: true, message: '请输入年龄', trigger: 'blur' }],
  phoneNumber: [{ required: true, message: '请输入电话号码', trigger: 'blur' }],
  remark: [{ required: false }],
}
</script>

<template>
  <el-form
    ref="refForm"
    v-loading="_loading"
    :model="form"
    :rules="rules"
    status-icon
    label-width="80px"
  >
    <el-form-item prop="name" label="姓名">
      <el-input v-model="form.name" placeholder="请输入姓名" />
    </el-form-item>
    <el-form-item prop="age" label="年龄">
      <el-input v-model="form.age" placeholder="请输入年龄" />
    </el-form-item>
    <el-form-item prop="phoneNumber" label="联系方式">
      <el-input v-model="form.phoneNumber" placeholder="请输入手机号" />
    </el-form-item>
    <el-form-item prop="remark" label="备注">
      <el-input
        v-model="form.remark"
        type="textarea"
        placeholder="请输入备注"
      />
    </el-form-item>
  </el-form>
</template>
```

```vue [父组件]
<script setup lang="ts">
import { onMounted, reactive, ref, watch } from 'vue'
import Child from './Child.vue'

const loading = ref(true)

const fromData = ref({  // [!code warning] // 这里必须使用ref定义，否则无法通过 proxy 拦截
  name: '',
  age: '',
  phoneNumber: '',
  remark: '',
})

watch(fromData, (newValue) => {
  console.log('\n ---- Parent.vue ---- \n fromData -----> 值改变了', newValue, '\n')
})

onMounted(()=>{
  loading.value = true
  setTimeout(()=> {
    fromData.value = {
      name: 'Yi',
      age: '25',
      phoneNumber: '13246566775',
      remark: 'Hello world~', 
    }
    loading.value = false
  }, 3000)
})
</script>

<template>
  <div class="pb-6">
    请查看控制台输出 👀
  </div>
  <Child v-model:loading="loading" v-model:form-data="fromData" />
</template>
```
:::

<DemoBlack path="Parent.vue">
  <Demo2/>
</DemoBlack>

:::tip
这样，我们就通过了 `Proxy` + `computed` 完美拦截了`v-model`的对象!
:::

### 封装为 Hooks 

为了后面使用方便，我们直接将其封装成 `hook`

#### 方案一 只适用于父组件传入ref

```ts  useVModel.ts
import { computed } from 'vue'
import type { Ref, UnwrapRef } from 'vue'

/**  为了性能做缓存，针对每个对象，进行缓存 */
const cacheMap = new WeakMap()

export function useVModel<P extends object, K extends keyof P>(
  props: P,
  propsName: K,
  emit: (...args: any[]) => void,
): Ref<UnwrapRef<P[K]>> {
  const _name = propsName as string
  const emit_name = `update:${_name}`

  const data = computed({
    get:() => {
      /**  如果缓存中有对应的代理就不创建新的代理了 */
      if (cacheMap.has(props[_name]))  return cacheMap.get(props[_name])

      const proxy = new Proxy(props[_name], {
        get:(target, key) => Reflect.get(target, key),
        set: (target, key, value) => {
          emit(emit_name, { ...target, [key]: value })
          return true
        },
      })
      /** 如果缓存中没有对应的代理就创建新的代理 */
      cacheMap.set(props[_name], proxy)
      return proxy
    },
    set: newValue => emit(emit_name, newValue),
  })
  return data
}
```

**使用**

```ts
useVModel(props, 'formData', emit)
```

#### 方案二 ref与reactive通用

```ts
import { ref, watch } from 'vue'
import type { UnwrapRef } from 'vue'

export  function useVModel<
  P extends object,
  N extends keyof P,
>(
  props: P,
  name: N,
  emit: (...args: any[]) => void,
) {
  const model = ref(props[name])

  watch(
    () => props[name],
    () => model.value = props[name] as UnwrapRef<P[N]>,
  )

  watch(
    model,
    () => emit(`update:${name as string}`, model.value as P[N]),
    { deep: true },
  )
  return model
}
```


### 参考 🔗

上面的 `useVModel` 写法其实很简陋，社区的`VueUse`库中，有兼容性更强的实现。

1. 下载 `VueUse`
```shell
pnpm  i @vueuse/core 
```
2. 使用

```vue
<script setup lang="ts">
import { type PropType, computed } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

import { useVModel } from '@vueuse/core' // [!code focus]

const props = defineProps({
  formData: { 
    type: Object as PropType<{ name: string; age: string }>,
    required: true 
  }
})

const emit = defineEmits(['update:formData', 'submit'])
const form =  useVModel(props, 'formData', emit) // [!code focus]
// console.log(form.value) // props.formData // [!code focus]
// form.value = { name: 'yi', age: '25'} // emit('update:formData', { name: 'yi', age: '25'}) // [!code focus]
</script>

<template>
  <el-form :model="form">
    <el-form-item prop="name" label="姓名">
      <el-input v-model="form.name" placeholder="请输入姓名" />
    </el-form-item>
    <el-form-item prop="age" label="年龄">
      <el-input v-model="form.age" placeholder="请输入年龄" />
    </el-form-item>
  </el-form>
</template>
```

:::tip
- [VueUse useVModel](https://vueuse.org/core/useVModel/#usevmodel)
- [VueUse useVModels](https://vueuse.org/core/useVModels/)
:::
