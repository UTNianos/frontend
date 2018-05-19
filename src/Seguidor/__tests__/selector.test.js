import selector from '../Selector';
import reducer from '../../store/Reducers/Seguidor';

const materiasResult = [{
			cursada: false,
			final: false,
			id: '416',
			name: 'Materia 1',
			status: 1,
			year: '0'
		},
		{
			cursada: false,
			final: false,
			id: '415',
			name: 'Materia 2',
			status: 1,
			year: '0'
}];

const materiasResultChanged = [{
			cursada: false,
			final: false,
			id: 416,
			name: 'Materia 1',
			status: 1,
			year: '0',
			pendientes: {
				final: [],
				firma: ["415"]
			}
		},
		{
			cursada: true,
			final: true,
			id: 415,
			name: 'Materia 2',
			status: 1,
			year: '0',
			pendientes: {
				final: [],
				firma: []
			}
}];

const estadosRespuesta = [{
	id: 416,
	status: 2
},
{
	id: 415,
	status: 1
}
];

const correlativas = [{
	m: 416,
	d: {
		rCC: ['415'],
		rFF: ['415'],
		hCC: ['15', '71'],
		hFF: ['15', '71'],
		hFC: ['27', '73']
	}
}];

const estadoConMaterias = {
	materias: materiasResult,
	correlativas: correlativas,
	estados: estadosRespuesta,
	isFetching: false,
	error: false
};

const updateMaterias = (id, status) => {
		return { type: 'UPDATE_ESTADO_OK', data: {id: id, status: status} };
}

describe('Seguidor Selector', () => {
 it('Selector unit test.', () => {

	 const reducedState = reducer(undefined, {});
	 const firstState = { seguidor: reducedState };
   expect(selector(firstState)).toEqual([]);
   expect(selector(firstState)).toEqual([]);

   // Verificar que el selector recomputo una única vez.
   expect(selector.recomputations()).toEqual(1);

	 // Generar un nuevo estado, de forma que los parametros sean distintos y el selector deba recomputarse.
   const newReducedState = reducer(estadoConMaterias, updateMaterias(416, 2));
	 const newState = { seguidor: newReducedState};
	 expect(selector(newState)).toEqual(materiasResultChanged);
   expect(selector.recomputations()).toEqual(2);
 })

})
