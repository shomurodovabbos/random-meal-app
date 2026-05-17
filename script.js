const generateBtn = document.getElementById("generateBtn");
const mealCard = document.getElementById("mealCard");
const mealImg = document.getElementById("mealImg");
const mealName = document.getElementById("mealName");
const mealCategory = document.getElementById("mealCategory");
const mealArea = document.getElementById("mealArea");
const mealInstructions = document.getElementById("mealInstructions");
const youtubeLink = document.getElementById("youtubeLink");

function displayMeal(meal) {
    mealImg.src = meal.strMealThumb;
    mealName.textContent = meal.strMeal;
    mealCategory.textContent = meal.strCategory;
    mealArea.textContent = meal.strArea;
    mealInstructions.textContent = meal.strInstructions;

    if (meal.strYoutube) {
        youtubeLink.href = meal.strYoutube;
        youtubeLink.classList.remove("hidden");
    } else {
        youtubeLink.classList.add("hidden");
    }

    mealCard.classList.remove("hidden");
}

async function generateMeal() {
    try {
        const response = await fetch(
            "https://www.themealdb.com/api/json/v1/1/random.php",
        );
        if (!response.ok) throw new Error("Meal not found.");

        const data = await response.json();

        displayMeal(data.meals[0]);
    } catch (err) {
        console.log(err.message);
    }
}

generateBtn.addEventListener("click", generateMeal);
generateMeal();
