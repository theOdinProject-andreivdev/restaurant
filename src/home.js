const generateHome = () => {
  const content = document.createElement("div");

  content.classList.add("content");
  const address = document.createElement("div");
  const tagline = document.createElement("div");

  tagline.classList.add("tagline");
  tagline.textContent = "EAT DRINK DIE";

  address.classList.add("address");
  address.textContent = "123 Fake Street - NYC - 200-333-1234";

  content.appendChild(address);
  content.appendChild(tagline);
  return content;
};

export default generateHome;
