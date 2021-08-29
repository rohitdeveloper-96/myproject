import { React,Component } from "react";
import "../../assets/css/Header.css";
import history from '../../history';
class Header extends Component{
    onclickForm = () =>{
     history.push('/Form')
    }
    onclickSlection = () =>{
        history.push('/Selection')
       }
    render(){
        return(
            <div className="headerContainer">
                <h3  className = "headertitle" onClick={this.onclickForm}>Compose Team </h3>
                <h3 className = "headertitle" onClick={this.onclickSlection}>First Quater</h3>
            </div>
        )
    }
}
export default Header