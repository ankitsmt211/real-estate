import { useEffect, useRef, useState } from 'react';
import '../Add Property/addProperty.css'
import propertyForm from '../Properties/PropertyForm';
import { useNavigate } from 'react-router-dom';
import { ENDPOINTS } from '../Properties/PropertyEndpoints';
export default function AddProperty(){
    const [currentForm,setCurrentForm] = useState('basic')
    return<>
    <div className='forms-container'>
        <FormNavigation setCurrentForm={setCurrentForm} currentForm={currentForm}/>
        <FormComponent formData={propertyForm} currentForm={currentForm}/>
    </div>
    </>
}

function FormNavigation({setCurrentForm,currentForm}){

    const handleCurrentForm = (e)=>{
        // console.log(e.target.parent.id)
        if(e.target.className=='clickable'){
            console.log("true")
            setCurrentForm(e.target.id)
            console.log("current form changed")
            console.log(e.target.id)
        }
       
    }
    
    return <>
     <div className="form-navigation-bar" >
    <div className='form-navigation-section' onClick={handleCurrentForm}>
        <span className='sr-number'>1</span>
        <span id='basic' className='clickable'>Basic Info</span>
    </div>
    <div className='form-navigation-section'  onClick={handleCurrentForm} >
        <span className='sr-number'>2</span>
        <span id='details' className='clickable'>Property Details</span>
    </div>
    <div className='form-navigation-section' onClick={handleCurrentForm}>
        <span className='sr-number'>3</span>
        <span id='general' className='clickable'>General Info</span>
    </div>
    <div className='form-navigation-section' onClick={handleCurrentForm}>
        <span className='sr-number'>4</span>
        <span id='location' className='clickable'>Location Info</span>
    </div>
   </div>
    </>
}

const FormComponent = ({ formData,currentForm }) => {
    let navigate = useNavigate()
    const [formSection,setFormSection] = useState(formData.basic)
    useEffect(()=>{
        // console.log(formData[currentForm])
        setFormSection(formData[currentForm])
        return ()=>setFormSection(formData.basic)
    },[currentForm])

    const handleCancel = ()=>{
        navigate("/home",{replace:true})
    }


    const handleSubmit = (e) => {
        e.preventDefault();
    
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
    
       //TODO: finish suubmit event for form
       //prepare form data first

       //endpoints are saved in ENDPOINTS.js for each section of form
       //do fetch
       
    }
    
    return (
      <form className='form-section-container' onSubmit={handleSubmit}>
        <div className='form-details'>
        {
           Object.keys(formSection).map((fieldKey) => {
            const field = formSection[fieldKey];
            console.log(field)
            // based on input type, it either retuns select or text input
            return ( 
        field.type === 'select' ?
        <>
        <div className='field-container-select'>
            <label>{field.name}</label>
                <select name={field.name}>
                {
                    field.options.map(option=>{
                        return <option key={option} value={option}>{option}</option>
                    })
                }
                </select>
        </div>
        </> 
        :
        <div key={fieldKey} className='field-container'>
            <label>{field.name}</label>
            <input name={field.name} type={field.type} placeholder={field.placeholder} />
        </div>
    );
}) 
        }
        </div>
        
        <div className='button-container'>
            <button className='cancel-button' onClick={handleCancel}>Cancel</button>
            {
              currentForm=='location'?<button className='save-button' type='submit'>Add Property</button>:<button className='save-button' type='submit'>Save and Continue</button>
            }
        </div>
       </form>
    );
  };
  