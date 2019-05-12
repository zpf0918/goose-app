<template>
  <div>
    <div
     :class="isActive ? 'is-active' : ''"
     @click="isActive = !isActive"
    >
      常规动态写法
    </div>

    <div
      :class="{ 'is-active': isActive }"
      @click="isActive = !isActive"
    >
      进阶动态写法1
    </div>

    <div
      :class="[{ 'is-active': isActive }, placementClass]"
      @click="isActive = !isActive"
    >
      进阶动态写法2
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isActive: false,
      placementClass: 'self'
    }
  }
}
</script>

<style lang="scss">
.is-active {
  color: #ff0000;
}
.self {
  margin-top: 20px;
}
</style>
