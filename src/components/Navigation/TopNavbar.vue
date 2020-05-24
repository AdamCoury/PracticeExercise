<template>
  <div>
    <div
      class="navbar navbar-expand-md pt-0 pb-0"
      style="background-color: #961A1A"
    >
      <div class="container ml-1 justify-content-start">
        <div class="row w-100 mobile-styling">
          <a class="navbar-brand pt-0 pb-0 navtitle" style="color: white"
            >ESPORTS ENGINE</a
          >
          <ul class="navbar-nav w-50">
            <li
              :class="{ background: $route.name === 'Home' }"
              class="nav-item active w-100 pt-2 pb-2"
              @click="sendHome()"
            >
              <router-link
                :class="{
                  'color-red': $route.name === 'Home',
                  'color-white': $route.name !== 'Home'
                }"
                class="routeItem navheader"
                to="/"
                >Home</router-link
              >
            </li>
            <li
              :class="{ background: $route.name === 'Our Team' }"
              class="nav-item active w-100 pt-2 pb-2"
              @click="sendOurTeam()"
            >
              <router-link
                class="routeItem navheader"
                to="/our-team"
                :class="{
                  'color-red': $route.name === 'Our Team',
                  'color-white': $route.name !== 'Our Team'
                }"
                >Our Team</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class TopNavbar extends Vue {
  sendHome() {
    this.$router.push({ name: "Home" });
  }
  sendOurTeam() {
    this.$router.push({ name: "Our Team" });
  }
}
</script>

<style scoped lang="scss">
html,
body {
  height: 100%;
}

li:hover{
  cursor: pointer;
  text-decoration: underline;
}
.background {
  background-color: #eeeeee;
}

.color-red {
  color: #961a1a;
}

.color-white {
  color: white;
}
.navheader {
  font-family: "Roboto", sans-serif;
}

.navtitle {
  font-family: "Work Sans", sans-serif;
  font-size: 25px;
}

@media (min-width: 320px) and (max-width: 450px) {
  .justify-content-start {
    justify-content: center !important;
  }
  .mobile-styling {
    justify-content: center !important;
  }
  ul {
    width: 100% !important;
  }
  .ml-1 {
    margin-left: 0 !important;
  }
}
</style>
