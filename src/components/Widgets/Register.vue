<template>
  <div class="row justify-content-center container m-0">
    <form>
      <div class="row form-group">
        <label for="email">Email</label>
        <input class="form-control" id="email" />
      </div>
      <div class="row form-group">
        <label for="username">Username</label>
        <input class="form-control" id="username" />
      </div>
      <div class="row form-group">
        <label for="password">Password</label>
        <input class="form-control" id="password" />
      </div>
      <div class="row form-group">
        <label for="conf-password">Confirm Password</label>
        <input class="form-control" id="conf-password" />
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Register extends Vue {}
</script>

<style scoped lang="scss">
  label{
    font-weight: bold;
  }
</style>
