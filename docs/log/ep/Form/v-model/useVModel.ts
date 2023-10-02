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
