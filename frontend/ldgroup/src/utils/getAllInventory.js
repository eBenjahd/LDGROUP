import { fetchData } from "./fetch";

export async function GetAllInventory() {
    
    const INVENTORY_URL = import.meta.env.VITE_ALL_INVENTORY

    try {
        const data = await fetchData(INVENTORY_URL)
        const inventoryMap = {}
        data.forEach((item) => {
            inventoryMap[item.product] = item.quantity;
        })
        return inventoryMap
    } catch (e) {
        console.log(`Error: ${e}`)
    }
}