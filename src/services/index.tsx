import axios from "axios";

export const Api = {
    fetchRecords() {
        return axios({
            method: "get",
            url: "https://api.myjson.com/bins/qwijc"
        });
    }
}