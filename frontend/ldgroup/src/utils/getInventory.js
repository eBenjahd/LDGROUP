import { fetchData } from "./fetch"

const URL = import.meta.env.VITE_GET_INVENTORY_URL

export async function getInventory(id) {
    try {
        const data = await fetchData(`${URL}${id}`);
        const quantity = data?.quantity ?? 0

        return quantity
    } catch {
        return 0; 
    }
}