import { useEffect, useRef, useState } from 'react';
import '../Add Property/addProperty.css'
import propertyForm from '../Properties/PropertyForm';
import { useNavigate } from 'react-router-dom';
import { ENDPOINTS } from '../Properties/PropertyEndpoints';
import { basicForm } from './FormData';

export default function AddProperty(){
    const [currentForm,setCurrentForm] = useState('basic')

   

    return<>
    <div className='forms-container'>
        <FormNavigation setCurrentForm={setCurrentForm} currentForm={currentForm}/>
        <FormComponent formDataFields={propertyForm} currentForm={currentForm} setCurrentForm={setCurrentForm}/>
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

const FormComponent = ({ formDataFields,currentForm,setCurrentForm }) => {
    let navigate = useNavigate()
    const [formSection,setFormSection] = useState(formDataFields.basic)

    const formDetails = ['basic','details','general','location']

    const[formData,setFormData] = useState(basicForm)
    useEffect(()=>{
        // console.log(formData[currentForm])
        setFormSection(formDataFields[currentForm])
        return ()=>setFormSection(formDataFields.basic)
    },[currentForm])

    const handleCancel = ()=>{
        navigate("/home",{replace:true})
    }


    const handleSubmit = (inputName,e) => {
        // e.preventDefault();
        console.log(inputName,"name")
        console.log(e.target.value)
        setFormData({
          ...formData,
          [inputName]: e.target.value
        });

        console.log(formData)
        // console.log(formData)
       //TODO: finish suubmit event for form
       //prepare form data first

       //endpoints are saved in ENDPOINTS.js for each section of form
       //do fetch
       
    }

    const handleSave = ()=>{
        //work on save logic
    }
    
    return (
      <form className='form-section-container' >
        <div className='form-details'>
        {
           Object.keys(formSection).map((fieldKey) => {
            const field = formSection[fieldKey];
            // console.log(field)
            // based on input type, it either retuns select or text input
            return ( 
        field.type === 'select' ?
        <>
        <div className='field-container-select'>
            <label>{field.name}</label>
                <select key={field.name} id={fieldKey} name={field.name} onChange={(e)=>handleSubmit(fieldKey,e)}>
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
            <input name={field.name} id={fieldKey} key={field.name} type={field.type} placeholder={field.placeholder} onChange={(e)=>handleSubmit(fieldKey,e)}/>
        </div>
    );
}) 
        }
        </div>
        
        <div className='button-container'>
            <button className='cancel-button' onClick={handleCancel}>Cancel</button>
            {
              currentForm=='location'?<button className='save-button' type='button'>Add Property</button>:<button className='save-button' type='button' onClick={handleSave}>Save and Continue</button>
            }
        </div>
       </form>
    );
  };
  