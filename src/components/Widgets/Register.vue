<template>
  <div class="row justify-content-center container m-0">
    <form>
      <div class="row input-group mt-3">
        <div class="input-group-prepend">
          <span class="input-group-text"
          ><fa-icon :icon="['fas', 'envelope']"></fa-icon
          ></span>
          <input class="form-control" id="Email" placeholder="Email" />
        </div>
      </div>
      <div class="row input-group mt-3">
        <div class="input-group-prepend">
          <span class="input-group-text"
          ><fa-icon :icon="['fas', 'user']"></fa-icon
          ></span>
          <input class="form-control" id="username" placeholder="Username" />
        </div>
      </div>
      <div class="row input-group mt-3">
        <div class="input-group-prepend">
          <span class="input-group-text"
          ><fa-icon :icon="['fas', 'lock']"></fa-icon
          ></span>
          <input class="form-control" id="password" placeholder="Password" />
        </div>
      </div>
      <div class="row input-group mt-3">
        <div class="input-group-prepend">
          <span class="input-group-text"
          ><fa-icon :icon="['fas', 'key']"></fa-icon
          ></span>
          <input class="form-control" id="confirm-password" placeholder="Confirm Password" />
        </div>
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
.input-group{
  margin: auto;
}
</style>
