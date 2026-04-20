/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

const menuItems = [
  {
    id: 1,
    name: "Snow Crab Leg",
    type: "nigiri",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/nigiri-snowcrab.png?raw=true",
  },
  {
    id: 2,
    name: "Bluefin Chutoro",
    type: "nigiri",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/nigiri-bluefin.png?raw=true",
  },
  {
    id: 3,
    name: "Seared Bluefin",
    type: "nigiri",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/nigiri-seared-bluefin.png?raw=true",
  },
  {
    id: 4,
    name: "Tuna",
    type: "nigiri",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/nigiri-tuna.png?raw=true",
  },
  {
    id: 5,
    name: "Garlic Skipjack Tuna",
    type: "nigiri",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/nigiri-garlic-tuna.png?raw=true",
  },
  {
    id: 6,
    name: "Yuzu Jalapeno Tuna",
    type: "nigiri",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/nigiri-yuzu-jalapeno-tuna.png?raw=true",
  },
  {
    id: 7,
    name: "American Wagyu",
    type: "nigiri",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/nigiri-american-wagyu.png?raw=true",
  },
  {
    id: 8,
    name: "Umami Oil Seared Beef",
    type: "nigiri",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/nigiri-umami-oil-seared-beef.png?raw=true",
  },
  {
    id: 9,
    name: "Seared Beef with Yakiniku Sauce",
    type: "nigiri",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/nigiri-seared-beef-yakiniku.png?raw=true",
  },
  {
    id: 10,
    name: "Hokkaido Scallop",
    type: "nigiri",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/nigiri-scallop.png?raw=true",
  },
  {
    id: 11,
    name: "Seared Scallop Japanese Mayo",
    type: "nigiri",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/nigiri-scallop.png?raw=true",
  },
  {
    id: 12,
    name: "Salmon",
    type: "nigiri",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/nigiri-salmon.png?raw=true",
  },
  {
    id: 13,
    name: "Salmon Toro",
    type: "nigiri",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/nigiri-salmon-toro.png?raw=true",
  },
  {
    id: 14,
    name: "Garlic Ponzu Salmon",
    type: "nigiri",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/nigiri-garlic-ponzu-salmon.png?raw=true",
  },
  {
    id: 15,
    name: "Umami Oil Salmon",
    type: "nigiri",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/nigiri-umami-oil-salmon.png?raw=true",
  },
  {
    id: 16,
    name: "Seard Salmon Cream Cheese",
    type: "nigiri",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/nigiri-seared-salmon-miso-cream-cheese.png?raw=true",
  },
  {
    id: 17,
    name: "Seared Salmon Japanese Mayo",
    type: "nigiri",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/nigiri-seared-salmon-mayo.png?raw=true",
  },
  {
    id: 18,
    name: "Shrimp",
    type: "nigiri",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/nigiri-shrimp.png?raw=true",
  },
  {
    id: 19,
    name: "Sweet Shrimp",
    type: "nigiri",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/nigiri-sweet-shrimp.png?raw=true",
  },
  {
    id: 20,
    name: "Yuzu Jalapeno Sweet Shrimp",
    type: "nigiri",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/nigiri-yuzu-jalapeno-sweet-shrimp.png?raw=true",
  },
  {
    id: 21,
    name: "Eel",
    type: "nigiri",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/nigiri-eel.png?raw=true",
  },
  {
    id: 22,
    name: "Seared Eel Cream Cheese",
    type: "nigiri",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/nigiri-seared-eel-miso-cream-cheese.png?raw=true",
  },
  {
    id: 23,
    name: "Yellowtail",
    type: "nigiri",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/nigiri-yellowtail.png?raw=true",
  },
  {
    id: 24,
    name: "Squid",
    type: "nigiri",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/nigiri-squid.png?raw=true",
  },
  {
    id: 25,
    name: "Tamago",
    type: "nigiri",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/nigiri-tamago.png?raw=true",
  },

]

// This is an array of strings (TV show titles)
// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

// This function adds cards the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < menuItems.length; i++) {
    const item = menuItems[i];
   

    // This part of the code doesn't scale very well! After you add your
    // own data, you'll need to do something totally different here.

    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, item.name, item.imageURL); 
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

function showCardsDetails() {
  const cardContainer = document.getElementById("menu-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector("#nigiri-section .menu");
  console.log("menu container:", cardContainer);
  console.log("menu template:", templateCard);
  for (let i = 0; i < menuItems.length; i++) {
    const item = menuItems[i];
   

    // This part of the code doesn't scale very well! After you add your
    // own data, you'll need to do something totally different here.

    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, item.name, item.imageURL); 
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

function editCardContent(card, newTitle, newImageURL) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newTitle;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + " Poster";

  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);
document.addEventListener("DOMContentLoaded", showCardsDetails);

function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!",
  );
}

function removeLastCard() {
  menuItems.pop(); // Remove last item in titles array
  showCards(); // Call showCards again to refresh
}
