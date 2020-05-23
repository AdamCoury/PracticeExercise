<template>
  <div class="row justify-content-center container m-0">
    <form>
      <div class="row input-group mt-3">
        <div class="input-group-prepend">
          <span class="input-group-text"
          ><fa-icon :icon="['fas', 'envelope']" :color="'#961A1A'"></fa-icon
          ></span>
          <input class="form-control work-sans" id="Email" placeholder="Email" />
        </div>
      </div>
      <div class="row input-group mt-3">
        <div class="input-group-prepend">
          <span class="input-group-text"
          ><fa-icon :icon="['fas', 'user']" :color="'#961A1A'"></fa-icon
          ></span>
          <input class="form-control work-sans" id="username" placeholder="Username" />
        </div>
      </div>
      <div class="row input-group mt-3">
        <div class="input-group-prepend">
          <span class="input-group-text"
          ><fa-icon :icon="['fas', 'lock']" :color="'#961A1A'"></fa-icon
          ></span>
          <input class="form-control work-sans" id="password" placeholder="Password" />
        </div>
      </div>
      <div class="row input-group mt-3">
        <div class="input-group-prepend">
          <span class="input-group-text"
          ><fa-icon :icon="['fas', 'key']" :color="'#961A1A'"></fa-icon
          ></span>
          <input class="form-control work-sans" id="confirm-password" placeholder="Confirm Password" />
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
