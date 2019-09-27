import Sensitive from './containers/sensitive';
import { routePath } from './config';

const routes = [
  {
    path: routePath.sensitive,
    component: Sensitive,
    name: 'sensitive'
  }
];
export default routes;
