import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-use-history";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Mengambil daftar resep dari API yang memerlukan autentikasi
    axios
      .get("http://127.0.0.1:8000/api/recipe/recipes/")
      .then((response) => {
        setRecipes(response.data);
      })
      .catch((error) => {
        // Handle kesalahan autentikasi atau kesalahan lainnya
        console.log(error);
      });
  }, []);

  const deleteRecipe = (id) => {
    axios
      .delete(`http://127.0.0.1:8000/api/recipe/recipes/${id}/`)
      .then((response) => {
        // Hapus resep dari daftar setelah berhasil dihapus
        setRecipes(recipes.filter((recipe) => recipe.id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const history = useHistory();

  const handleUpdateClick = (id) => {
    history.push(`/update/${id}`); // Ganti dengan URL yang sesuai
  };

  return (
    <>
      <div style={{ marginTop: 65 }}>
        <div className="container-fluid">
          <h3 className="text-center">Recipe dari Django</h3>
          <div className="w-full mw-full">
            <div className="card p-0 bg-very-dark-dm">
              <div className="table-responsive">
                <table className="table table-inner-bordered">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Title</th>
                      <th>Time Minutes</th>
                      <th>Link</th>
                      <th>Price</th>
                      <th>Aksi</th>
                      {/* <th>Image</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {/* data from database */}

                    {recipes.map((recipe, index) => {
                      return (
                        <>
                          <tr key={recipe.id}>
                            <td>{index + 1}</td>
                            <td>{recipe.title}</td>
                            <td>{recipe.time_minutes}</td>
                            <td>{recipe.link}</td>
                            <td>{recipe.price}</td>
                            <td>
                              <div className="row">
                                <div className="col-1">
                                  <span
                                    style={{ cursor: "pointer" }}
                                    onClick={() => deleteRecipe(recipe.id)}
                                  >
                                    ❌
                                  </span>
                                </div>
                                <div className="col-1">
                                  <span
                                    style={{ cursor: "pointer" }}
                                    onClick={() => handleUpdateClick(recipe.id)}
                                  >
                                    ✏️
                                  </span>
                                </div>
                              </div>
                            </td>
                            {/* <td>{recipe.tags}</td> */}
                            {/* <td>{recipe.ingredients}</td> */}
                            {/* <td key={index}>
                              {recipe.ingredients.map((ingredient) => (
                                <div key={ingredient.id}>
                                  <span>ID: {ingredient.id}</span>
                                  <span>Name: {ingredient.name}</span>
                                </div>
                              ))}
                            </td> */}

                            <td>
                              <div className="row">
                                {/* <div className="col-10">{data.note}</div> */}
                                <div className="col-1">
                                  {/* <Link
                                    to={`./${data.id}`}
                                    style={{ cursor: "pointer" }}
                                  >
                                    🔍
                                  </Link> */}
                                </div>
                                <div className="col-1">
                                  {/* <span
                                    style={{ cursor: "pointer" }}
                                    onClick={() => deleteContact()}
                                  >
                                    ❌
                                  </span> */}
                                </div>
                              </div>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeList;
