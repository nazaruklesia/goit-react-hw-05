import axios from 'axios';

const BASE_URL = 'https://www.themoviedb.org';
const API_KEY_bmdb = process.env.REACT_APP_API_KEY;
const API_TOKEN_bmdb = process.env.REACT_APP_API_TOKEN;


const options = {
 headers: {
 Authorization: 'Bearer ${API_TOKEN}'}
};

export const fetchMovies = async (query, page = 1) => {
     try {
        const response = await axios.get(BASE_URL, {
            params: {
                avatar,
                id,
                page,
                per_page: 20,
                end_date,
                start_date,
                total_pages,
                account_id: API_KEY_bmdb
            }
        })
        
        return response.data
        
    } catch (error) {
        throw new Error("Movie request failed");
    }
    
}


axios.get(url, options)
    .then(response => console.log(response))
    .catch(err => console.error(err));



    