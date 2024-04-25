import { useState } from "react";

const Inventory = () => {
    const [inventory, setInventory] = useState([]);
  
    const handleAddItem = (newItem) => {
      setInventory([...inventory, { ...newItem, id: Date.now() }]);
    };
  
    const handleRemoveItem = (id) => {
      setInventory(inventory.filter(item => item.id !== id));
    };
  
    const handleUpdateItem = (updatedItem) => {
      setInventory(inventory.map(item => (item.id === updatedItem.id ? updatedItem : item)));
    };
  
    return (
      <div>
        <h2>Inventory</h2>
        <AddInventoryItem onAdd={handleAddItem} />
        <div>
          {inventory.map(item => (
            <div key={item.id}>
              <InventoryItem item={item} onRemove={handleRemoveItem} />
              <UpdateInventoryItem item={item} onUpdate={handleUpdateItem} />
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Inventory;