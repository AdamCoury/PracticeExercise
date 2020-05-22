<template>
  <div class="home">
    <verification
      class="mt-5"
    />
  </div>
</template>

<script lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
import { Component, Vue } from "vue-property-decorator";
import Verification from "@/components/Verification/Verification.vue";

@Component({
  components: {
    Verification,
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>
