import "../Properties/properties.css"
import editicon from "..//../assets/edit.svg"
import imgicon from "..//../assets/imgicon.svg"
import visibility from '..//../assets/visibility.svg';

import { useNavigate } from 'react-router-dom';


export default function Property({propertyData}){
    let navigate = useNavigate();
    let editpage=()=>{
        let url="/edit/"+propertyData.ppdId
        navigate(url);
    }
    return<>
          <section className="PData">
            
        <div className="pdata"><p>{propertyData.ppdId}</p></div>        
        <div className="pdata"><a href="#" className="editPro">
                    <img className="svg-icon" src={imgicon} alt="SVG Icon" />
                </a></div>        
        <div className="pdata"><p>{propertyData.type}</p></div>        
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