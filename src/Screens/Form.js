import { React, Component } from "react";
import Header from "../components/Header/Header";
import "../assets/css/Form.css";
import { connect } from 'react-redux'
import { map } from '../storage/action'
class Form extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      height: "",
      dropdown: "",
      store: [],
    };
  }

  handleChangeFname = (event) => {
    this.setState({ firstname: event.target.value });
  };

  handleChangeLname = (event) => {
    this.setState({ lastname: event.target.value });
  };

  handleChangeHeight = (event) => {
    this.setState({ height: event.target.value });
  };

  handleChangedropdown = (event) => {
    this.setState({ dropdown: event.target.value });
  };

  handleSubmit = (event) => {
    var fname = this.state.firstname;
    var lname = this.state.lastname;
    var height = this.state.height;
    var dropdown = this.state.dropdown;
    const re = /^[1-9][\.\d]*(,\d+)?$/;

    if (
      fname.length != "" &&
      lname.length != "" &&
      height.length != "" &&
      dropdown.length != ""
    ) {
      if (re.test(height)) {
        alert("Submitted Successful");
        this.state.store.push({
          "FirstName": fname,
          "LastName": lname,
          "Position": dropdown,
          "Height": height,
        }); 
        this.setState({
          store: this.state.store
        });
      this.props.arrayobj(this.state.store)
      } else {
        alert("Height must be number");
      }
    } else {
      alert("Please Fill All Required Details.");
    }
    console.log("======>", this.state.store);
    localStorage.setItem("obj", JSON.stringify(this.state.store));
  };


  reduxfunction = (item) => {
    console.log(item, 'item')
  }

  render() {
    return (
      <div>
        <Header />
        <h1 className="header">Compose Team For Players</h1>
        <h3 className="title">Form</h3>
        <div className="inputContainer">
          <input
            type="text"
            className="inp"
            placeholder="First Name"
            value={this.state.firstname}
            onChange={this.handleChangeFname}
          />
        </div>
        <div className="inputContainer">
          <input
            type="text"
            className="inp"
            placeholder="Last Name"
            value={this.state.lastname}
            onChange={this.handleChangeLname}
          />
        </div>
        <div className="inputContainer">
          <input
            type="text"
            className="inp"
            placeholder="Height"
            value={this.state.height}
            onChange={this.handleChangeHeight}
          />
        </div>
        <div className="dropdownContainer">
          <select
            className="dropdown"
            value={this.state.dropdown}
            onChange={this.handleChangedropdown}
          >
            <option value="" disabled selected hidden>
              Position
            </option>
            <option value="Point Guard(PG)">Point Guard(PG)</option>
            <option value="Shooting Guard(SG)">Shooting Guard(SG)</option>
            <option value="Center(C)">Center(C)</option>
            <option value="Small Forward(SF)">Small Forward(SF)</option>
            <option value="PowerForward(PF)">PowerForward(PF)</option>
          </select>
        </div>
        <div className="buttonContainer">
          <input
            className="submit"
            type="submit"
            value="Save"
            onClick={this.handleSubmit}
          />
        </div>
        {this.props.map.map(item => {
          this.reduxfunction(item)
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    map: state.array.obj
  }
}

const mapDispatchToProps = dispatch => {
  return {
    arrayobj: item => dispatch(map(item)),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form)
