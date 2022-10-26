import axios from "axios";

const ACCESS_KEY = process.env.REACT_APP_API_KEY || "IBunm-mgNITvSmYH-wpT3ia_MwM-wMa59ciJsDA8eLE";

export const unsplash = axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`
    },
});