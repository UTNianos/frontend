import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group' // ES6
import SubjectYears from '../SubjectYears';
import CarouselArrows from './CarouselArrows';
import getYearsArray from './getYearsArray';
import './Carousel.css';

class Carousel extends Component {

 constructor(props) {
    super(props);
	this.state = {currentTab: 1};
 }
 
 nextTab() {
   this.setState({
	currentTab: this.state.currentTab+1
   });
 }

 prevTab() {
   this.setState({
	currentTab: this.state.currentTab-1
   });
 }
 
 render() {
	
    const yearsPerTab = 3;
    const { materias, updateFn } = this.props;
    const studyYears = getYearsArray(yearsPerTab, materias);
	const index = this.state.currentTab-1;
	const years = studyYears[index];
	
	console.log(this.prevTab);
	
    return (
    <div>
	  <CarouselArrows 
		prevFn={this.prevTab.bind(this)} 
		nextFn={this.nextTab.bind(this)} 
	  />
	  <CSSTransitionGroup
		transitionName="TransitionGroup"
		transitionAppear={false}		
		transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
		transitionEnter={true}
		transitionLeave={true}
	   >
	    <SubjectYears 
		  years={years}
		  updateFn={updateFn}
		/>
      </CSSTransitionGroup>      
    </div>
    );
 }
}

export default Carousel;