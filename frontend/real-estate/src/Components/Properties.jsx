import "./properties.css"
import editicon from "../assets/edit.svg"
import imgicon from "../assets/imgicon.svg"
import visibility from '../assets//visibility.svg';
import searchicon from "../assets/search.svg"
import { useState } from "react";
const PropertyData = ({ data }) => {
    return (
      <section className="PData">
        <div className="pdata"><p>{data.ppdId}</p></div>        
        <div className="pdata"><a href="#" className="editPro">
                    <img className="svg-icon" src={imgicon} alt="SVG Icon" />
                </a></div>        
        <div className="pdata"><p>{data.property}</p></div>        
        <div className="pdata"><p>{data.contact}</p></div>        
        <div className="pdata"><p>{data.area}</p></div>        
        <div className="pdata"><p>{data.views}</p></div>        
        <div>
            <div className="status"><san>{data.status}</san></div>
            </div>
        
            <div className="pdata"><p>{data.daysLeft}</p></div>
            
        <div>  <a href="#" className="editPro">
                    <img className="svg-icon" src={visibility} alt="SVG Icon" />
                    <img className="svg-icon" src={editicon} alt="SVG Icon" />
                </a></div>    
        
        

      </section>
    );
  };

const Properties = ({ dataArray }) => {
  const [find,setfind]=useState("");
 const search=(value)=>{
  setfind(value.target.value);
 }
    return (
        <div>
          <div><div className="search">
             <input placeholder="Search PPD ID" value={find} onChange={search} className="searchinput" type="text"/>
             <img className="searchicon" src={searchicon} alt="SVG Icon" />      </div>
          </div>
          <section className="PData">
        <div className="pdata"><p>ppdId</p></div>        
        <div className="pdata"><p>images</p></div>        
        <div className="pdata"><p>Property</p></div>        
        <div className="pdata"><p>Contact</p></div>        
        <div className="pdata"><p>Area</p></div>        
        <div className="pdata"><p>Views</p></div>        
        <div>
            <div className=""><span>Status</span></div>
            </div>
        
            <div className="pdata"><p>Days Left</p></div>
            <div>  <p>action</p></div> </section>
            
           
          {  (find.trim()=="") ?
              dataArray.map((dataItem, index) => (<PropertyData key={index} data={dataItem} />))
           :(dataArray.filter(dataItem => dataItem.ppdId == find).map((dataItem, index) => (<PropertyData key={index} data={dataItem} />)))
        }
        </div>
      );
  };
  export default Properties;