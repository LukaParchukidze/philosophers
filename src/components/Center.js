import { Route, Switch } from "react-router-dom";
import Welcome from "./Welcome";
import Philosophers from "./Philosophers";
import Philosopher from "./Philosopher";
import Chronology from "./Chronology";
import About from "./About";
import Login from "./Login";
import Register from "./Register";
import Error from "./Error";

const Center = () => {
  return (
    <main className="blue-grey lighten-5">
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/philosophers" component={Philosophers} />
        <Route exact path="/philosophers/:id" component={Philosopher} />
        <Route exact path="/chronology" component={Chronology} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route path="*" component={Error} />
      </Switch>
    </main>
  );
};

export default Center;
