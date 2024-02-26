import "../Properties/properties.css"
import editicon from "..//../assets/edit.svg"
import imgicon from "..//../assets/imgicon.svg"
import visibility from '..//../assets/visibility.svg';
import { useState } from "react";
import cancelsvg from '../../assets/cancel.svg'

import { useNavigate } from 'react-router-dom';


export default function Property({propertyData}){
    let navigate = useNavigate();
    let editpage=()=>{
        let url="/edit/"+propertyData.ppdId
        navigate(url);
    }

   const [showImg, setshowImg] = useState(false);
    const handleImg=()=>{
        if (showImg == true) {
            setshowImg(false)
        }else{
        setshowImg(true)
    }
    }

    return<>
          <section className="PData">
          {showImg && <div className="showImg">
           
          <img onClick={handleImg} className="cancel-icon" src={cancelsvg} alt="SVG Icon" />
            <img className="showImg-ele"  src={propertyData.imageUrl} alt="Image Not found" /></div>
          }

        <div className="pdata"><p>{propertyData.ppdId}</p></div>        
        <div className="pdata"><a href="#" className="editPro">
                    <img className="svg-icon" onClick={handleImg} src={imgicon} alt="SVG Icon" />
                </a></div>        
        <div className="pdata"><p>{propertyData.propertyType}</p></div>        
        <div className="pdata"><p>{propertyData.contact}</p></div>        
        <div className="pdata"><p>{propertyData.area}</p></div>        
        <div className="pdata"><p>{propertyData.views}</p></div>        
        <div>
            <div className="status"><span>{propertyData.status}</span></div>
            </div>
        
            <div className="pdata"><p>{propertyData.daysLeft}</p></div>
            
        <div>  <a href="" onClick={editpage} className="editPro">
                    <img className="action-icon" src={visibility} alt="SVG Icon" />
                    <img className="action-icon" src={editicon} alt="SVG Icon" />
                </a></div>  
              
     
      </section>
    </>
}