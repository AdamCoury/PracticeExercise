import { shallowMount} from "@vue/test-utils";
import Login from "@/components/Widgets/Login.vue"
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

describe("Login.vue", () => {
    const wrapper = shallowMount(Login, {components:
            {
               'fa-icon': FontAwesomeIcon
            }
    });
    it("Has 2 inputs", () => {
        expect(wrapper.findAll("input").length).toBe(2);
    })

    it("Updates username on change", () => {
        wrapper.findAll('input').at(0).setValue("Username213")
        expect(wrapper.vm.$data.username).toBe("Username213");
    })

    it("Updates password on change", () => {
        wrapper.findAll('input').at(1).setValue("Password216")
        expect(wrapper.vm.$data.password).toBe("Password216");
    })
})