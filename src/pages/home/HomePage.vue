<template>
  <div class="home-page-container">
    <span class="main-header">WELCOME</span>
    <span>This is our web application example</span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.home-page-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;

  .main-header {
    font-size: 4rem;
    font-family: "Montserrat", sans-serif;
  }
}
</style>
