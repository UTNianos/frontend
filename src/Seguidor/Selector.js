import { createSelector } from 'reselect';

const getMaterias = state => state.seguidor.materias
const getEstados = state => state.seguidor.estados
const getCorrelativas = state => state.seguidor.correlativas

/*
 *   Estados:
 *   1 - Pendiente
 *   2 - Cursando
 *   3 - Firmada
 *   4 - Aprobada
 *
 *   Los que importan en este caso son firma(3) y aprobación(4).
*/
const ESTADO_FIRMA = 3;
const ESTADO_APROBACION = 4;

function reqSatisfy(estados, req, estado) {
  const result = estados.filter(e => e.id == req && e.status >= estado);
  return result.length !== 0;
}

/*
 * @name: validarReq
 * @desc: Valida un conjunto de requerimientos contra un conjunto de estados.
 * @param requerimientos: el conjunto de requerimientos a validar.
 * @param estados: estados contra los que se comparan los requerimientos.
 * @param estado: el estado que se quiere que tengan los requerimientos (aprobada/firmada).
*/
function validarReq(requerimientos, estados, estado) {

  // No hay requisitos, la condición es verdadera.
  if (!requerimientos || requerimientos.length === 0) {
    return true;
  }

  const valido = requerimientos.every(req => reqSatisfy(estados, req, estado));
  return valido;
}

/*
 * @name: getEstadoMateria
 * @desc: Obtiene el estado de una materia (si se puede cursar o dar final).
 * @param materia: materia cuyo estado se desea conocer.
 * @param correlativas: correlativas de esa materia.
 * @param aprobadas: materias aprobadas hasta el momento.
*/
function getEstadoMateria(correlativas, estados) {

  if (correlativas.length == 0) {
    return { cursada: true, final: true };
  }

  // Requisitos para cursar.
  const Ccursadas = correlativas.rCC;
  const CFinales = correlativas.rFC;

  // Requisitos para dar final.
  const Fcursadas = correlativas.rCF;
  const Ffinales = correlativas.rFF;

  const puedeCursar = validarReq(Ccursadas, estados, ESTADO_FIRMA) &&
                      validarReq(CFinales, estados, ESTADO_APROBACION);

  const puededarFinal = validarReq(Fcursadas, estados, ESTADO_FIRMA) &&
                        validarReq(Ffinales, estados, ESTADO_APROBACION);

  return { cursada: puedeCursar, final: puededarFinal };
}

// Obtiene las materias con estado.
const getMateriasEstado = createSelector(
  [getMaterias, getEstados, getCorrelativas],
  (materias, estados, correlativas) => {
    for (const materia of materias) {

      materia.id = parseInt(materia.id, 10);
      const materiaEstado = estados.filter(c => c.id === materia.id);
      let estadoMateria = 1; // Por defecto, la materia esta pendiente.

      if (materiaEstado.length > 0) {
        estadoMateria = materiaEstado[0].status;
      }

      let correlativasMateria = correlativas.filter(c => c.m === materia.id);

      if (correlativasMateria.length > 0) {
        correlativasMateria = correlativasMateria[0].d;
      }

      const estado = getEstadoMateria(correlativasMateria, estados);

      materia.status = (estado.cursada === false ? 1 : estadoMateria);
      materia.cursada = estado.cursada;
      materia.final = estado.final;
    }

    return materias;
  }
);

export default getMateriasEstado;
