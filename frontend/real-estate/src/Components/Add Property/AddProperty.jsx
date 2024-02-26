import { useEffect, useRef, useState } from 'react';
import '../Add Property/addProperty.css'
import propertyForm from '../Properties/PropertyForm';
import { useNavigate } from 'react-router-dom';
import { ENDPOINTS } from '../Properties/PropertyEndpoints';
import { basicForm } from './FormData';
import axios from 'axios';
export default function AddProperty(){
    const [currentForm,setCurrentForm] = useState('basic')
    const [formData,setFormData] = useState({basic:basicForm,details:{},general:{},location:{}})

    useEffect(()=>{
        console.log(formData)
    },[formData])

    return<>
    <div className='forms-container'>
        <FormNavigation setCurrentForm={setCurrentForm} currentForm={currentForm}/>
        <FormComponent formFields={propertyForm} currentForm={currentForm} setCurrentForm={setCurrentForm} setFormData={setFormData} formData={formData}/>
    </div>
    </>
}

function FormNavigation({setCurrentForm,currentForm}){

    const handleCurrentForm = (e)=>{
        if(e.target.className=='clickable'){
            console.log("true")
            setCurrentForm(e.target.id)

            console.log("current form changed")
            console.log(e.target.id)
        }
       
    }
    
    return <>
     <div className="form-navigation-bar" >
    <div className={`form-navigation-section ${currentForm === 'basic' ? 'active' : ''}`}  onClick={handleCurrentForm}>
        <span className={`sr-number ${currentForm === 'basic' ? 'active' : ''}`}>1</span>
        <span id='basic' className='clickable'>Basic Info</span>
    </div>
    <div className={`form-navigation-section ${currentForm === 'details' ? 'active' : ''}`}   onClick={handleCurrentForm} >
        <span className={`sr-number ${currentForm === 'details' ? 'active' : ''}`}>2</span>
        <span id='details' className='clickable'>Property Details</span>
    </div>
    <div className={`form-navigation-section ${currentForm === 'general' ? 'active' : ''}`}  onClick={handleCurrentForm}>
        <span className={`sr-number ${currentForm === 'general' ? 'active' : ''}`}>3</span>
        <span id='general' className='clickable'>General Info</span>
    </div>
    <div className={`form-navigation-section ${currentForm === 'location' ? 'active' : ''}`}  onClick={handleCurrentForm}>
        <span className={`sr-number ${currentForm === 'location' ? 'active' : ''}`}>4</span>
        <span id='location' className='clickable'>Location Info</span>
    </div>
   </div>
    </>
}

const FormComponent = ({ formFields,currentForm,setCurrentForm,setFormData,formData }) => {
    let navigate = useNavigate()
    const [formSection,setFormSection] = useState(formFields.basic)

    const formDetails = ['basic','details','general','location']


    useEffect(()=>{
        setFormSection(formFields[currentForm])
        return ()=>setFormSection(formFields.basic)
    },[currentForm])

    const handleCancel = ()=>{
        navigate("/home",{replace:true})
    }

    const uploadImg = (event) => {
        const file = event.target.files[0];
        
        if (file && file.type.startsWith('image/')) {
            const formData = new FormData();
            formData.append('image', file);
      
            axios.post('http://localhost:8080/upload', formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            })
            .then(response => {
              console.log('File uploaded successfully'+response.data.url);
              //can save url to the database 
            })
            .catch(error => {
              console.error('Error uploading file:', error);
            });
        } else {
          alert('Please select an image file.');
        }
      };


    const handleSubmit = (inputName,e) => {

        setFormData(data=>({
            ...data,
            [currentForm]:{
                ...data[currentForm],
                [inputName]:e.target.value
            }
        }))

        // e.preventDefault();
        console.log(inputName,"name")
        
        if(inputName==" "){
            uploadImg(e)
            return;
            
        }

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
   
        for (let index = 0; index < formDetails.length; index++) {
           
            if (currentForm==formDetails[index]) {
              if (index==formDetails.length-1) {
                console.log("post data")
              }else
              {

                setCurrentForm(formDetails[index+1])
              }
              break;
            }
            
        }
    }

    const handleAddProperty = async ()=>{
        let token = localStorage.getItem('token')

        let propertyAdded = await fetch(ENDPOINTS.submit,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${token}`
              },
              body:JSON.stringify(formData)
        })

        if(!propertyAdded.ok){
            alert("unable to create document",propertyAdded.statusText)
        }
        if(propertyAdded.ok){
            alert("successfully added document")
        }
    }

    const getFormValue = (inputName) => {
        return formData[currentForm][inputName] || '';
    }
    
    
    return (
      <form className='form-section-container' >
        <div className='form-details'>
        {
           Object.keys(formSection).map((fieldKey) => {
            const field = formSection[fieldKey];
    
            // based on input type, it either retuns select or text input
            return ( 
        field.type === 'select' ?
        <>
        <div className='field-container-select'>
            <label>{field.name}</label>
                <select key={field.name} id={fieldKey} value={getFormValue(fieldKey)} name={field.name} onChange={(e)=>handleSubmit(fieldKey,e)}>
                {
                    field.options.map(option=>{
                        return <option key={option} >{option}</option>
                    })
                }
                </select>
        </div>
        </> 
        :
        <div key={fieldKey} className='field-container'>
            <label>{field.name}</label>
            <input name={field.name} id={fieldKey} key={field.name} type={field.type} placeholder={field.placeholder} value={getFormValue(fieldKey)} onChange={(e)=>handleSubmit(fieldKey,e)}/>
        </div>
    );
}) 
        }
        </div>
        
        <div className='button-container'>
            <button className='cancel-button' onClick={handleCancel}>Cancel</button>
            {
              currentForm=='location'?<button className='save-button' onClick={handleAddProperty} type='button'>Add Property</button>:<button className='save-button' type='button' onClick={handleSave}>Save and Continue</button>
            }
        </div>
       </form>
    );
  };
  