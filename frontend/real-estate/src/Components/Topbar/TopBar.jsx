import "./topbar.css";
import usersvg from "../../assets/usericon.svg"
export default function TopBar(){
    return (<div className="nav">
       <div className="navele"><span className="userid">USER ID: --------- </span> 
       <a href="#" className="userprofile">
                    <img  className="usericon" src={usersvg} />
                    <span className="button-name">Username</span> 
                </a>
       </div>
 
    <div className="navline"></div>              
    </div>

    );
}