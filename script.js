const cards = [
  {
    name: "Example Card",
    image: "https://via.placeholder.com/300x400",
  },
];

const gallery = document.getElementById("gallery");

cards.forEach(card => {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
    <img src="${card.image}" alt="${card.name}">
    <h3>${card.name}</h3>
  `;
  gallery.appendChild(div);
});
