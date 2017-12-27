import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group' // ES6
import SubjectYears from '../SubjectYears';
import CarouselArrows from './CarouselArrows';
import getYearsArray from './getYearsArray';
import './Carousel.css';

class Carousel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentTab: 1,
      totalTabs: 0,
      studyYears: []
    };
  }

  componentWillReceiveProps(nextProps) {

    const { materias, yearsPerTab } = nextProps;
    const studyYears = getYearsArray(yearsPerTab, materias);

    this.setState({
      totalTabs: studyYears.length,
      studyYears
    });
  }

  nextTab() {
    if (this.state.currentTab < this.state.totalTabs) {
      this.setState({
        currentTab: this.state.currentTab + 1
      });
    }
  }

  prevTab() {
    if (this.state.currentTab > 1) {
      this.setState({
        currentTab: this.state.currentTab - 1
      });
    }
  }

  render() {

    if (this.state.studyYears.length <= 0) {
      return null;
    }

    const index = this.state.currentTab - 1;
    const years = this.state.studyYears[index];
    const { updateFn } = this.props;

    return (
      <div>
        <CarouselArrows prevFn={this.prevTab.bind(this)} nextFn={this.nextTab.bind(this)} />
        <CSSTransition
          classNames="TransitionGroup"
          transitionAppear={false}
          timeout={1000}
          enter
          exit
        >
          <SubjectYears years={years} updateFn={updateFn} />
        </CSSTransition>
      </div>
    );
  }
}

export default Carousel;
