<template>
  <div>
    <div style="color: white">
      {{team.name}}
    </div>
    <div v-if="team.reports && team.reports.length > 0" style="color: white">
      <node v-for="teams in team.reports" v-bind:team="teams" v-bind:key="teams.name"></node>
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

  mounted() {
    console.log(this.team.name);
  }
}
</script>

<style scoped></style>
