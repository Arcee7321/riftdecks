async function loadCards() {
  const response = await fetch("cards.json");
  const cards = await response.json();

  const gallery = document.getElementById("gallery");

  cards.forEach(card => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <img src="${card.image}" alt="${card.name}">
      <h3>${card.name}</h3>
      <p><strong>Energy:</strong> ${card.energy}</p>
      <p><strong>Power:</strong> ${card.power} | <strong>Might:</strong> ${card.might}</p>
      <p><strong>Type:</strong> ${card.type} – ${card.subtype}</p>
    `;

    gallery.appendChild(div);
  });
}

loadCards();
