<template>
  <div class="container about">
    <h1 style="color: white">This is an about page</h1>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import loadData from "@/services/LoadData";

@Component
export default class OurTeam extends Vue {
  async mounted() {
    console.log("Got to home");
    console.log(await loadData());
  }
}
</script>
<style lang="scss">
.about {
  margin-bottom: 480px;
}
</style>
