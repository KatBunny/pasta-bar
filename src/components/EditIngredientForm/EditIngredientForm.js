// Form to update ingredient
export default function EditIngredientForm(){
    return (
        <form>
            <label>Ingredient Name</label>
            <input placeholder="Name" />
            <label>Ingredient Image</label>
            <input placeholder="Image" />
            <label>Ingredient Price</label>
            <input placeholder="Price" />
            <button>Update Ingredient</button>
            <button>Delete Ingredient</button>
        </form>
    )
}