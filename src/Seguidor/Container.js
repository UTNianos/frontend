import { connect } from 'react-redux';
import Seguidor from './Seguidor';
import { loadEstado, loadMaterias, loadCorrelativas, updateEstadoMateria } from './Actions';
import getMateriasEstado from './Selector';

const mapStateToProps = state => ({
  materias: getMateriasEstado(state),
  isFetching: state.seguidor.isFetching,
  error: state.seguidor.error,
  estados: state.seguidor.estados
});

const mapDispatchToProps = dispatch => ({
  onLoad: () => {
    dispatch(loadEstado()).then(() => {
      dispatch(loadCorrelativas());
    }).then(() => {
      dispatch(loadMaterias());
    });
  },
  updateEstado: (materiaEstado) => {
    dispatch(updateEstadoMateria(materiaEstado));
  }
});

const SeguidorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Seguidor);

export default SeguidorContainer;
