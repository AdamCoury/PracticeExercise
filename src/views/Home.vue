<template>
  <div class="home"></div>
</template>

<script lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
}
</script>
