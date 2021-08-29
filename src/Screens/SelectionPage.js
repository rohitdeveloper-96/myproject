import { React, Component } from "react";
import "../assets/css/Selection.css";
import Header from "../components/Header/Header";
class Selection extends Component {
  constructor() {
    super();
    this.state = {
      obj: "",
      dropdown_name_1: "",
      dropdown_name_2: "",
      dropdown_name_3: "",
      dropdown_name_4: "",
      dropdown_name_5: "",
      dropdown_Pos_1: "",
      dropdown_Pos_2: "",
      dropdown_Pos_3: "",
      dropdown_Pos_4: "",
      dropdown_Pos_5: "",
      status: "",
      playernames: [
        {
          id: 1,
          name: "R1",
        },
        {
          id: 2,
          name: "R2",
        },
        {
          id: 3,
          name: "R3",
        },
        {
          id: 4,
          name: "R4",
        },
        {
          id: 5,
          name: "R5",
        },
        {
          id: 6,
          name: "R6",
        },
        {
          id: 7,
          name: "R7",
        },
        {
          id: 8,
          name: "R8",
        },
        {
          id: 9,
          name: "R9",
        },
        {
          id: 10,
          name: "R10",
        },
      ],
    };
  }
  componentWillMount() {
    var obj = "";
    if (localStorage.getItem("obj")) {
      console.log("success");
      this.state.obj = localStorage.getItem("obj");
    } else {
      console.log("failed");
    }
  }

  handleChangedropdown_name_1 = (event) => {
    this.setState({ dropdown_name_1: event.target.value });
  };

  handleChangedropdown_name_2 = (event) => {
    this.setState({ dropdown_name_2: event.target.value });
  };

  handleChangedropdown_name_3 = (event) => {
    this.setState({ dropdown_name_3: event.target.value });
  };

  handleChangedropdown_name_4 = (event) => {
    this.setState({ dropdown_name_4: event.target.value });
  };

  handleChangedropdown_name_5 = (event) => {
    this.setState({ dropdown_name_5: event.target.value });
  };

  handleChangedropdown_pos_1 = (event) => {
    this.setState({ dropdown_Pos_1: event.target.value });
  };

  handleChangedropdown_pos_2 = (event) => {
    this.setState({ dropdown_Pos_2: event.target.value });
  };

  handleChangedropdown_pos_3 = (event) => {
    this.setState({ dropdown_Pos_3: event.target.value });
  };

  handleChangedropdown_pos_4 = (event) => {
    this.setState({ dropdown_Pos_4: event.target.value });
  };

  handleChangedropdown_pos_5 = (event) => {
    this.setState({ dropdown_Pos_5: event.target.value });
  };

  //Handle Submit

  handleSubmit = () => {
    if (
      this.state.dropdown_name_1.length != "" &&
      this.state.dropdown_name_2.length != "" &&
      this.state.dropdown_name_3.length != "" &&
      this.state.dropdown_name_4.length != "" &&
      this.state.dropdown_name_5.length != ""
    ) {
      if (
        this.state.dropdown_name_1 !== this.state.dropdown_name_2 &&
        this.state.dropdown_name_1 !== this.state.dropdown_name_3 &&
        this.state.dropdown_name_1 !== this.state.dropdown_name_4 &&
        this.state.dropdown_name_1 !== this.state.dropdown_name_5 &&
        this.state.dropdown_name_2 !== this.state.dropdown_name_3 &&
        this.state.dropdown_name_2 !== this.state.dropdown_name_4 &&
        this.state.dropdown_name_2 !== this.state.dropdown_name_5 &&
        this.state.dropdown_name_3 !== this.state.dropdown_name_4 &&
        this.state.dropdown_name_3 !== this.state.dropdown_name_5 &&
        this.state.dropdown_name_4 !== this.state.dropdown_name_5 &&
        this.state.dropdown_Pos_1 !== this.state.dropdown_Pos_2 &&
        this.state.dropdown_Pos_1 !== this.state.dropdown_Pos_3 &&
        this.state.dropdown_Pos_1 !== this.state.dropdown_Pos_4 &&
        this.state.dropdown_Pos_1 !== this.state.dropdown_Pos_5 &&
        this.state.dropdown_Pos_2 !== this.state.dropdown_Pos_3 &&
        this.state.dropdown_Pos_2 !== this.state.dropdown_Pos_4 &&
        this.state.dropdown_Pos_2 !== this.state.dropdown_Pos_5 &&
        this.state.dropdown_Pos_3 !== this.state.dropdown_Pos_4 &&
        this.state.dropdown_Pos_3 !== this.state.dropdown_Pos_5 &&
        this.state.dropdown_Pos_4 !== this.state.dropdown_Pos_5
      ) {
        console.log("Thanks For Submitting");
        this.setState({ status: "Thanks For Submitting" });
      } else {
        console.log(
          "You Must Not to Select Repeated Players Name and Position."
        );
        this.setState({
          status: "You Must Not to Select Repeated Players Name and Position.",
        });
      }
    } else {
      alert("Please fill the Players and Position For the First Half ");
    }
  };

  // Status_Func(){
  //   console.log('=================>')
  //   if(this.state.status === "Thanks For Submitting"){
  //     <div> <p className='text' styles={{color:"green"}}>{this.state.status}</p></div>

  //   }else{
  //     <div> <p className='text' styles={{color:"red"}}>{this.state.status}</p></div>
  //   }
  // }

  render() {
    const status_color =
      this.state.status === "Thanks For Submitting"
        ? { color: "green" }
        : { color: "red" };
    return (
      <div>
        <Header />
        <h1 className="title">Selection Team</h1>
        <div className="dropdownContainer">
          <select
            className="dropdown"
            value={this.state.dropdown_name_1}
            onChange={this.handleChangedropdown_name_1}
          >
            <option value="" disabled selected hidden>
              Name
            </option>
            {this.state.playernames.map((item) => {
              return <option value={item.name}>{item.name}</option>;
            })}
          </select>
          <select
            className="dropdown"
            value={this.state.dropdown_Pos_1}
            onChange={this.handleChangedropdown_pos_1}
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

        <div className="dropdownContainer">
          <select
            className="dropdown"
            value={this.state.dropdown_name_2}
            onChange={this.handleChangedropdown_name_2}
          >
            <option value="" disabled selected hidden>
              Name
            </option>
            {this.state.playernames.map((item) => {
              return <option value={item.name}>{item.name}</option>;
            })}
          </select>
          <select
            className="dropdown"
            value={this.state.dropdown_Pos_2}
            onChange={this.handleChangedropdown_pos_2}
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

        <div className="dropdownContainer">
          <select
            className="dropdown"
            value={this.state.dropdown_name_3}
            onChange={this.handleChangedropdown_name_3}
          >
            <option value="" disabled selected hidden>
              Name
            </option>
            {this.state.playernames.map((item) => {
              return <option value={item.name}>{item.name}</option>;
            })}
          </select>
          <select
            className="dropdown"
            value={this.state.dropdown_Pos_3}
            onChange={this.handleChangedropdown_pos_3}
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

        <div className="dropdownContainer">
          <select
            className="dropdown"
            value={this.state.dropdown_name_4}
            onChange={this.handleChangedropdown_name_4}
          >
            <option value="" disabled selected hidden>
              Name
            </option>
            {this.state.playernames.map((item) => {
              return <option value={item.name}>{item.name}</option>;
            })}
          </select>
          <select
            className="dropdown"
            value={this.state.dropdown_Pos_4}
            onChange={this.handleChangedropdown_pos_4}
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

        <div className="dropdownContainer">
          <select
            className="dropdown"
            value={this.state.dropdown_name_5}
            onChange={this.handleChangedropdown_name_5}
          >
            <option value="" disabled selected hidden>
              Name
            </option>
            {this.state.playernames.map((item) => {
              return <option value={item.name}>{item.name}</option>;
            })}
          </select>
          <select
            className="dropdown"
            value={this.state.dropdown_Pos_5}
            onChange={this.handleChangedropdown_pos_5}
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
        <div>
          {" "}
          <p className="text" style={status_color}>
            {this.state.status}
          </p>
        </div>
        <div className="buttonContainer">
          <input
            className="submit"
            type="submit"
            value="Save"
            onClick={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}
export default Selection;
