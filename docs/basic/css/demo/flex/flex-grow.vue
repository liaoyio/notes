<template>
  <div>
    <div class="ls">
      <div class="pb-2">
        <code>flex容器</code>有 <code>3</code> 个子元素, 给第2个子元素设置<code>flex-grow: 1</code>
      </div>
      <div class="bg-stripes-indigo">
        <div class="it">
          01
        </div>
        <div class="light-nth" style="flex-grow: 1;">
          02
        </div>
        <div class="it">
          03
        </div>
      </div>
      <div class="pt-8 pb-2">
        <code>flex容器</code>有 <code>3</code>个子元素,第一个和最后一个子元素设置为 <code>flex-grow: 1</code> , 第2个子元素设置 <code>flex-grow: 0</code>
      </div>
      <div class="bg-stripes-indigo">
        <div class="light-nth" style="flex-grow: 1;">
          01
        </div>
        <div class="it" style="flex-grow: 0;">
          02
        </div>
        <div class="light-nth" style="flex-grow: 1;">
          03
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ls {
  border-radius: 0.5rem;
  padding: 2rem;
  .bg-stripes-indigo {
    background-color: #818cf81a;
    background-image: linear-gradient(135deg, #6366f180 10%, #0000 0, #0000 50%, #6366f180 0, #6366f180 60%, #0000 0, #0000);
    background-size: 7.07px 7.07px;
    display: flex;
    gap: 1rem;
    color: #fff;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 700;
    border-radius: 0.5rem;
  }

  .light-nth {
    padding: 1rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #6466e9;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  }
}
.it {
  padding: 1rem;
  width: 3.5rem;
  height: 3.5rem;
  flex: none;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #a8b4f6;
}
</style>
