<template>
  <div id="app" class="app">
    <div class="sidebar">
      <div class="user-area">
        <img src="./assets/profile.jpeg" alt="" />
        <div class="user-details">
          <span class="name">James Olson</span>
          <span class="title">Administrator</span>
        </div>
      </div>
      <router-link v-for="page in pages" :key="page.displayName" :to="page.to">
        <font-awesome-icon :icon="['far', page.icon]" />
        <span>{{ page.displayName }}</span>
      </router-link>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pages: [
        {
          to: "/",
          displayName: "Home",
          icon: "fa-face-grin",
        },
        {
          to: "/help",
          displayName: "Help",
          icon: "fa-comment",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
/** general css */
@import url("https://fonts.googleapis.com/css2?family=Assistant:wght@300&family=Montserrat:wght@600&display=swap");
@import "./styles/variables.scss";

html,
body {
  height: 100%;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: 12px;
  font-family: "Assistant";
  font-weight: 400;
  background-color: var(--background-color);
  overflow: hidden;
}

.app {
  display: flex;
  height: 100%;

  .sidebar {
    display: flex;
    flex-direction: column;
    height: 100%;
    min-width: 20vw;
    background: var(--secondary-color);
    padding: 40px 0;

    .user-area {
      display: flex;
      align-items: center;
      border-bottom: 1px solid var(--seperator-color);
      color: var(--light-color);
      font-size: 24px;
      font-family: "Montserrat", sans-serif;
      gap: 12px;
      padding: 12px;
      margin-bottom: 24px;

      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        object-fit: cover;
      }

      .user-details {
        display: flex;
        flex-direction: column;

        .title {
          font-size: 12px;
          color: var(--light-color);
          font-family: "Assistant", sans-serif;
          font-weight: 400;
        }
      }
    }

    a {
      display: flex;
      align-items: center;
      font-size: 1.6rem;
      color: #7f7588;
      text-decoration: none;
      padding: 20px;

      > *:not(:last-child) {
        margin-right: 18px;
      }

      &.router-link-exact-active {
        background-color: var(--primary-color);
        box-shadow: 0px 0px  10px var(--primary-color);
        color: #fff;
      }
    }
  }

  .content {
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    background: var(--light-color);
  }
}
</style>
