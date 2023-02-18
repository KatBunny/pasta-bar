// form to add ingredient
export default function AddIngredientForm(){
    return (
        <form autoComplete="off" /*onSubmit={}*/>
            <label>Ingredient Name</label>
            <input 
                type="text"
                name="name"
                placeholder="Name" 
            />
            <label>Ingredient Image</label>
            <input 
                type="text"
                name="emoji"
                placeholder="Emoji"
            />
            <label>Ingredient Price</label>
            <input 
                type="number"
                name="price"
                placeholder="Price" 
            />
            <label>Available</label>
            <input 
                type="checkbox"
                name="available"
            />
            <button type="submit">
                Add ingredient
            </button>
        </form>
    )
}