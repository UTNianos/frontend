import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group' // ES6
import SubjectYears from '../SubjectYears';
import CarouselArrows from './CarouselArrows';
import getYearsArray from './getYearsArray';
import './Carousel.css';

class Carousel extends Component {

  constructor(props) {
    super(props);

    const { materias, yearsPerTab } = props;
    const studyYears = getYearsArray(yearsPerTab, materias);

    this.state = {
      currentTab: 1,
      totalTabs: studyYears.length,
      studyYears
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
    const { currentTab, totalTabs } = this.state;

    if (currentTab < totalTabs) {
      this.setState({ currentTab: currentTab + 1 });
    }
  }

  prevTab() {
    const { currentTab } = this.state;
    if (currentTab > 1) {
      this.setState({ currentTab: currentTab - 1 });
    }
  }

  render() {

    const { studyYears, currentTab } = this.state
    const { updateFn } = this.props;

    if (studyYears.length <= 0) { return null; }

    const index = currentTab - 1;
    const years = studyYears[index];

    return (
      <div>
        <CarouselArrows prevFn={this.prevTab.bind(this)} nextFn={this.nextTab.bind(this)} />
        <TransitionGroup>
          <CSSTransition
            transitionName="TransitionGroup"
            transitionAppear={false}
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={1000}
            transitionEnter
            transitionLeave
          >
            <SubjectYears years={years} updateFn={updateFn} />
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

export default Carousel;
