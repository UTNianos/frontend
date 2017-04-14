import React from 'react';
import Styles from './Subject.scss';
import cssModules from 'react-css-modules';

function getValueStatus(value)
{
   let status = "";

   switch (value)
   {
      case 1:
        status = "Pending";
        break;
      case 2:
        status = "Taking";
        break;
      case 3:
        status = "PartiallyFinished"; // Firmada
        break;
      case 4:
        status = "Passed";
        break;
      default:
        status = "";
   }

   return status;
}

const subjectValues = [
{"number": 1, "name": "Pendiente"},
{"number": 2, "name": "Cursando"},
{"number": 3, "name": "Firmada"},
{"number": 4, "name": "Aprobada"}
];

class Subject extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: this.props.status, id: this.props.id};
	this.updateMateria = this.updateMateria.bind(this);
	this.updateStatusFn = this.props.updateEstado;
  }

  updateMateria(){	  	
	  const materiaStatus = {"id": parseInt(this.state.id), "status": this.state.value};
	  this.updateStatusFn(materiaStatus);
  }
  
  handleChange = (event) => {	  
      const value = event.target.value;  
	  this.setState({value}, this.updateMateria);
  };

  render() {
   
   const cursadaClass = this.props.cursada ? " Enabled" : " Disabled";
   const cssClass = "Subject " + getValueStatus(this.state.value) + cursadaClass;
   
   if(!this.props.cursada)
   {
	 return (
     <div styleName={cssClass}>
     
     <div>{this.props.name}</div>
	
     <select disabled>
	    <option value={0}>Pendiente</option>	
	 </select>	 		
	
   </div>
   );	   
   }
   
   return (
   <div styleName={cssClass}>
     
    <div>{this.props.name}</div>
	
	<select value={this.state.value} onChange={this.handleChange}>
	{subjectValues.map((sValue, i) =>
	  <option value={sValue.number} key={i}>{sValue.name}</option>	
	)}
	</select>	 		
	
   </div>
   );
   
  }
}

export default cssModules(Subject, Styles, { allowMultiple: true });
