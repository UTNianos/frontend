import React, { Component } from 'react';
import FetchingIndicator from '../Fetching/FetchingIndicator'
import Seguidor from './Standard/Seguidor';
import TreeView from './TreeView/Seguidor';
import { Icon } from 'react-fa';
import { Tabs, Button } from 'antd';
import './SeguidorViews.css';

const TabPane = Tabs.TabPane;

/*
const SeguidorView = ({mode, updateEstado, materias}) => {

  switch(mode){
    case 'standard':
       return (<Seguidor
                  updateEstado={updateEstado}
                  materias={materias}
              />);

    case 'tree':
       return (<TreeView
                updateEstado={updateEstado}
                materias={materias}
              />);

    default:
       return null;
  }

  <div className="ModeSwitcher">

    <Button
      className="IconStandard"
      onClick={() => this.toggleMode('standard')}
    >
      <Icon name="align-justify" />
    </Button>

    <Button
      className="IconTree"
      onClick={() => this.toggleMode('tree')}
     >
      <Icon name="align-justify" />
    </Button>

    <Button
      className="IconChart"
      onClick={() => this.toggleMode('chart')}
    >
      <Icon name="bar-chart" />
    </Button>

  </div>
}*/

class SeguidorViews extends Component {

  constructor(props) {
    super(props);
    this.state = { mode: 'standard' };
  }

  componentDidMount() {
    this.props.onLoad()
  }

  toggleMode(mode){
    this.setState({mode: mode});
  }

  render(){

   const {
     isFetching,
     error,
     updateEstado,
     materias
   } = this.props

   if (isFetching)
     return <FetchingIndicator />;

   if (error)
     return <p>Hubo un error recuperando las materias</p>;

   return(
   <div>
      <Tabs
        defaultActiveKey="1"
        tabPosition="top"
      >
      <TabPane tab="Tab 1" key="1">
          <Seguidor updateEstado={updateEstado} materias={materias} />
      </TabPane>
        <TabPane tab="Tab 2" key="2">
          <TreeView updateEstado={updateEstado} materias={materias} />
        </TabPane>
      </Tabs>

  </div>
  );

 }
}

export default SeguidorViews;
