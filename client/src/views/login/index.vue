<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header-wrapped">
        <div class="header-content">
          <h3>賴暄妮打嗝管理系統</h3>
          <span class="welcome">一天到底要打幾次嗝</span>
        </div>
      </el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
//header外
.header-wrapped {
  //header內
  .header-content {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .welcome {
      font-size: 13px;
    }
  }
}
</style>
