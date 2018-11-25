import Counter from './containers/counter'
import Excel2json from './containers/Excel2json'
import {routePath} from './config';

const routes = [
  {
    path: routePath.counter,
    component: Counter,
    name: 'counter'
  }, {
    path: routePath.excel2json,
    component: Excel2json,
    name: 'excel2json'
  }
]
export default routes