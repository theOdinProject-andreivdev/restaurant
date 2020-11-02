const generateContact = () => {
  const content = document.createElement("div");

  content.classList.add("content");
  const address = document.createElement("div");
  const contact = document.createElement("div");

  contact.classList.add("contactinfo");
  contact.textContent = "You can find us always open at ";

  address.classList.add("addressbig");
  address.textContent = "123 Fake Street - NYC - 200-333-1234";

  content.appendChild(contact);
  content.appendChild(address);
  return content;
};

export default generateContact;
