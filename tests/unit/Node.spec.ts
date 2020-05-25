import {mount, shallowMount} from "@vue/test-utils";
import Node from "@/components/Widgets/Node.vue";

describe("Node.vue", () => {
    it("Receives 4 props", () => {
        const wrapper = mount(Node, {
            propsData: {
                team: {
                    name: "Rachel",
                    reports: [
                        {
                            name: "Ryan",
                            title: "VP",
                            reports: [],
                        },
                        {
                            name: "Anthony",
                            title: "VP Communications",
                            reports: [],
                        }
                    ],
                    title: "CMO"
                },
                parentLength: 2,
                first: true,
                index: 0,
            }
        })
        expect(wrapper.props().team.reports.length).toBe(2);
        expect(wrapper.props().team.name).toBe("Rachel");
        expect(wrapper.props().team.title).toBe("CMO");
    })
})