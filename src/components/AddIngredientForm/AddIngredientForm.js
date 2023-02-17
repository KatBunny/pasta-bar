// form to add ingredient
export default function AddIngredientForm(){
    return (
        <form>
            <label>Ingredient Name</label>
            <input placeholder="Name" />
            <label>Ingredient Image</label>
            <input placeholder="Image" />
            <label>Ingredient Price</label>
            <input placeholder="Price" />
            <button>Add ingredient</button>
        </form>
    )
}