import { connect } from 'react-redux';
import Pendientes from './Pendientes';
// import getMateriasEstado from './Selector';

const mapStateToProps = state => ({
  materias: state.seguidor.materias
});

const PendientesContainer = connect(
  mapStateToProps
)(Pendientes);

export default PendientesContainer;
