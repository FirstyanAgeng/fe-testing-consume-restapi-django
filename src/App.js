// import Login from "./Login";
import { Routes, Route } from "react-router-dom";
// import RecipeList from "./Recipe";
import { HOME, RECIPE, UPDATE } from "./router";
import Login from "./components/Login";
import RecipeList from "./components/Recipe";

const App = () => {
  return (
    <>
      <Routes>
        <Route path={HOME} element={<Login />} />
        <Route path={RECIPE} element={<RecipeList />} />
        {/* <Route path={UPDATE} element={<></>}/> */}
        <Route
          path="*"
          element={<marquee>Halaman Tidak Tersedia...</marquee>}
        />
      </Routes>
    </>
  );
};

export default App;
