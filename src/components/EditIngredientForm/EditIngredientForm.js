// Form to update ingredient
export default function EditIngredientForm(){
    

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
                placeholder="Image" 
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
                Update Ingredient
            </button>
            <button type="submit">
                Delete Ingredient
            </button>
        </form>
    )
}