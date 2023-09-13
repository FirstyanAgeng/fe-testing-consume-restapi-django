import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-use-history";
import setAuthToken from "../utils/autentikasi";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLogin = async () => {
    try {
      // Lakukan permintaan login ke Django dan terima token
      const response = await axios.post(
        "http://127.0.0.1:8000/api/user/token/",
        {
          email,
          password,
        }
      );
      const { token } = response.data;

      // Simpan token dalam penyimpanan lokal
      localStorage.setItem("token", token);

      setAuthToken(token);

      // Arahkan pengguna ke halaman "recipe" setelah login berhasil
      history.push("/recipe");
    } catch (error) {
      // Handle error login di sini
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="p-2">
      <input
        className="p-2"
        type="email"
        placeholder="masukan email anda"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        className="p-2"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button className="p-2 btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
