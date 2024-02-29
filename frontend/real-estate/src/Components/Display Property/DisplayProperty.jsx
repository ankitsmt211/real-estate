import { useEffect, useState } from "react"
import { ENDPOINTS } from "../Properties/PropertyEndpoints";
import { useNavigate,useParams } from "react-router-dom";
import '../Display Property/displayProperty.css'
import propertyForm from "../Properties/PropertyForm";

export function DisplayProperty(){
    let navigate = useNavigate()
    let {ppdId} = useParams()
    const [displayProperty,setDisplayProperty] = useState({basic: {}, details: {}, general: {}, location: {}, imageUrl: ""})

    useEffect(()=>{
        const token = localStorage.getItem('token'); 
        if (!token) {
          navigate('/login');
          return;
        }
    
        const getProperties = async ()=>{
          try{
            let properties = await fetch(ENDPOINTS.getProperties,{
              method:'GET',
              headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`}
              })
    
              if(!properties.ok){
                throw new Error(`HTTP error! status: ${properties.status}`);
              }
    
              let propertiesJson = await properties.json()
              console.log(propertiesJson)
              let propertiesData = propertiesJson.data

              //filtering properties with matching ppdId
              console.log("checking ppdid",ppdId)
              let propertyWithId = propertiesData.filter(property=>property.ppdId===ppdId)
              console.log("property with id",propertyWithId)
              setDisplayProperty(propertyWithId[0]);
    
          }
          catch(error){
            console.error('Error', error);
            navigate('/login');
          }
        }
    
        getProperties()
    },[ppdId])

    const handleEditProperty = ()=>{
        let editPropertyPath = `/edit-property/${ppdId}`
        navigate(editPropertyPath,{replace:false})
    }

    const handleGoHome = ()=>{
        navigate("/",{replace:false})
    }

    return <>
    <div className="display-container">
        <h1 className="display-header">Property Details</h1>
        <div className="viewImgCon"><img className="viewImg" src= {displayProperty.imageUrl} width="20px"/></div>
        
        <PropertySection title={'Basic'}  data={displayProperty.basic} odd={true}/>
        <PropertySection title={'Details'} data={displayProperty.details} odd={false}/>
        <PropertySection title={'General'}  data={displayProperty.general} odd={true}/>
        <PropertySection title={'Location'} data={displayProperty.location} odd={false}/>
        <div className="button-container">
            <button className="edit-property-button" onClick={handleEditProperty}>Edit</button>
            <button className="goto-home-button" onClick={handleGoHome}>Home</button>
        </div>
    </div>
    </>
}

function PropertySection({title,data,odd,img}){
    console.log("checking data",data)
    return <>
    <div className={`section-container ${odd?'odd':""}`}>
        <h2 className="section-header">{title}</h2>
        
        <div className="section-data">
            {data && Object.entries(data).map(([key,value])=>{
                let section = title.toLowerCase()
                return <Field key={key} name={propertyForm[section][key].name} value={value}/>
            })}
        </div>
    </div>
    </>
}

function Field({name,value}){
    return <>
    <div className="field-container">
        <strong>{name} </strong>
        <p>{value}</p>
    </div>
    </>
}