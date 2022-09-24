import React from "react";

// Pass the list of categories to this component from App. 


function CategoryFilter({ categories }) {


  function handleCategoryButton(categoryButtonEvent) {

    // When a button is clicked, the following should happen:

    // Whichever button was clicked should have a class of selected. The other buttons should not have any class assigned.
    // The list of tasks being displayed should be filtered, so that only tasks that match the category that was clicked are displayed.
    // If the button for "All" is selected, all the tasks should be displayed.


    console.log("handleCategoryButton");
    return true;

  }



  function displayCategoryButtons(displayCategories) {
    //sometimes things are just there
    return (displayCategories.map((category) => {
      return (<button key={category} onClick={handleCategoryButton}>{category}</button>);
    })
    );
  }



  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here 
      Then, update this component to display <button> elements for each category. In order to pass the test, the buttons will need a key prop equal to the category.
      */}

      {displayCategoryButtons(categories)}

    </div>
  );
}

export default CategoryFilter;




