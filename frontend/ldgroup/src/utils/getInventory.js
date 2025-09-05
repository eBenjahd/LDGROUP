import { fetchData } from "./fetch"

const URL = import.meta.env.VITE_GET_INVENTORY_URL


export async function getInventory(id) {
    try {
      // Usamos query param para filtrar por product
      const data = await fetchData(`${URL}?product=${id}`);
      const quantity = data?.quantity ?? 0;
      return quantity;
    } catch (error) {
      console.error("Error fetching inventory:", error);
      return 0;
    }
  }