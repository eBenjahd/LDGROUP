import { useCart } from '../context/CartContext'
import { useState, useEffect } from 'react';
import { getInventory } from '../utils/getInventory';

function useInventory() {
  const { cartItems } = useCart();
  const [inventory, setInventory] = useState({});

  useEffect(() => {
    let isMounted = true;

    async function fetchInventory() {
      // Filtramos productos que no están en el inventario todavía
      const itemsToFetch = cartItems.filter(item => !(item.id in inventory));

      if (itemsToFetch.length === 0) return;

      try {
        const results = await Promise.all(
          itemsToFetch.map(async (item) => {
            const qty = await getInventory(item.id);
            return { id: item.id, qty };
          })
        );

        if (isMounted) {
          const newInventory = results.reduce((acc, curr) => {
            acc[curr.id] = curr.qty;
            return acc;
          }, {});
          setInventory(prev => ({ ...prev, ...newInventory }));
        }
      } catch (error) {
        console.error('Error fetching inventory:', error);
      }
    }

    fetchInventory();

    return () => {
      isMounted = false;
    };
  }, [cartItems, inventory]);

  return inventory;
}

export default useInventory;