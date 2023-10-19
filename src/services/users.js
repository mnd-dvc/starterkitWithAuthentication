import axios from "axios";

const apiUrl = "http://localhost:4000/api/";

const accessToken = `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1uZHZjIiwiaWF0IjoxNjk3MDA5MDEwLCJleHAiOjE2OTcwNDUwMTB9.qcGqW7rbAUcKaoH-ZdECKkPt27mlgRzk_NUBgjUolEKB2C3jio6vOQQ60fwCHF881z-011psZoo4S4LRkqsjaKnPbcoJdzniRDa5uUmwnboLPQi5y1cpQg-uG31Bq2c309SBObYg_pEjoQQWqFpwb_h2XDcfk_HXjxUlMDIxPpf8rh6bUiyMlIdBCu1KmBqr7DxIhE0LWM-eKe9UF__mJ7DIBWVa5n6VQw5KssB2RE25kPAhOmHWEtM0FO3LKlPiZS466Z5lLn4DDc-M59N-oBYJ-0tsVXg0Ax8EETLQof7XSkrxScS6O6zS0Xy0n0KiW6aQuqPXcc6Sn7_YI8NIwpQg49ieyA995oCzK3ShbAssc8_n16d9_oGRJfyAgpTHq6xDOuaSAOSCeOK5nsLa2lho-7TMJ_PuYWGBKtRKnyNeB1H_Vt5VD2V1m8R_rsJByBEFaP1hY3IODaSxJHC2THhoQbsnEtYDXI-VQtziKptshlD-vcuE5i_iM5PhccGa`;

localStorage.setItem("jwtToken", accessToken);

const loginUser = (createData) =>
  axios({
    method: "POST",
    url: `${apiUrl}login`,
    data: createData,
    headers: {
      Authorization: accessToken,
    },
  })
    .then((response) => response)
    .catch((error) => Promise.reject(error));

const addRegister = (createData) =>
  axios({
    method: "POST",
    url: `${apiUrl}adduser`,
    data: createData,
    headers: {
      Authorization: accessToken,
    },
  })
    .then((response) => response)
    .catch((error) => Promise.reject(error));

export { loginUser, addRegister };
