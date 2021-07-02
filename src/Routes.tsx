import { BrowserRouter as Router, Route } from "react-router-dom";

import App from './App';
import Details from './screens/Details';

export default function Routes() {

  /* Como só serão exibidas duas telas diferente apenas se fez necessário o uso de duas rotas */
  return (
    <Router>
      <Route exact path="/" component={App} />
      <Route path="/:id" component={Details} />
    </Router>
  );
}