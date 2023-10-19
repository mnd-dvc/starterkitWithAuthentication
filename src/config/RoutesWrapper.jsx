import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Logout from "../pages/logout/";
import Index from "../layouts";
import IdariDuyuru from "../pages/idariburo/idariDuyuru";
import IdariNobet from "../pages/idariburo/idariNobet";
import PersonelGoster from "../pages/personeller/personelGoster";
import PersonelEkle from "../pages/personeller/personelEkle";
import UrunListele from "../pages/urunler/urunListele";
import UrunGuncelle from "../pages/urunler/urunGuncelle";
import Registery from "../pages/registery/registery";
import CreateAccount from "../pages/createAccount/createAccount";
import Login from "../pages/login/login";

function RoutesWrapper() {
  return (
    <Routes>
      <Route path="/" element={<Registery />} />
      <Route path="/createaccount" element={<CreateAccount />} />
      <Route path="/login" element={<Login />} />
      <Route element={<Index />}>
        <Route path="/homepage" element={<Home />} />
        <Route path="/idariburoduyuru" element={<IdariDuyuru />} />
        <Route path="/idariburonobetler" element={<IdariNobet />} />
        <Route path="/personelekle" element={<PersonelEkle />} />
        <Route path="/personelgoster" element={<PersonelGoster />} />
        <Route path="/urunlistele" element={<UrunListele />} />
        <Route path="/urunguncelle" element={<UrunGuncelle />} />
        <Route path="/logout" element={<Logout />} />
      </Route>
    </Routes>
  );
}

export default RoutesWrapper;
