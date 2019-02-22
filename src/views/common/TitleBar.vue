<template>
  <div class="title-bar">
    <p>{{title}}</p>
    <el-button plain type="primary" icon="el-icon-refresh" size="medium" v-if="refreshButton" @click="refresh">刷新</el-button>
  </div>
</template>

<script>
export default {
  name: 'TitleBar',
  props: {
    title: String,
    refreshButton: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    refresh () {
      this.$router.go(0)
    }
  }
}
</script>

<style lang="sass" scoped>
  .title-bar
    background-color: #f3f3f3
    border-bottom: 1px solid rgb(228, 228, 228)
    height: 35px
    padding: 10px 0
    p
      margin-left: 5%
      display: inline-block
      border-left: 10px solid #1ABC9C
      padding-left: 40px
      float: left
      line-height: 36px
    .el-button
      float: right
      margin: 0 5% 0 0
</style>
