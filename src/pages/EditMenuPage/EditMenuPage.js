//for admin user to add/remove/update menu items
// const root = ReactDOM.createRoot(
//   document.getElementById('root')
// );

import IngredientList from '../../components/IngredientList/IngredientList'
import AddIngredientForm from '../../components/AddIngredientForm/AddIngredientForm'

export default function EditMenuPage({ user, allIngredients, setAllIngredients}){
    return(
        <>
            <h1>Edit Menu Page</h1>
            <IngredientList
                user={user}
                ingredients={allIngredients}
                setAllIngredients={setAllIngredients}
                isEditing={true}
            />
            <AddIngredientForm allIngredients={allIngredients} setAllIngredients={setAllIngredients}
            />
        </>
    )
}