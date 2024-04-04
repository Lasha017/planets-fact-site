import { useEffect } from "react";
import Mars from "./pages/mars/Mars";
import Mercury from "./pages/mercury/Mercury";
import Venus from "./pages/venus/Venus";
import ReactDOM from "react-dom";

const App = () => {
  useEffect(() => {
    const url = window.location.pathname;
    let Component;

    switch (url) {
      case "/mars":
        Component = Mars;
        break;
      case "/mercury":
        Component = Mercury;
        break;
      case "/venus":
        Component = Venus;
        break;
      default:
        Component = Mars;
    }

    const element = <Component />;
    ReactDOM.render(element, document.getElementById("root"));
  }, []);

  return (
    <div className="App">
      {/*... */}
    </div>
  );
};

export default App;