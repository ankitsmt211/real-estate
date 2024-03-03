import AddProperty from "../Add Property/AddProperty"
import { useParams } from "react-router-dom"
export function EditProperty({setUpdated}){

    let {ppdId} = useParams()

    return <>
    <AddProperty ppdId={ppdId} setUpdated={setUpdated}/>
    </>
}