import { useState, useEffect } from 'react';
import { getInventory } from '../utils/getInventory';

function useInventory(products) {
  const [inventory, setInventory] = useState({});

  useEffect(() => {
    if (!products || products.length === 0) return;

    let isMounted = true;

    const fetchInventory = async () => {
      try {
        const results = await Promise.all(
          products.map(async (product) => {
            const qty = await getInventory(product.id);
            return { id: product.id, qty };
          })
        );

        if (isMounted) {
          const newInventory = results.reduce((acc, { id, qty }) => {
            acc[id] = qty;
            return acc;
          }, {});
          setInventory(newInventory);
        }
      } catch (error) {
        console.error('Error fetching inventory:', error);
      }
    };

    fetchInventory();

    return () => { isMounted = false; };
  }, [products]);

  return inventory;
}

export default useInventory;