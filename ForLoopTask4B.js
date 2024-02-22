function checkInventory(inventoryList) {
    for (let i = 0; i < inventoryList.length; i++) {
      const currentItem = inventoryList[i];
      const itemName = currentItem[0];
      const stockQuantity = currentItem[1];
      console.log(Item ${itemName} has ${stockQuantity} in stock.);
    }
  }

const inventoryList = [
    ['Apples', 750],
    ['Bananas', 400],
    ['Cherries', 225],
    ['Watermelon', 10
    0]
];
  
checkInventory(inventoryList);