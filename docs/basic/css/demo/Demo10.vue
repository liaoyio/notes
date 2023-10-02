<template>
  <div class="container flex_ccc">
    <div class="reference">
      <div class="rect" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 18rem;
  border-radius: 8px;

}

.reference {
  position: relative;
  width: 8.75rem;
  height: 8.75rem;
  border-radius: 8px;
  border: 2px dashed #fd6622;

}

.rect {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 8rem;
  height: 8rem;
  margin-top: -64px;
  margin-left: -64px;
  background: linear-gradient(to right, #06b6d4, #3b82f6);
  opacity: 0.9;
  cursor: pointer;
  border-radius: 8px;
  transition: transform 0.5s;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #b67ff8;
  }

  &:hover {
    transform: rotate(45deg);
  }
}
</style>
