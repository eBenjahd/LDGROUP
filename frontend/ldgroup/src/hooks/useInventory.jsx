import { useState, useEffect } from 'react';
import { GetAllInventory } from '../utils/getAllInventory';

function useInventory(products) {
  const [inventory, setInventory] = useState({});

  useEffect(() => {
    if (!products || products.length === 0) return;

    let isMounted = true;

    const fetchInventory = async () => {
      try {
        const results = await GetAllInventory()

        if (isMounted && results) {
          setInventory(results);
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