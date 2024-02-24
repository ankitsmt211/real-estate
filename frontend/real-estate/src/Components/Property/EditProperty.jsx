import { useParams } from 'react-router-dom';
import "./edit.css"
export default function EditProperty(){
    const { id } = useParams();
   //id will be PPDID
    return<>
    <div className='editcon'>
       <div className='edit-ele-con'>
        <div className='edit-ele'>            
            <label> Property Type</label><br/>
        <input className='edit-input' type="text"/></div>
        <div className='edit-ele'>            
            <label> Negotable</label><br/>
        <input className='edit-input' type="text"/></div>
        <div className='edit-ele'>            
            <label> Price</label><br/>
        <input className='edit-input' type="text"/></div>
        
       </div>
       <div className='edit-ele-con'>
        <div className='edit-ele'>            
            <label> Ownership</label><br/>
        <input className='edit-input' type="text"/></div>
        <div className='edit-ele'>            
            <label> Property Age</label><br/>
        <input className='edit-input' type="text"/></div>
        <div className='edit-ele'>            
            <label> Property Approved</label><br/>
        <input className='edit-input' type="text"/></div>
        
       </div>
       <div className='edit-ele-con'>
        <div className='edit-ele'>            
            <label> Property Description</label><br/>
        <input className='edit-input' type="text"/></div>
        <div className='edit-ele'>            
            <label> Bank Loan</label><br/>
        <input className='edit-input' type="text"/></div>
        <div className='edit-ele'>            
            <label> Length</label><br/>
        <input className='edit-input' type="text"/></div>
        
       </div>
       <div className='edit-ele-con'>
        <div className='edit-ele'>            
            <label> Breath </label><br/>
        <input className='edit-input' type="text"/></div>
        <div className='edit-ele'>            
            <label> Total Area</label><br/>
        <input className='edit-input' type="text"/></div>
        <div className='edit-ele'>            
            <label> Area Unit </label><br/>
        <input className='edit-input' type="text"/></div>
        
       </div>
       <div className='edit-ele-con'>
        <div className='edit-ele'>            
            <label> No of BHK </label><br/>
        <input className='edit-input' type="text"/></div>
        <div className='edit-ele'>            
            <label> No of Floor </label><br/>
        <input className='edit-input' type="text"/></div>
        <div className='edit-ele'>            
            <label> Attached </label><br/>
        <input className='edit-input' type="text"/></div>
        
       </div>
       <div className='edit-ele-con'>
        <div className='edit-ele'>            
            <label> Western Toilet </label><br/>
        <input className='edit-input' type="text"/></div>
        <div className='edit-ele'>            
            <label>  Furnished</label><br/>
        <input className='edit-input' type="text"/></div>
        <div className='edit-ele'>            
            <label> Car Parking </label><br/>
        <input className='edit-input' type="text"/></div>
        
       </div>
       <div className='edit-ele-con'>
        <div className='edit-ele'>            
            <label> Lift </label><br/>
        <input className='edit-input' type="text"/></div>
        <div className='edit-ele'>            
            <label>  Electricity</label><br/>
        <input className='edit-input' type="text"/></div>
        <div className='edit-ele'>            
            <label> Facing </label><br/>
        <input className='edit-input' type="text"/></div>
        
       </div>
       <div className='edit-ele-con'>
        <div className='edit-ele'>            
            <label> Name </label><br/>
        <input className='edit-input' type="text"/></div>
        <div className='edit-ele'>            
            <label>  Mobile</label><br/>
        <input className='edit-input' type="text"/></div>
        <div className='edit-ele'>            
            <label> Posted by </label><br/>
        <input className='edit-input' type="text"/></div>
        
       </div>
       <div className='edit-ele-con'>
        <div className='edit-ele'>            
            <label> Sale Type </label><br/>
        <input className='edit-input' type="text"/></div>
        <div className='edit-ele'>            
            <label>  Featured Package</label><br/>
        <input className='edit-input' type="text"/></div>
        <div className='edit-ele'>            
            <label> PPD Package </label><br/>
        <input className='edit-input' type="text"/></div>
        
       </div>
       <div className='edit-ele-con'>
        <div className='edit-ele'>            
            <label> Email </label><br/>
        <input className='edit-input' type="text"/></div>
        <div className='edit-ele'>            
            <label>City</label><br/>
        <input className='edit-input' type="text"/></div>
        <div className='edit-ele'>            
            <label> Area </label><br/>
        <input className='edit-input' type="text"/></div>
        
       </div>
       <div className='edit-ele-con'>
        <div className='edit-ele'>            
            <label> Pincode </label><br/>
        <input className='edit-input' type="text"/></div>
        <div className='edit-ele'>            
            <label>Address</label><br/>
        <input className='edit-input' type="text"/></div>
        <div className='edit-ele'>            
            <label> Landmark </label><br/>
        <input className='edit-input' type="text"/></div>
        
       </div>
       <div className='edit-ele-con'>
        <div className='edit-ele'>            
            <label> Latitude </label><br/>
        <input className='edit-input' type="text"/></div>
        <div className='edit-ele'>            
            <label>Longitude</label><br/>
        <input className='edit-input' type="text"/></div>
        <div className='edit-ele'>  
               
           </div>

        
       </div>
       <div className='edit-ele-con'>
        <div className='edit-savebtn'>            
            
        <button className='editsave'>Save</button>
           </div>

        
       </div>
       
    </div>;
    </>}