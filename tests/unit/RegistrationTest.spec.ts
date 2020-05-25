import { shallowMount} from "@vue/test-utils";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import Register from "@/components/Widgets/Register.vue";

describe("Login.vue", () => {
    const wrapper = shallowMount(Register, {components:
            {
                'fa-icon': FontAwesomeIcon
            }
    });
    it("Has 4 inputs", () => {
        expect(wrapper.findAll("input").length).toBe(4);
    })

    it("Updates email on change", () => {
        wrapper.findAll('input').at(0).setValue("Email@testing.com");
        expect(wrapper.vm.$data.email).toBe("Email@testing.com");
    })

    it("Updates username on change", () => {
        wrapper.findAll('input').at(1).setValue("Username213");
        expect(wrapper.vm.$data.username).toBe("Username213");
    })

    it("Updates password on change", () => {
        wrapper.findAll('input').at(2).setValue("Password216");
        expect(wrapper.vm.$data.password).toBe("Password216");
    })

    it("Updates password on change", () => {
        wrapper.findAll('input').at(3).setValue("Password216");
        expect(wrapper.vm.$data.confirmPassword).toBe("Password216");
    })
})