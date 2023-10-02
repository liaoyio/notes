<template>
  <div>
    <div class="p-5">
      <ul class="!list-none flex flex-col">
        <li>
          <span>联系人</span>
          <input type="text" placeholder="请输入收货人姓名">
        </li>
        <li class="felx items-center">
          <span>性别</span>
          <label for="male">
            <input id="male" type="radio" name="sex" value="0" checked>男
          </label>
          <label for="female">
            <input id="female" type="radio" name="sex" value="1">女
          </label>
        </li>
        <li>
          <span>手机号</span>
          <input type="text" placeholder="请输入收货手机号">
        </li>
        <li>
          <span>选择地区</span>
          <input type="text" placeholder="请选择省市区">
        </li>
        <li>
          <span>收货地址</span>
          <input type="text" placeholder="请填写收货省市区街道">
        </li>
        <li>
          <span>门牌号</span>
          <input type="text" placeholder="例: 6号楼3单元305室">
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
span {
  display: inline-block;
  width: 4rem;
  margin-right: 8px;
  /** 两端文字对齐 */
  text-align: justify;
  text-align-last: justify;
  /** 兼容 ie */
  text-justify: distribute-all-lines;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin: 0;
    padding: 8px 0;

    &:not(:last-child) {
      border-bottom: 1px solid #f6f4f4;
    }
  }

}
</style>
