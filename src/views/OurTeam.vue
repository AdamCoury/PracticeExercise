<template>
  <div class="container about pt-5" v-if="initialized">
    <h1
      style="color: white; font-weight: bold; text-transform: uppercase"
      class="work-sans"
    >
      {{ client.name }}
    </h1>
    <div class="row justify-content-center">
      <div class="col">
        <node v-bind:team="client.team" :first="true"></node>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Node from "@/components/Widgets/Node.vue";

@Component({
  components: { Node }
})
export default class OurTeam extends Vue {
  private initialized = false;
  private client = {
    name: "Client 1",
    team: {
      name: "Jeff",
      title: "CEO",
      reports: [
        {
          name: "Tina",
          title: "CFO",
          reports: [
            {
              name: "Mark",
              title: "Finance Officer II"
            },
            {
              name: "Brad",
              title: "Finance Officer I"
            }
          ]
        },
        {
          name: "Cornelius",
          title: "CTO",
          reports: [
            {
              name: "Soon-Yi",
              title: "Architect",
              reports: [
                {
                  name: "Bob",
                  title: "Principal Engineer",
                  reports: [
                    {
                      name: "Hanna",
                      title: "Senior Software Engineer IV"
                    },
                    {
                      name: "Jeff",
                      title: "QA Automation Developer"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  };

  mounted() {
    this.initialized = true;
  }
}
</script>
<style lang="scss">
.about {
  margin-bottom: 480px;
}
</style>
