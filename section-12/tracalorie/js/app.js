//Storage Controller
const StorageCtrl = (function(){
  //public methods
  return {
    storeItem: function(item){
      
      let items;
      
      //make sure we have an entry in LS
      if(localStorage.getItem('items') === null){
        console.log('it is null');
        
        items = [];
        items.push(item);
        localStorage.setItem('items', JSON.stringify(items));
      } else{
        console.log('it is not null');
        items = JSON.parse(localStorage.getItem('items'));
        items.push(item);
        localStorage.setItem('items', JSON.stringify(items));
      }
    },
    getItemsFormStorage: function(){
      let items;
      if(localStorage.getItem('items') === null){
        items = [];
      } else {
        items = JSON.parse(localStorage.getItem('items'));
      }
      return items;
    }
  }
})()




//Item Controller
const ItemCtrl = (function () {
  //Item Constructor
  const Item = function (id, name, calories) {
    this.id       = id;
    this.name     = name;
    this.calories = calories;
  }

  //Data Structure/State
  const data = {
    items: StorageCtrl.getItemsFormStorage(),
    currentItem: null,
    totalCalories: 0
  }

  //Public Methods
  return {
    getItems: function () {
      return data.items;
    },
    logData: function () {
      return data;
    },
    addItem: function (name, calories) {
      //get next id
      let id;
      if (data.items.length > 0) {
        id = data.items[data.items.length - 1].id + 1;
      } else {
        id = 0;
      }

      //Parse Calories
      calories = Number(calories);

      //add item to collection
      newItem = new Item(id, name, calories)
      data.items.push(newItem);
      return newItem;
    },
    updateItem: function (name, calories) {
      calories = Number(calories);

      let found = null;
      data.items.forEach(function (item) {
        if (item.id === data.currentItem.id) {
          item.name     = name;
          item.calories = calories;
          found         = item;
        }
      });
      return found;
    },
    getTotalCalories: function () {
      let total = 0;
      data.items.forEach(function (item) {
        total += item.calories;
      });

      data.totalCalories = total;
      return data.totalCalories;
    },
    getItemById: function (id) {
      let found = null;
      data.items.forEach(function (item) {
        if (item.id === id) {
          found = item;
        }
      });
      return found;
    },
    deleteItem: function (itemId) {
      //get the ids
      const ids = data.items.map(function (item) {
        return item.id;
      });

      //get the index of the id
      const index = ids.indexOf(itemId);

      //Remove it from data
      data.items.splice(index, 1);

    },
    setCurrentItem: function (item) {
      data.currentItem = item;
    },
    getCurrentItem: function () {
      return data.currentItem;
    },
    clearAllItems: function () {
      data.items = [];
    }
  }
})();




//UI Controller
const UICtrl = (function () {
  const UISelectors = {
    itemList        : '#item-list',
    listItems       : '#item-list li',
    addBtn          : '.add-btn',
    updateBtn       : '.update-btn',
    deleteBtn       : '.delete-btn',
    backBtn         : '.back-btn',
    clearBtn        : '.clear-btn',
    itemNameInput   : '#item-name',
    itemCalorieInput: '#item-calories',
    totalCalories   : '.total-calories',
    editControl     : 'edit-item',
  }

  //Public Methods
  return {
    displayItems: function (items) {
      items.forEach(function (item, index) {
        document.querySelector(UISelectors.itemList).innerHTML += `
          <li id="item-${item.id}" class="collection-item">
            <strong>${item.name}</strong><br>
            <em>${item.calories} Calories</em>
            <a href="#" class="secondary-content">
              <i class="${UISelectors.editControl} far fa-pencil"></i>
            </a>
          </li>
        `;
      });
    },
    getSelectors: function () {
      return UISelectors;
    },
    getItemInput: function () {
      return {
        name: document.querySelector(UISelectors.itemNameInput).value,
        calories: document.querySelector(UISelectors.itemCalorieInput).value,
      }
    },
    addListItem: function (item) {
      //create list time
      const li = document.createElement('li');
      li.className = 'collection-item';
      li.id = `item-${item.id}`;
      li.innerHTML = `
        <strong>${item.name}</strong><br>
        <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content">
          <i class="${UISelectors.editControl} far fa-pencil"></i>
        </a>
      `;

      //Add the list item to the collection
      const list = document.querySelector(UISelectors.itemList);
      list.appendChild(li);
      list.style.display = 'block';
    },
    resetForm: function () {
      document.querySelector(UISelectors.itemNameInput).value = '';
      document.querySelector(UISelectors.itemCalorieInput).value = '';
    },
    hideList: function () {
      document.querySelector(UISelectors.itemList).style.display = 'none';
    },
    displayTotalCalories: function (totalCalories) {
      document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
    },
    clearEditState: function () {
      UICtrl.resetForm();
      document.querySelector(UISelectors.updateBtn).style.display = 'none';
      document.querySelector(UISelectors.deleteBtn).style.display = 'none';
      document.querySelector(UISelectors.backBtn).style.display   = 'none';
      document.querySelector(UISelectors.addBtn).style.display    = 'inline';
    },
    showEditState: function () {
      document.querySelector(UISelectors.updateBtn).style.display = 'inline';
      document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
      document.querySelector(UISelectors.backBtn).style.display   = 'inline';
      document.querySelector(UISelectors.addBtn).style.display    = 'none';
    },
    displayCurrentItem: function () {
      document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name;
      document.querySelector(UISelectors.itemCalorieInput).value = ItemCtrl.getCurrentItem().calories;
      UICtrl.showEditState();
    },
    updateListItem: function (updatedItem) {
      let listItems = document.querySelectorAll(UISelectors.listItems);

      //listItems is a node list and is not enumerable. We need to convert to array
      listItems = Array.from(listItems);

      listItems.forEach(function (listItem) {
        const itemId = listItem.getAttribute('id');

        if (itemId === `item-${updatedItem.id}`) {
          document.querySelector(`#${itemId}`).innerHTML = `
            <strong>${updatedItem.name}</strong><br>
            <em>${updatedItem.calories} Calories</em>
            <a href="#" class="secondary-content">
              <i class="${UISelectors.editControl} far fa-pencil"></i>
            </a>
          `;
        }
      });
    },
    deleteListItem: function (id) {
      const itemId = `#item-${id}`;
      document.querySelector(itemId).remove();
    },
    removeItems: function () {
      let listItems = document.querySelectorAll(UISelectors.listItems);

      //listItems is a node list and is not enumerable. We need to convert to array
      listItems = Array.from(listItems);

      listItems.forEach(function (item) {
        item.remove();
      });
    }
  }
})();
//End UI Controller




//App Controller
const App = (function (ItemCtrl, UICtrl, StorageCtrl) {
  //Get selectors
  const UISelectors = UICtrl.getSelectors();

  //Load event listeners
  const loadEventListeners = function () {
    //add button
    document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);
    //disable enter key
    document.addEventListener('keypress', function (e) {
      if (e.keyCode === 13 || e.which === 13) {
        e.preventDefault();
        return false;
      }
    });
    //edit control
    document.querySelector(UISelectors.itemList).addEventListener('click', itemUpdateClick);
    //update button
    document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit);
    //back button
    document.querySelector(UISelectors.backBtn).addEventListener('click', function (e) {
      UICtrl.clearEditState();
      e.preventDefault();
    });
    //delete button
    document.querySelector(UISelectors.deleteBtn).addEventListener('click', itemDeleteSubmit);
    //clear button
    document.querySelector(UISelectors.clearBtn).addEventListener('click', clearAllItemsClick);
  }

  //Events
  const itemAddSubmit = function (e) {
    //Get form input from UI controller
    const input = UICtrl.getItemInput();

    //Validate Inputs
    if (input.name !== '' && input.calories != '') {
      //Add Item
      const newItem = ItemCtrl.addItem(input.name, input.calories);

      //Add new item to the UI
      UICtrl.addListItem(newItem);

      //Get total Calories
      const totalCalories = ItemCtrl.getTotalCalories();

      //display total calories
      UICtrl.displayTotalCalories(totalCalories);

      //Save to local storage
      StorageCtrl.storeItem(newItem);

      //rest the form
      UICtrl.resetForm();
    } else {
      //TODO: show error
      console.log('Invalid Inputs');
    }

    e.preventDefault();
  }

  const itemUpdateClick = function (e) {
    if (e.target.classList.contains(UISelectors.editControl)) {
      //get the list item id
      const listItemId    = e.target.parentNode.parentNode.id;
      const listItemIdArr = listItemId.split('-');
      const id            = Number(listItemIdArr[1]);

      const itemToEdit = ItemCtrl.getItemById(id);

      //Set current Item
      ItemCtrl.setCurrentItem(itemToEdit);

      //Display current item in form
      UICtrl.displayCurrentItem();
    }

    e.preventDefault();
  }

  const itemUpdateSubmit = function (e) {
    //Get new values from UI
    const input = UICtrl.getItemInput();

    //Update the data
    const updatedItem = ItemCtrl.updateItem(input.name, input.calories);

    //update the UI
    UICtrl.updateListItem(updatedItem);

    //Get total Calories
    const totalCalories = ItemCtrl.getTotalCalories();

    //display total calories
    UICtrl.displayTotalCalories(totalCalories);

    //reset state
    UICtrl.clearEditState();

    e.preventDefault();
  }

  const itemDeleteSubmit = function (e) {
    //get current item
    const currentItem = ItemCtrl.getCurrentItem();

    //Delete the item from data
    ItemCtrl.deleteItem(currentItem.id);

    //delete from UI
    UICtrl.deleteListItem(currentItem.id);

    //Get total Calories
    const totalCalories = ItemCtrl.getTotalCalories();

    //display total calories
    UICtrl.displayTotalCalories(totalCalories);

    //reset state
    UICtrl.clearEditState();


    e.preventDefault();
  }

  const clearAllItemsClick = function (e) {
    //delete all items from data
    ItemCtrl.clearAllItems();

    //Get total Calories
    const totalCalories = ItemCtrl.getTotalCalories();

    //display total calories
    UICtrl.displayTotalCalories(totalCalories);

    //delete all items from ui
    UICtrl.removeItems();

    //reset state
    UICtrl.clearEditState();

    //Hide the list
    UICtrl.hideList();

    e.preventDefault();
  }

  //Public Methods
  return {
    init: function () {

      //Reset State
      UICtrl.clearEditState();
      //Fetch items from data controller
      const items = ItemCtrl.getItems();

      //If there are items, display them, if not, hide the list
      if (items.length > 0) {
        //Populate List with Items
        UICtrl.displayItems(items);
      } else {
        UICtrl.hideList();
      }

      //Get total Calories
      const totalCalories = ItemCtrl.getTotalCalories();

      //display total calories
      UICtrl.displayTotalCalories(totalCalories);

      //Load Event Listeners
      loadEventListeners();
    }
  }

})(ItemCtrl, UICtrl, StorageCtrl);


//Init the App
App.init();