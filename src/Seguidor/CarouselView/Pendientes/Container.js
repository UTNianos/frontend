import { connect } from 'react-redux';
import Pendientes from './Pendientes';

const mapStateToProps = state => ({
  materias: state.seguidor.materias
});

const PendientesContainer = connect(mapStateToProps)(Pendientes);

export default PendientesContainer;
