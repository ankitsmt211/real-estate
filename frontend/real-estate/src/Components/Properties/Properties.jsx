import "./properties.css"

import searchicon from "..//../assets/search.svg"
import { useState } from "react";
import Property from "../Property/Property";
import { useNavigate } from "react-router-dom";


const Properties = ({ dataArray }) => {
  let navigate = useNavigate();
  const [find,setfind]=useState("");
 const search=(value)=>{
  setfind(value.target.value);
 }

 const filteredData = dataArray.filter(dataItem => find.trim() == "" || dataItem.ppdId === Number(find));

 const handleAddProperty = ()=>{
  navigate('/home/add-property')
 }
    return (
        <div className="list-container">
          <div className="search-add-property-container">
            <div className="search">
             <input placeholder="Search PPD ID" value={find} onChange={search} className="searchinput" type="text"/>
             <img className="searchicon" src={searchicon} alt="SVG Icon" />      
             </div>

             <button onClick={handleAddProperty}>Add Property</button>
          </div>
          <section className="PData">
        <div className="pdata"><p>PPD ID</p></div>        
        <div className="pdata"><p>Images</p></div>        
        <div className="pdata"><p>Property</p></div>        
        <div className="pdata"><p>Contact</p></div>        
        <div className="pdata"><p>Area</p></div>        
        <div className="pdata"><p>Views</p></div>        
        <div>
            <div className=""><span>Status</span></div>
            </div>
        
            <div className="pdata"><p>Days Left</p></div>
            <div>  <p>action</p></div> </section>

             {filteredData.map((dataItem, index) => <Property key={index} propertyData={dataItem} />)}
             
        </div>
      );
  };
  
  export default Properties;