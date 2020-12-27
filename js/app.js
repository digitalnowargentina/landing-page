/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * All sections are put in one variable
 *
*/
const sections = document.querySelectorAll('section');



function createMenuItems(section) {

  /*
  Li and A elements are created with the DOM
  */
    const menuListItem = document.createElement('li');
    const menuLinkItem = document.createElement('a');
    /*
    An url variable is created using template literals and the section argument's id.
    */
    const linkItemUrl = `#${section.id}`;

    /*
    The name of the section that is being looped is extracted using get Attribute and is put in a variable.
    */

    const sectionName = section.getAttribute("data-nav");

    /*
    The variable created is used to update the name of the menu Link Item
    */

    menuLinkItem.textContent = sectionName;

    /*
    The url of the menu link item is created with set Attribute, so that the user can scroll to the selected section.
    */


    menuLinkItem.setAttribute("href", linkItemUrl);


        /*
        A class is added to the link, that we will use later for detecting the section in the viewport and highlighting the corresponding menu item.
        */


    menuLinkItem.setAttribute("class", `menuLink ${section.id}`);

    /*
    The a element is added to the li element with append child
    */

    menuListItem.appendChild(menuLinkItem);

    /*
    The list element with the a element inside is returned, so that in another function is added to the menu.
    */

    return menuListItem;
}


function buildMenu() {
  /*
  a variable is created the selecting the nav element using the DOM and its ID
  */
  const navMenu = document.getElementById("navbar__list");
  for (const section of sections) {

    /*
    we loop over each of the sections, and then we call the function to create a li item with an a element inside
    */

    const linkItem = createMenuItems(section);

    /*
    Then we add this item to the navigation menu.
    */

    navMenu.appendChild(linkItem);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  //Build navigation menu when the DOM is ready
  buildMenu();
}
)

function makeclassActivated() {
  // Loop over all sections
  for (const section of sections) {
    // Use getBoundingClientRect method to determine the position where the user is scrolling.
    const box = section.getBoundingClientRect();
    // when the section looped is in the center of the screen the class "Classactivated" is added.
    if (box.top <= 150 && box.top >= (-300)) {
      // First the class is added to the section.
      section.classList.add("classActivated");
      // Then we get the id of the section and store it in a variable.
      const id = section.getAttribute("id");
      // Then using that id in a template literal, we can access the a element and add the class "classActivated"
      document.querySelector(`.${id}`).classList.add("classActivated");
    } else {
        // When we stop seeing the section in the screen, we do the same process but removing the class "Class activated"
      const id = section.getAttribute("id");
      document.querySelector(`.${id}`).classList.remove("classActivated");
      section.classList.remove("classActivated");
    }
  }
}
// When the user scrolls, the function is called.

document.addEventListener("scroll", function() {
  makeclassActivated();
});
