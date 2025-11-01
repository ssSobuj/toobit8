import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./i18n.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="notranslate" translate="no">
    <App />
  </div>
);