import data from "../../data/test-data.json"

export default  function loadData() {
    return data;
}

export type IClient = typeof import("../../data/test-data.json")
