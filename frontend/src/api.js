import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:5000"
  });

export const API = {
    login: async (username, password) => {
        const response = await api.post("/login", {"username": username, "password": password});
        return response.data;
    },

    register: async (username, password, firstname, lastname, email, college, age, years, phonenumber) => {
        const response = await api.post("/saveUser", {
            "username": username,
            "password": password,
            "lastname": lastname,
            "email":email,
            "firstname": firstname,
            "college": college,
            "age": age,
            "years": years,
            "phonenumber": phonenumber
        });

        return response.data;
    },

    submitForm: async (user_id, employer_name, gotInterview, gotOffer, socialMedia) => {
        const response = await api.post("submitForm", {
            "user_id" : user_id,
            "employer_name" : employer_name,
            "got_interview" : gotInterview === "yes" ? true :  false,
            "got_offer" : gotOffer === "yes" ? true :  false,
            "social_media" : socialMedia
        });
        return response.data;
    },

    getForms: async (user_id) =>{
        const response = await api.get("/getforms?user_id="+user_id);
        return response.data;
    },

    getUser: async (user_id) => {
        const response = await api.get("/user?user_id="+user_id);
        return response.data;
    }
}