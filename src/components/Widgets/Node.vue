<template>
  <div class="col">
    <div class="">
      <div class="row">
        <hr class="above-line" v-if="!first" />
      </div>
      <div class="row">
        <div
          class="card phone-sizing"
          style="margin: auto; width: 100px; border: #961a1a 3px solid"
        >
          <div class="card-body marginable">
            <div
              style="color: #961a1a; font-weight: bold"
              class="row justify-content-center"
            >
              <div class="col col-md-8 col-lg-6">
                <div class="row justify-content-center">
                  <div class="work-sans">
                    {{ team.name }}
                  </div>
                </div>
                <div class="row justify-content-center mobile-hiding">
                  <div class="work-sans">
                    {{ team.title }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <hr class="below-line" v-if="team.reports && team.reports.length > 1" />
      </div>
      <div class="row">
        <hr
          v-if="team.reports && team.reports.length > 1"
          style="margin-bottom: -2px"
        />
      </div>
    </div>
    <div v-if="team.reports && team.reports.length > 0" style="color: white">
      <div class="row">
        <node
          v-for="(teams, index) in team.reports"
          v-bind:team="teams"
          v-bind:key="teams.name"
          v-bind:index="index"
          v-bind:parent-length="team.reports.length"
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

  @Prop({ default: false })
  first!: boolean;

  @Prop({ default: 1 })
  parentLength!: number;

  @Prop({ default: 0 })
  index!: number;
}
</script>

<style scoped lang="scss">
hr {
  background-color: white;
  width: 50.4%;
  height: 4px;
  margin-top: 0;
  display: flex;
}
.vl {
  border-right: 4px solid white;
  height: 75px;
  left: 50%;
  position: absolute;
  top: 0;
}
.below-line {
  width: 5px;
  height: 20px;
  margin-bottom: 0;
  margin-top: 0;
}
.above-line {
  width: 5px;
  height: 50px;
  margin-bottom: 0;
  margin-top: -3px;
}

@media (min-width: 320px) and (max-width: 450px) {
  .marginable {
    margin: auto;
    width: auto;
  }
  .card {
    width: auto;
    margin: auto;
  }
  .phone-sizing {
    max-width: 100%;
  }
  .mobile-hiding {
    display: none;
  }
  hr {
    background-color: white;
    width: 51.5%;
    height: 4px;
    margin-top: 0;
  }
}
</style>
