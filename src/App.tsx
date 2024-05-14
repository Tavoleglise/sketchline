import { FC } from "react";
import "./App.css";
import { Route, Switch } from "wouter";
import AppNavbar from "./components/AppNavbar/AppNavbar";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

const Home: FC = () => <div>Home</div>;
const About: FC = () => <div>About</div>;
const NotFound: FC = () => <div>No hay</div>;

function App() {
  return (
    <>
      <AppNavbar />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
