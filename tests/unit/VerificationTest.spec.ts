import { shallowMount } from "@vue/test-utils";
import Verification from "@/components/Verification/Verification.vue";

describe("HelloWorld.vue", () => {
  const wrapper = shallowMount(Verification);
  it("Renders Login First", () => {
    expect(wrapper.vm.$data.mode).toBe("login");
  });

  it("Switches mode to Register when Register div is clicked", () => {
    wrapper.find("div.register").trigger("click");
    expect(wrapper.vm.$data.mode).toBe("register");
  });
});
