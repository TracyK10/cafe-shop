document.addEventListener("DOMContentLoaded", () => {
    // GET request to  API for all coffee drinks
  fetch("https://api.sampleapis.com/coffee/hot")
    .then((res) => res.json())
    .then((data) => {
      const cofeeMenuContainer = document.querySelector("#coffee-menu");
      data.forEach((coffee, index) => {
        const card = document.createElement("div");
        card.style.border = 'none'
        card.classList.add("card");
        card.style.width = "18rem";
        card.style.backgroundColor = '#352b2d'
        card.innerHTML = `
            <p class="d-inline-flex gap-1">
            <button class="btn btn-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
              ${coffee.title}
            </button>
          </p>
          <div class="collapse" id="collapse${index}">
            <div class="card" style="width: 18rem;">
                <img src="${coffee.image}" class="card-img-top" alt="Coffee drink">
                <div class="card-body">
                  <h5 class="card-title">${coffee.title}</h5>
                  <p class="card-text">Description: ${coffee.description}</p>
                  <p class="card-text">Ingredients: ${coffee.ingredients}</p>
                  <button class="btn btn-dark btn-sm" type="button">Order Now!</button>
                </div>
              </div>
          </div>
            `;
        cofeeMenuContainer.appendChild(card);

        // const orderButtons = document.querySelectorAll('.order');
        // orderButtons.forEach((button, i) => {
        //     button.addEventListener('click', () => {
        //         const p = document.createElement('p');
        //         let min = Math.floor((Math.random() * 10) + 10);
        //         p.textContent = `Your Order will be ready in ${min} minutes!`;
        //         card.querySelector('.card-body').appendChild(p);
                
        // })
        // })
      });
    });
});
