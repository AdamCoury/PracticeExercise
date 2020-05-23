<template>
  <div class="col">
    <div>
      <div class="vl"></div>
      <div
        class="card mt-5"
        style="margin: auto; width: 100px; border: #961a1a 3px solid"
      >
        <div class="card-body">
          <div
            style="color: #961a1a; font-weight: bold"
            class="row justify-content-center"
          >
            <div class="col">
              <div class="row justify-content-center">
                <div class="work-sans">
                  {{ team.name }}
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="work-sans">
                  {{ team.title }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <hr v-if="team.reports && team.reports.length > 1" class="mb-0 margining"/>
      </div>
    </div>
    <div v-if="team.reports && team.reports.length > 0" style="color: white">
      <div class="row">
        <node
          v-for="teams in team.reports"
          v-bind:team="teams"
          v-bind:key="teams.name"
        ></node>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

interface Team {
  name: string;
  reports: Team[];
  title: string;
}

@Component({ name: "Node" })
export default class Node extends Vue {
  @Prop()
  team!: Team;
}
</script>

<style scoped lang="scss">
hr {
  background-color: white;
  width: 50%;
  height: 2px;
}
.vl {
  border-right: 3px solid white;
  height: 75px;
  left: 50%;
  position: absolute;
  top: 0;
}
</style>
