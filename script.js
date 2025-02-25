
const recipes = [
    {
        image: "./images/spagetti.jpeg",
        title: "Spaghetti Carbonara",
        description: "Creamy Roman pasta classic with pancetta and pecorino",
        ingredients: ["Spaghetti", "Eggs", "Pancetta", "Pecorino Romano", "Black Pepper"]
    },
    {
        image: "./images/chocolate-cake.jpg",
        title: "Chocolate Cake",
        description: "Decadent layered cake with rich chocolate ganache",
        ingredients: ["Flour", "Sugar", "Cocoa Powder", "Eggs", "Butter", "Vanilla Extract"]
    },
    {
        image: "./images/pizza.jpg",
        title: "Margherita Pizza",
        description: "Neapolitan-style pizza with fresh basil and mozzarella",
        ingredients: ["Pizza Dough", "San Marzano Tomatoes", "Fresh Mozzarella", "Basil", "Olive Oil"]
    },
    {
        image: "./images/chicken.jpeg",
        title: "Chicken Curry",
        description: "Fragrant Indian curry with aromatic spices",
        ingredients: ["Chicken", "Onions", "Tomatoes", "Garam Masala", "Ginger", "Garlic", "Cream"]
    },
    {
        image: "./images/Greek-salad.jpeg",
        title: "Greek Salad",
        description: "Fresh Mediterranean salad with feta and olives",
        ingredients: ["Tomatoes", "Cucumber", "Red Onion", "Feta", "Olives", "Olive Oil", "Oregano"]
    },
    {
        image: "./images/Beef-tacos.jpeg",
        title: "Beef Tacos",
        description: "Flavorful Mexican street-style tacos with fresh toppings",
        ingredients: [ "Ground Beef","Corn Tortillas","Taco Seasoning","Lettuce","Tomatoes","Cheddar Cheese","Sour Cream","Lime"
        ]
    }
];

// Toggle ingredients visibility
function toggleIngredients(recipeId) {
    const ingredientsList = document.getElementById(`ingredients-${recipeId}`);
    const button = document.getElementById(`button-${recipeId}`);
    
    ingredientsList.classList.toggle('max-h-0');
    ingredientsList.classList.toggle('max-h-96');
    ingredientsList.classList.toggle('opacity-100');
    ingredientsList.classList.toggle('opacity-0');
    
    button.textContent = ingredientsList.classList.contains('max-h-96') 
        ? 'Hide Ingredients' 
        : 'Show Ingredients';
}

// Generate recipe cards
function generateRecipeCards() {
    const container = document.getElementById('recipe-container');
    
    recipes.forEach((recipe, index) => {
        const card = `
            <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img src="${recipe.image}" alt="${recipe.title}" 
                     class="w-full h-64 object-cover rounded-t-xl">
                
                <div class="p-6">
                    <h2 class="text-2xl font-bold text-gray-800 mb-2">${recipe.title}</h2>
                    <p class="text-gray-600 mb-4">${recipe.description}</p>
                    
                    <button onclick="toggleIngredients(${index})" id="button-${index}"
                        class="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg
                               transition-all duration-300 transform hover:scale-105 mb-4">
                        Show Ingredients
                    </button>
                    
                    <ul id="ingredients-${index}" 
                        class="max-h-0 opacity-0 overflow-hidden transition-all duration-500 space-y-2
                               border-t border-orange-100 pt-4">
                        ${recipe.ingredients.map(ingredient => `
                            <li class="flex items-center text-gray-700">
                                <svg class="w-4 h-4 mr-2 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                                </svg>
                                ${ingredient}
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', generateRecipeCards);