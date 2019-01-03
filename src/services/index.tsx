import axios from "axios";

export const Api = {
    fetchRecords() {
        return axios({
            method: "get",
            url: "http://ganny.in/cv/data/"
        });
    }
}