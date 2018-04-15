//Storage Controller





//Item Controller
const ItemCtrl = (function(){
  //Item Constructor
  const Item = function (id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  }

  //Data Structure/State
  const data = {
    items: [],
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
      }
      else {
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
      // data.currentItem.name = name;
      // data.currentItem.calories = calories;

      // const item = ItemCtrl.getItemById(data.currentItem.id);
      // item.name = name;
      // item.calories = calories;

      UICtrl.clearEditState();
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
    setCurrentItem: function (item) {
      data.currentItem = item;
    },
    getCurrentItem: function () {
      return data.currentItem;
    }
  }
})();




//UI Controller
const UICtrl = (function () {
  const UISelectors = {
    itemList        : '#item-list',
    addBtn          : '.add-btn',
    updateBtn       : '.update-btn',
    deleteBtn       : '.delete-btn',
    backBtn         : '.back-btn',
    clearBtn        : '.clear-btn',
    itemNameInput   : '#item-name',
    itemCalorieInput: '#item-calories',
    totalCalories: '.total-calories',
    editControl: 'edit-item'
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
    getSelectors: function () { return UISelectors; },
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
      document.querySelector(UISelectors.backBtn).style.display = 'none';
      document.querySelector(UISelectors.addBtn).style.display = 'inline';
    },
    showEditState: function () {
      document.querySelector(UISelectors.updateBtn).style.display = 'inline';
      document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
      document.querySelector(UISelectors.backBtn).style.display = 'inline';
      document.querySelector(UISelectors.addBtn).style.display = 'none';
    },
    displayCurrentItem: function () {
      document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name;
      document.querySelector(UISelectors.itemCalorieInput).value = ItemCtrl.getCurrentItem().calories;
      UICtrl.showEditState();
    }
  }
})();
//End UI Controller




//App Controller
const App = (function (ItemCtrl, UICtrl) {
  //Get selectors
  const UISelectors = UICtrl.getSelectors();
  
  //Load event listeners
  const loadEventListeners = function () {
    //add button
    document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);
    //disable enter key
    document.addEventListener('keypress', function (e) { if (e.keyCode === 13 || e.which === 13) { e.preventDefault(); return false;}});
    //edit control
    document.querySelector(UISelectors.itemList).addEventListener('click', itemUpdateClick);
    //update button
    document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit);
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
      const listItemId = e.target.parentNode.parentNode.id;
      const listItemIdArr = listItemId.split('-');
      const id = Number(listItemIdArr[1]);
      
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

})(ItemCtrl, UICtrl);


//Init the App
App.init();