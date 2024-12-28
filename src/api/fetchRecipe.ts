import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;
const apiUrl = import.meta.env.VITE_API_URL;

export const fetchRecipe = (from: BigInt, size: BigInt, tags: String) => axios.get(`${apiUrl}/recipes/list?from=${from}&size=${size}&tags=${tags}`, {
    headers: {
        'x-rapidapi-key': apiKey
    }
})
