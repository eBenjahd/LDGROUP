import axios from 'axios'

export async function fetchData(URL) {
    try {
        const res = await axios.get(URL)
        return res.data
    } catch (e) {
        throw e 
    }
}