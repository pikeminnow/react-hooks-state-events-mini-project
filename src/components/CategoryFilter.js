import { useState } from "react";
import React from "react";

function DisplayCategoryButton({ category, handleCategoryButton, extraProps }) {
  console.log(handleCategoryButton)
  let thisButton = (<button key={category}
    name={category}
    onClick={(categoryButtonEvent) => handleCategoryButton(categoryButtonEvent)}
    {...extraProps}
  > {category}
  </button>)
  return thisButton;

}


// Pass the list of categories to this component from App. 

function CategoryFilter({ categories }) {
  // When a button is clicked, the following should happen:

  // Whichever button was clicked should have a class of selected. The other buttons should not have any class assigned.
  const [buttonDeck, setButtonDeck] = useState({ categories });
  const [clickedButton, setClickedButton] = useState("");

  function handleCategoryButton(categoryButtonEvent) {

    let buttonClickedValue = categoryButtonEvent.target.innerText;

    setClickedButton(buttonClickedValue);
    // The list of tasks being displayed should be filtered, so that only tasks that match the category that was clicked are displayed.
    // If the button for "All" is selected, all the tasks should be displayed.

  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here 
      Then, update this component to display <button> elements for each category. In order to pass the test, the buttons will need a key prop equal to the category.
      */}
      {console.log(buttonDeck)}

      {categories.map(category => {
        const extraProps = clickedButton === category
          ? { className: "selected" }
          : {}
        return <DisplayCategoryButton
          category={category}
          handleCategoryButton={handleCategoryButton}
          extraProps={extraProps}
        >
          {category}
        </DisplayCategoryButton>
      })}
    </div>
  );
}

export default CategoryFilter;


