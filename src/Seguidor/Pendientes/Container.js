import { connect } from 'react-redux';
import Pendientes from './Pendientes';
//import getMateriasEstado from './Selector';

const mapStateToProps = state => ({
  materias: state.seguidor.materias
});

const mapDispatchToProps = dispatch => ({});

const PendientesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Pendientes);

export default PendientesContainer;
