<template>
  <div class="container about pt-5" v-if="initialized">
    <h1
      style="color: white; font-weight: bold; text-transform: uppercase"
      class="work-sans"
    >
      {{ client[0].name }}
    </h1>
    <div class="row justify-content-center">
      <div class="col">
        <!-- THE JSON PROVIDED WAS IN AN ARRAY SO I PULLED FROM [0]. IF NOT LEFT IN AN ARRAY ORIGINALLY AND PASSED STRICTLY AS JSON THIS WILL NEED TO CHANGE -->
        <node v-bind:team="client[0].team" :first="true"></node>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Node from "@/components/Widgets/Node.vue";
import { IClient } from "@/services/LoadData";
import loadData from "@/services/LoadData";

@Component({
  components: { Node }
})
export default class OurTeam extends Vue {
  private initialized = false;
  private client: IClient | null = null;

  mounted() {
    this.client = loadData();
    this.initialized = true;
  }
}
</script>
<style lang="scss">
.about {
  margin-bottom: 480px;
}
</style>
