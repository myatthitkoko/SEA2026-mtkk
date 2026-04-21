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
  {
    id: 30,
    name: "Caterpillar Roll",
    type: "rolls",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/rolls-catepillar.png?raw=true",
  },
  {
    id: 31,
    name: "Golden Crunchy Roll",
    type: "rolls",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/rolls-golden-crunchy.png?raw=true",
  },
  {
    id: 32,
    name: "Rainbow Roll",
    type: "rolls",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/rolls-rainbow.png?raw=true",
  },
  {
    id: 33,
    name: "Philadelphia Roll",
    type: "rolls",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/rolls-philadelphia.png?raw=true",
  },
  {
    id: 34,
    name: "Snow Crab California Roll",
    type: "rolls",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/rolls-snowcrab-california.png?raw=true",
  },
  {
    id: 35,
    name: "Spicy Tuna Roll",
    type: "rolls",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/rolls-spicy-tuna.png?raw=true",
  },
  {
    id: 60,
    name: "Chicken Gyoza Dumpling",
    type: "sides",
    price: 6.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/sides-chicken-gyoza.png?raw=true",
  },
  {
    id: 61,
    name: "Garlic Ponzu Sashimi",
    type: "sides",
    price: 4.95,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/sides-garlic-ponzu-sashimi.png?raw=true",
  },
  {
    id: 62,
    name: "Tuna Sashimi",
    type: "sides",
    price: 4.95,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/sides-tuna-sashimi.png?raw=true",
  },
  {
    id: 63,
    name: "Salmon Sashimi",
    type: "sides",
    price: 4.95,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/sides-salmon-sashimi.png?raw=true",
  },
  {
    id: 64,
    name: "Yellow Tail Sashimi",
    type: "sides",
    price: 4.95,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/sides-yellowtail-sashimi.png?raw=true",
  },
  {
    id: 65,
    name: "Shrimp Tempura",
    type: "sides",
    price: 4.95,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/sides-shrimp-tempura.png?raw=true",
  },
  {
    id: 90,
    name: "Tantanmen",
    type: "ramen",
    price: 10.95,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/ramen-tantanmen.png?raw=true",
  },
  {
    id: 90,
    name: "Tantanmen",
    type: "ramen",
    price: 11.95,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/ramen-tantanmen.png?raw=true",
  },
  {
    id: 91,
    name: "Miso Ramen",
    type: "ramen",
    price: 11.95,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/ramen-miso-ramen.png?raw=true",
  },
  {
    id: 92,
    name: "Shoyu Ramen",
    type: "ramen",
    price: 11.95,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/ramen-shoyu-ramen.png?raw=true",
  },
  {
    id: 93,
    name: "Tonkotsu Ramen",
    type: "ramen",
    price: 11.95,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/ramen-tonkotsu-ramen.png?raw=true",
  },
  {
    id: 94,
    name: "Shrimp Tempura Udon",
    type: "ramen",
    price: 10.95,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/ramen-shrimp-tempura-udon.png?raw=true",
  },
  {
    id: 95,
    name: "Beef Udon",
    type: "ramen",
    price: 10.95,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/ramen-beef-udon.png?raw=true",
  },
  {
    id: 120,
    name: "Taiyaki Ice Cream",
    type: "desserts",
    price: 6.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/desserts-taiyaki-ice-cream.png?raw=true",
  },
  {
    id: 121,
    name: "Gooey Butter Cake",
    type: "desserts",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/desserts-butter-cake.png?raw=true",
  },
  {
    id: 122,
    name: "NY Cheesecake",
    type: "desserts",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/desserts-ny-cheesecake.png?raw=true",
  },
  {
    id: 123,
    name: "Warabimochi",
    type: "desserts",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/desserts-warabimochi.png?raw=true",
  },

]

// This function adds cards the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < menuItems.length; i++) {
    const item = menuItems[i];
    
    if (item.price.toString() == "4.05") { // this part is to imitate moving sushi belt where all the plates are at the same price
      const nextCard = templateCard.cloneNode(true); // Copy the template card
      editCardContent(nextCard, item.name, item.imageURL, item.price); 
      cardContainer.appendChild(nextCard); // Add new card to the container
    }
  }
}

function showCardsDetails() {
  //resetting some changes during search method
  document.getElementById("message").textContent = "";
  let page = document.querySelector("html");
  let body = document.querySelector("body");
  body.style.setProperty("height", "");
  page.style.setProperty("height", "");

  //this is based on the given template
  const cardContainer = document.getElementById("menu-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector("#menu-section .menu");

  for (let i = 0; i < menuItems.length; i++) {
    const item = menuItems[i];
    //sorting method
    if (document.querySelector('input[name="menu"]:checked').value == "all") {

      const nextCard = templateCard.cloneNode(true); // Copy the template card
      editCardContent(nextCard, item.name, item.imageURL, item.price);
      cardContainer.appendChild(nextCard); // Add new card to the container

    } else if (item.type == document.querySelector('input[name="menu"]:checked').value) {

      const nextCard = templateCard.cloneNode(true); // Copy the template card
      editCardContent(nextCard, item.name, item.imageURL, item.price); 
      cardContainer.appendChild(nextCard); // Add new card to the container

    }
  }
}

function sortAlphabetical(order) {
  if (order == "descend") {
    menuItems.sort((a, b) => b.name.localeCompare(a.name));
  } else {
    menuItems.sort((a, b) => a.name.localeCompare(b.name));
  }
}

function sortPrice(order) {
  if (order == "descend") {
    menuItems.sort((a, b) => b.price - a.price);
  } else {
    menuItems.sort((a, b) => a.price - b.price);
  }
}

function searchCard() {
  document.getElementById("all").checked = true; //to indicate searching for all categories
  //this part is just for display purposes. it does not affect the code logic.
  let page = document.querySelector("html");
  let body = document.querySelector("body");
  body.style.setProperty("height", "100%");
  page.style.setProperty("height", "100%"); // keep footer at the bottom of the page when not enough content is found
  const cardContainer = document.getElementById("menu-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector("#menu-section .menu");
  const searchValue = (document.querySelector('input[name="search"]').value);
  document.getElementById("message").textContent = 'Showing results for "' + searchValue + '"';
  for (let i = 0; i < menuItems.length; i++) {
    const item = menuItems[i];
    let condition1 = item.name.toUpperCase().includes(searchValue.toUpperCase());
    let condition2 = item.type.toUpperCase().includes(searchValue.toUpperCase());
    let condition3 = item.price.toString().includes(searchValue.toUpperCase());
    if (condition1 || condition2 || condition3) {
      const nextCard = templateCard.cloneNode(true); // Copy the template card
      editCardContent(nextCard, item.name, item.imageURL, item.price); 
      cardContainer.appendChild(nextCard); //
    }
  }

}

function editCardContent(card, newTitle, newImageURL, price) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newTitle;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + " Poster";

  if (card.querySelector("p")) {
    const cardPrice = card.querySelector("p");
    cardPrice.textContent = "$" + price.toString();
  }
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

document.addEventListener("DOMContentLoaded", showCardsDetails);

document.addEventListener('DOMContentLoaded', () => {
  const radioInput = document.querySelectorAll('input[name="menu"]');
  radioInput.forEach(radio => {
    radio.addEventListener('change', showCardsDetails);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const checkboxInput = document.querySelectorAll('input[name="checkboxSort"]');
  const az = document.getElementById("sortAZ");
  const za = document.getElementById("sortZA");
  const lowHigh = document.getElementById("sortLowPrice");
  const highLow = document.getElementById("sortHighPrice");
  checkboxInput.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      if (checkbox.checked && checkbox == az) {
        sortAlphabetical();
        za.disabled = true;
      }
      if (checkbox.checked && checkbox == za) {
        sortAlphabetical("descend");
        az.disabled = true;
      } 
      if (checkbox.checked && checkbox == lowHigh) {
        sortPrice();
        highLow.disabled = true;
      } 
      if (checkbox.checked && checkbox == highLow) {
        sortPrice("descend");
        lowHigh.disabled = true;
      }
      if ((!checkbox.checked) && (checkbox == az)) {
        za.disabled = false;
      }
      if ((!checkbox.checked) && (checkbox == za)) {
        az.disabled = false;
      }
      if ((!checkbox.checked) && (checkbox == lowHigh)) {
        highLow.disabled = false;
      }
      if ((!checkbox.checked) && (checkbox == highLow)) {
        lowHigh.disabled = false;
      }
      showCards();
      showCardsDetails();
    });
  });
});

function quoteAlert() {
  alert(
    "This website is an academic project created for educational purposes only. While the author is employed at a Kura Sushi location, this project is not affiliated with, endorsed by, or sponsored by Kura Sushi USA. All menu item names, pricing, and related content are used for illustrative purposes only and may not reflect current offerings. All images displayed on this site, excluding the webpage icon, were created by the author himself to avoid the use of copyrighted material."
  );
}

function removeLastCard() {
  menuItems.pop(); // Remove last item in titles array
  showCards(); // Call showCards again to refresh
  showCardsDetails();
}