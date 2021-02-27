//main page items
const getValue = () => {
  const inputValue = document.getElementById("input").value;
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
  .then((res) => res.json())
  .then((data) => {
      const food = data.meals;
      food.map((element) => {
        const items = document.getElementById("items");
        const foodContainer = document.createElement("div");
        foodContainer.setAttribute("class", "ShownItem");
        const foodName = element.strMeal;
        const foodImg = element.strMealThumb;
        const foodId = element.idMeal;

        const foodDiv = 
          `<div id="cards">
              <div id="card_full_details" onclick="getMealFullDetails(${foodId})">
                  <img src="${foodImg}"> <div><h3>${foodName}</h3>
              </div>
          </div>`;
        foodContainer.innerHTML = foodDiv;
        items.appendChild(foodContainer);
      })
  })
  .catch((error) => {
    items.innerHTML=`<div id="false"><h2>Please, input correct meal name!</h2></div>`
  })
};



// single meal full info
const getMealFullDetails = (id) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((res) => res.json())
    .then((data) => {
      const meal = data.meals;
      meal.map((element) => {
        const mealImg = element.strMealThumb;
        const mealDetailsContainer = document.createElement("div");
        const mealDetailsDiv = 
          `
            <div id="infoDiv">
              <div><img src="${mealImg}"></div>
            <div id="card-body">
              <h3>${element.strMeal}</h3>
              <h6>Ingredient</h6><hr>
              <ul>
                  <li> ${element.strIngredient1}</li>
                  <li>${element.strIngredient2}</li>
                  <li>${element.strIngredient3}</li>
                  <li>${element.strIngredient4}</li>
                  <li>${element.strIngredient5}</li>
                  <li>${element.strIngredient6}</li>
                  <li>${element.strIngredient7}</li>
              </ul>
            </div>
          `
          mealDetailsContainer.innerHTML = mealDetailsDiv;
          document.getElementById("meal_fullDetails").appendChild(mealDetailsContainer);
          document.getElementById("main_page").style.display = "none";
        })
    })
};
