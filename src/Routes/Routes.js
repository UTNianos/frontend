// Route components.
import App from '../App/App'; // Main application.
import Home from '../App/Home'; // Home
import Seguidor from '../Seguidor/Container';
import NotFound from '../Errors/NotFound'; // 404

const ApplicationRoutes = {
  App,
  Routes: [
    {
      path: '/', exact: true, component: Home, private: false
    },
    {
      path: '/seguidor', exact: true, component: Seguidor, private: false
    },
    { component: NotFound }
  ].map((route, index) => ({ id: index, ...route })),
};

export default ApplicationRoutes;
