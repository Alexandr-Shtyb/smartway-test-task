import { Route, Routes } from "react-router-dom";
import { RoutesApp } from "./routes/routes";
import MainPage from "pages/MainPage/MainPage";

const App = () => {
  return (
    <Routes>
      <Route path={RoutesApp.Main} element={<MainPage />} />
    </Routes>
  );
};

export default App;
