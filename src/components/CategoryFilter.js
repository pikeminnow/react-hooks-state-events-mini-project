import { useState } from "react";
import React from "react";

// Pass the list of categories to this component from App. 


function CategoryFilter({ categories }) {
  // When a button is clicked, the following should happen:

  // Whichever button was clicked should have a class of selected. The other buttons should not have any class assigned.
  const [buttonDeck, setButtonDeck] = useState({ categories });
  const [clickedButton, setClickedButton] = useState("");

  function handleCategoryButton(categoryButtonEvent) {

    console.log("handleCategoryButton");
    console.log(categoryButtonEvent);
    console.log(categoryButtonEvent.target.innerText);
    console.log(buttonDeck);

    categoryButtonEvent.target.classList.toggle("selected");

    let buttonClickedValue = categoryButtonEvent.target.innerText;

    // let buttonsNotClicked = buttonDeck.categories.filter((button, buttonClickedValue) => !button.includes(buttonClickedValue));

    setClickedButton(buttonClickedValue);
    // The list of tasks being displayed should be filtered, so that only tasks that match the category that was clicked are displayed.
    // If the button for "All" is selected, all the tasks should be displayed.

  }



  function displayCategoryButtons(displayCategories, clickedValue) {
    // const ifClickedClass = clickedValue ? "selected" : "";

    //sometimes things are just there
    let theButtons = (displayCategories.categories.map((category) => {
      console.log({ clickedValue, category });
      console.log(clickedValue === category);
      let buttonToDisplay = (<button
        key={category}
        name={category}
        onClick={(categoryButtonEvent) => handleCategoryButton(categoryButtonEvent)}> {category} </button>)
      return buttonToDisplay;
      // if (clickedValue === category) { buttonToDisplay.classList.toggle("selected"); }

      // let classListBehavior = (clickedValue === category) ? buttonToDisplay.classList(add("selected")) : 

      // if (clickedValue === category) {
      //   return (<button
      //     key={category}
      //     name={category}
      //     className="selected"
      //     onClick={(categoryButtonEvent) => handleCategoryButton(categoryButtonEvent)}
      //   >{category}</button>);
      // }
      // else {
      //   return (
      //     <button
      //       key={category}
      //       name={category}
      //       onClick={(categoryButtonEvent) => handleCategoryButton(categoryButtonEvent)}
      //     >{category}</button>
      //   );
      // }
    })
    );


    return theButtons;
  }



  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here 
      Then, update this component to display <button> elements for each category. In order to pass the test, the buttons will need a key prop equal to the category.
      */}
      {console.log(buttonDeck)}
      {displayCategoryButtons(buttonDeck, clickedButton)}


    </div>
  );
}

export default CategoryFilter;




