<template>
  <div id="app">
    <top-navbar />
    <div class="content">
      <router-view />
    </div>
    <footer class="position-sticky">
      <div class="container small">
        <div class="row">
          <div class="col">
            <a>Privacy</a> |
            <a>Terms</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TopNavbar from "@/components/Navigation/TopNavbar.vue";

@Component({
  components: {
    TopNavbar
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  flex-direction: column;
  text-align: center;
  min-height: 100%;
}
.content {
  overflow: auto;
}
</style>
