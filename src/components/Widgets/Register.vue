<template>
  <div class="row justify-content-center container m-0">
    <form>
      <div class="row input-group mt-3">
        <div class="input-group-prepend">
          <span class="input-group-text"
            ><fa-icon :icon="['fas', 'envelope']" :color="'#961A1A'"></fa-icon
          ></span>
          <input
            class="form-control work-sans"
            id="Email"
            placeholder="Email"
            v-model="email"
            type="email"
          />
        </div>
      </div>
      <div class="row input-group mt-3">
        <div class="input-group-prepend">
          <span class="input-group-text"
            ><fa-icon :icon="['fas', 'user']" :color="'#961A1A'"></fa-icon
          ></span>
          <input
            class="form-control work-sans"
            id="username"
            placeholder="Username"
            v-model="username"
          />
        </div>
      </div>
      <div class="row input-group mt-3">
        <div class="input-group-prepend">
          <span class="input-group-text"
            ><fa-icon :icon="['fas', 'lock']" :color="'#961A1A'"></fa-icon
          ></span>
          <input
            class="form-control work-sans"
            id="password"
            placeholder="Password"
            v-model="password"
            type="password"
          />
        </div>
      </div>
      <div class="row input-group mt-3">
        <div class="input-group-prepend">
          <span class="input-group-text"
            ><fa-icon :icon="['fas', 'key']" :color="'#961A1A'"></fa-icon
          ></span>
          <input
            class="form-control work-sans"
            id="confirm-password"
            placeholder="Confirm Password"
            v-model="confirmPassword"
            type="password"
          />
        </div>
      </div>
    </form>
    <div v-if="verified">
      <span style="font-size: 12px; color: green"
        >*Successfully Registered</span
      >
    </div>
    <div v-if="verified !== null && !verified">
      <span style="font-size: 12px; color: red"
        >*Please Confirm Your Password</span
      >
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
@Component
export default class Register extends Vue {
  private email = "";
  private username = "";
  private password = "";
  private confirmPassword = "";

  @Prop({ default: false })
  private emit!: boolean;

  @Prop()
  private verified!: boolean;

  @Watch("emit")
  emitInfo() {
    if (this.emit) {
      this.$emit("register", {
        email: this.email,
        username: this.username,
        password: this.password,
        confirmPassword: this.confirmPassword
      });
    }
  }

  @Watch("verified")
  checkVerification() {
    if (this.verified) {
      this.clearForm();
    }
  }

  clearForm() {
    this.username = "";
    this.email = "";
    this.password = "";
    this.confirmPassword = "";
  }
}
</script>

<style scoped lang="scss">
.input-group {
  margin: auto;
}
</style>
