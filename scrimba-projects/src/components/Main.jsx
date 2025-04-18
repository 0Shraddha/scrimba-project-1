export default function Main() {
        const ingredients = ["Chicken", "Oregano", "Tomatoes"];
        const ingredientsList = ingredients.map(ingredient => {
            return(
                <li key={ingredient}>{ingredient}</li>
            )
        })

        function handleSubmit (e) {
            e.preventDefault();

            const formData = new FormData(e.currentTarget)
            const newIngredient = formData.get("ingredient");
            ingredients.push(newIngredient);

            console.log(ingredients)
        }
        
        return (
            <main>
                <form onSubmit={handleSubmit} className="add-ingredient-form">
                    <input 
                    name="ingredient"
                        type="text"
                        placeholder="e.g. oregano"
                        aria-label="Add ingredient"
                    />
                    <button>Add ingredient</button>
                </form>
                <ul>
                    { ingredientsList }
                </ul>
            </main>
        )
    }