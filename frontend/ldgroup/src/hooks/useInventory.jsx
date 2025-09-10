import { useState, useEffect } from 'react';
import { getAllInventory } from '../utils/getAllInventory';

function useInventory(products) {
  const [inventory, setInventory] = useState({});

  useEffect(() => {
    if (!products || products.length === 0) return;

    let isMounted = true;

    const fetchInventory = async () => {
      try {
        const results = await getAllInventory()

        if (isMounted && results) {
          const newInventory = results.reduce((acc, { product, quantity }) => {
            acc[product] = quantity;
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