//for admin user to add/remove/update menu items
import IngredientList from '../../components/IngredientList/IngredientList'
import AddIngredientForm from '../../components/AddIngredientForm/AddIngredientForm'

export default function EditMenuPage({user, allIngredients}){
    console.log("<<<<EditMenuPage>>>>")
    console.log(allIngredients)
    return(
        <>
            <h1>Edit Menu Page</h1>
            <IngredientList user={user} ingredients={allIngredients} isEditing={true} />
            <AddIngredientForm />
        </>
    )
}