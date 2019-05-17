<template>
  <div class="aside">
    <div class="modal"></div>
    <div class="modal-card">
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.aside {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  transition: opacity .3s ease;
  .modal {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
  }
  .modal-card {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 450px;
    background: #fff;
  }
}
</style>
