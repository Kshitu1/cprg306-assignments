//page.js

'use client';

import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';
import itemsData from './items.json';
import { useState } from 'react';
import { useUserAuth } from '../_utils/auth-context';

export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');

  const handleAddItem = (newItem) => {
    setItems(prevItems => [...prevItems, newItem]);
  };

  const handleItemSelect = (itemName) => {
    const cleanedName = itemName.split(',')[0].replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�])/g, '').trim();
    setSelectedItemName(cleanedName);
  };

  if (!user) {
    return <p>You must be logged in to view this page.</p>;
  }

  return (
    <main className="container mx-auto mt-8 p-4 bg-gray-100 rounded-lg shadow">
      <h1 className="text-3xl font-bold text-green-600 mb-6">Shopping List App</h1>
      
      <div className="flex">
        <div className="w-1/2">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="w-1/2">
          {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
        </div>
      </div>
    </main>
  );
}
