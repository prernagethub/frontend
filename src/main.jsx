import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/Store.jsx";
import { DarkModeProvider } from "./context/DarkModeContext";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <DarkModeProvider>
        <App />
      </DarkModeProvider>
    </BrowserRouter>
  </Provider>
);
