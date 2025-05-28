// Recipe ingredients
const recipeIngredients = {
    "Banana Protein Pancakes": [
        "1 ripe banana",
        "2 eggs",
        "1 scoop vanilla protein powder",
        "1/4 cup oats",
        "1/2 tsp baking powder"
    ],
    "Low Calorie Chickpea Quinoa Salad": [
        "1 cup cooked quinoa",
        "1 cup chickpeas",
        "1/2 cucumber",
        "1/4 red onion",
        "1 tbsp olive oil",
        "1 tbsp lemon juice"
    ],
    "10 Min Blueberry Smoothie Bowl": [
        "1 frozen banana",
        "1/2 cup frozen blueberries",
        "1 scoop protein powder",
        "1/4 cup Greek yogurt",
        "1/4 cup milk"
    ]
};

document.querySelector(".generate-btn").addEventListener("click", () => {
    // Select all checked checkboxes
    const selectedCheckboxes = document.querySelectorAll(".recipe-check:checked");
    let allIngredients = [];

    selectedCheckboxes.forEach(checkbox => {
        // Navigate to the parent <li> element
        const listItem = checkbox.closest("li");
        if (!listItem) return;

        // Retrieve the recipe title from the <span> within the <a> tag
        const recipeTitleElement = listItem.querySelector("span");
        if (!recipeTitleElement) return;

        const recipeTitle = recipeTitleElement.innerText.trim();
        const ingredients = recipeIngredients[recipeTitle];

        if (ingredients) {
            allIngredients.push(`- ${recipeTitle}`);
            ingredients.forEach(ingredient => {
                allIngredients.push(`  • ${ingredient}`);
            });
            // Add an empty line between recipes
            allIngredients.push(""); 
        }
    });

    // Check if no recipes selected
    if (allIngredients.length === 0) {
        alert("Please select at least one recipe to generate the ingredients.");
        return;
    }

    // Create a blob from the ingredients list
    const blob = new Blob([allIngredients.join("\n")], {
        type: "text/plain"
    });
    const url = URL.createObjectURL(blob);

    // Create a temporary anchor element to trigger the download
    const a = document.createElement("a");
    a.href = url;
    a.download = "grocery-list.txt";
    document.body.appendChild(a);
    a.click();

    // Clean up
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});