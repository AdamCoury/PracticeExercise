<template>
  <div class="home">
    <div class="container">
      <img src="../assets/EELogoResized.png" class="img-fluid" alt="Logo" />
    </div>
    <verification class="mt-5" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Verification from "@/components/Verification/Verification.vue";

@Component({
  components: {
    Verification
  }
})
export default class Home extends Vue {}
</script>
