import axios from "axios";

// Fungsi untuk mengatur token pada setiap permintaan HTTP
const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Token ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;
