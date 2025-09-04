import axios from 'axios'

export async function fetchData(URL) {
    try {
        const res = await axios.get(URL)
        return res.data
    } catch (e) {
        console.log(`Error: ${e}.`)
        throw e 
    } finally {
        console.log('Request finished')
    }
}