<template>
  <div>
    <div
      class="navbar navbar-expand-lg  h-100 m-0 pt-0 pb-0 h-100"
      style="background-color: #961A1A"
    >
      <div class="container ml-1 justify-content-start">
        <a class="navbar-brand pt-0 pb-0" style="color: white">ESPORTS ENGINE</a>
        <ul class="navbar-nav w-25">
          <li :class="{'background': $route.name==='Home'}" class="nav-item active mr-2 w-50 pt-2 pb-2">
            <router-link :class="{'color-red': $route.name==='Home', 'color-white': $route.name!=='Home'}" class="routeItem" to="/">Home</router-link>
          </li>
          <li :class="{'background': $route.name==='Our Team'}" class="nav-item active ml-2 w-50 pt-2 pb-2">
            <router-link class="routeItem" to="/our-team" :class="{'color-red': $route.name==='Our Team', 'color-white': $route.name!=='Our Team'}">Our Team</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class TopNavbar extends Vue {
}
</script>

<style scoped lang="scss">
html,
body {
  height: 100%;
}

  .background {
    background-color: #eeeeee;
  }

  .color-red{
    color: #961A1A;
  }

  .color-white {
    color: white;
  }
  a{
    font-family: 'Roboto', sans-serif;
  }
</style>
