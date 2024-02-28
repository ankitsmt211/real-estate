import AddProperty, { FormNavigation,FormComponent } from "../Add Property/AddProperty"
import { useParams } from "react-router-dom"
export function EditProperty({setUpdated}){

    let {ppdId} = useParams()
    console.log("ppdID",ppdId)

    return <>
    <AddProperty ppdId={ppdId} setUpdated={setUpdated}/>
    </>
}