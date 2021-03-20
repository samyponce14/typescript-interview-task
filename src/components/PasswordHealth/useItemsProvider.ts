import {useEffect, useState} from 'react';
import getUserItems, {IItem} from '../../services/getUserItems';

const userItemsProvider = (): {isLoading, errorMessage, items} => {
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<String>();
  const [items, setItems] = useState<Array<IItem>>([])

  useEffect(() => {
    (async (): Promise<void> => {
      setIsLoading(true);

      try {
        const userItems = await getUserItems();

        setItems(userItems);
      } catch (error) {
        setErrorMessage(error.message);
      }

      setIsLoading(false);
    })()
  }, []);

  return {
    isLoading,
    errorMessage,
    items,
  }
};

export default userItemsProvider;
