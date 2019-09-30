// Route components.
import Home from '../App/Home'; // Home
import Seguidor from '../Seguidor/Container';
import NotFound from '../Errors/NotFound'; // 404

const routes = [
  {
    path: '/', exact: true, component: Home, private: false
  },
  {
    path: '/seguidor', exact: true, component: Seguidor, private: false
  },
  { component: NotFound }
];

export default routes;
