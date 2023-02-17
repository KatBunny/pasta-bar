//for admin user to add/remove/update menu items
import IngredientList from '../../components/IngredientList/IngredientList'
import AddIngredientForm from '../../components/AddIngredientForm/AddIngredientForm'

export default function EditMenuPage(){
    return(
        <>
            <h1>Edit Menu Page</h1>
            <IngredientList />
            <AddIngredientForm />
        </>
    )
}