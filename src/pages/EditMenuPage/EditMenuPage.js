import IngredientList from '../../components/IngredientList/IngredientList'
import AddIngredientForm from '../../components/AddIngredientForm/AddIngredientForm'
import './EditMenuPage.css'

//for admin user to add/remove/update menu items
export default function EditMenuPage({ user, allIngredients, getAllAndAvailable}){
    return(
        <>
            <h1 className='welcome'>Welcome Back, {user.name.toUpperCase()}</h1>
            
            <AddIngredientForm getAllAndAvailable={getAllAndAvailable}/>
            
            <div className="edit-list-container">
                <IngredientList
                    className="edit-menu-ingredient-list"
                    user={user}
                    ingredients={allIngredients}
                    getAllAndAvailable={getAllAndAvailable}
                    isEditing={true}
                />
            </div>
            
        </>
    )
}