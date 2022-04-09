export const API_ROOT = process.env.REACT_APP_DS_API;

export default class API {
    constructor(TOKEN) {
        this.TOKEN = TOKEN;
    }

    headers = () => {
        return {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + this.TOKEN,
        };
    };

    async login(data) {
        return await fetch(`${API_ROOT}/users/login`, {
            method: "POST",
            headers: this.headers(),
            body: JSON.stringify(data),
        }).then((resp) => resp.json());
    }
}
