<template>
  <div class="flexbBox">
    <ul>
      <li>
        <h5>
          stretch
        </h5>
        <div>
          <div class="flex " style="justify-content: stretch; height: 82px; width: 100%;">
            <div class="item not-tall super-wide">
              A
            </div>
            <div class="item not-tall super-wide">
              B
            </div>
            <div class="item not-tall super-wide">
              C
            </div>
          </div>
        </div>
      </li>

      <li>
        <h5>space-between</h5>
        <div>
          <div class="flex " style="justify-content: space-between; height: 82px; width: 100%;">
            <div class="item not-tall">
              A
            </div>
            <div class="item not-tall">
              B
            </div>
            <div class="item not-tall">
              C
            </div>
          </div>
        </div>
      </li>

      <li>
        <div>
          <h5>space-around</h5>
        </div>
        <div>
          <div class="flex " style="justify-content: space-around; height: 82px; width: 100%;">
            <div class="item not-tall">
              A
            </div>
            <div class="item not-tall">
              B
            </div>
            <div class="item not-tall">
              C
            </div>
          </div>
        </div>
      </li>

      <li>
        <h5>space-evenly</h5>
        <div>
          <div class="flex not-tall " style="justify-content: space-evenly; height: 82px; width: 100%;">
            <div class="item not-tall">
              A
            </div>
            <div class="item not-tall">
              B
            </div>
            <div class="item not-tall">
              C
            </div>
          </div>
        </div>
      </li>

      <li>
        <h5>center</h5>
        <div>
          <div class="flex not-tall " style="justify-content: center; height: 82px; width: 100%;">
            <div class="item not-tall">
              A
            </div>
            <div class="item not-tall">
              B
            </div>
            <div class="item not-tall">
              C
            </div>
          </div>
        </div>
      </li>

      <li>
        <h5>flex-end</h5>
        <div>
          <div class="flex not-tall " style="justify-content: flex-end; height: 82px; width: 100%;">
            <div class="item not-tall">
              A
            </div>
            <div class="item not-tall">
              B
            </div>
            <div class="item not-tall">
              C
            </div>
          </div>
        </div>
      </li>

      <li>
        <h5>flex-start</h5>
        <div>
          <div class="flex not-tall " style="justify-content: flex-start; height: 82px; width: 100%;">
            <div class="item not-tall">
              A
            </div>
            <div class="item not-tall">
              B
            </div>
            <div class="item not-tall">
              C
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.flexbBox{
  > ul {
  list-style: none !important;
  padding: 0;
  margin: 0 !important;

  h5 {
    min-width: 200px;
    margin-bottom: 12px;
  }
}
}

.flex {
  display: flex;
  background: #9369ff !important;
  border-radius: 8px;
  padding: 8px;
}

.not-tall {
  height: 50px;
  line-height: 50px;
}

.super-wide {
  width: 100%;
}

.item {
  font-size: 28px;
  font-weight: bold;
  border-radius: 8px;
  min-width: 100px;
  text-align: center;
  background: #fbe404;
  box-shadow: inset 8px 8px 10px #ffffff, inset -3px -3px 10px #ff8e19;
  color: var(--flex-item-color);
  margin: 8px;
}

.write-for-us {
  padding: 14px;
  margin: 14px;
  background: #007fff;
  border: 2px solid transparent;
  font-weight: bold;
  color: #ffffff;
}

.write-for-us:hover {
  color: #007fff !important;
  background-color: transparent !important;
  border-color: #007fff !important;
}

.pointer {
  cursor: pointer;
}
</style>
