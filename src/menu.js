const itemNames = ["Lorem ipsum", "dolor sit amet"];
const itemDescriptions = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Phasellus ac rhoncus ex, sit amet mollis diam. Donec nec varius felis. Nulla erat purus, scelerisque ut velit a, interdum vestibulum purus.",
];
const itemPrices = ["3.99", "12.99"];

const generateMenu = () => {
  const content = document.createElement("div");
  content.classList.add("content");

  let i;
  for (i = 0; i < itemNames.length; i++) {
    const menuItem = document.createElement("div");

    menuItem.classList.add("menuItem");

    const itemName = document.createElement("div");
    itemName.classList.add("name");
    itemName.textContent = itemNames[i];

    const itemDesc = document.createElement("div");
    itemDesc.classList.add("description");
    itemDesc.textContent = itemDescriptions[i];

    const itemPrice = document.createElement("div");
    itemPrice.classList.add("price");
    itemPrice.textContent = itemPrices[i];

    menuItem.appendChild(itemName);
    menuItem.appendChild(itemDesc);
    menuItem.appendChild(itemPrice);

    content.appendChild(menuItem);
  }
  return content;
};

export default generateMenu;
