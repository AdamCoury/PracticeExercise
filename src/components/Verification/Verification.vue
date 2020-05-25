<template>
  <div class="container">
    <div class="row justify-content-center h-100">
      <div class="col col-md-8 col-lg-6">
        <div class="card w-75" style="margin: auto">
          <div class="card-header p-0 border-bottom-0">
            <div class="row justify-content-center w-100 m-0">
              <div
                @click="setMode('login')"
                class="col pt-2 pb-2 login"
                :class="{
                  engaged: mode === 'login',
                  'not-engaged clickable': mode !== 'login'
                }"
              >
                <h5 class="work-sans">Login</h5>
              </div>
              <div
                @click="setMode('register')"
                class="col pt-2 pb-2 register"
                :class="{
                  engaged: mode === 'register',
                  'not-engaged clickable': mode !== 'register'
                }"
              >
                <h5 class="work-sans">Register</h5>
              </div>
            </div>
          </div>
          <div class="card-body border-top-0">
            <h3 class="work-sans">Welcome!</h3>
            <login v-if="mode === 'login'" />
            <register
              v-if="mode === 'register'"
              :emit="needRegInfo"
              :verified="verified"
              v-on:register="validateRegistration($event)"
            />
          </div>
          <div class="card-footer">
            <button
              v-if="mode === 'login'"
              class="btn btn-secondary btn-rounded w-50 work-sans"
            >
              Login
            </button>
            <button
              v-if="mode === 'register'"
              class="btn btn-secondary btn-rounded w-50 work-sans"
              @click="askForInfo()"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Login from "@/components/Widgets/Login.vue";
import Register from "@/components/Widgets/Register.vue";
import { IRegister } from "@/Interfaces/Register";
@Component({
  components: { Register, Login }
})
export default class Verification extends Vue {
  public mode = "login";
  private needRegInfo = false;
  private verified: boolean | null = null;

  public setMode(mode: string) {
    this.mode = mode;
  }

  askForInfo() {
    this.needRegInfo = true;
  }

  public validateRegistration(regInfo: IRegister) {
    console.log("Getting here");
    console.log(regInfo);
    if (regInfo.password === regInfo.confirmPassword) {
      this.verified = true;
      this.needRegInfo = false;
      return;
    }
    this.verified = false;
    this.needRegInfo = false;
  }
}
</script>

<style scoped lang="scss">
.clickable {
  cursor: pointer;
}
.clickable:hover {
  background-color: #333232;
  color: #ffffff;
}
.engaged {
  color: #961a1a;
  background-color: white;
}
.not-engaged {
  color: white;
  background-color: #961a1a;
}
h5 {
  font-weight: bold;
  font-size: 20px;
}
.btn-rounded {
  border-radius: 30px;
}

h3 {
  color: #333232;
  font-weight: bold;
  font-size: 20px;
}
</style>
