
import React from "react";
import Navbar from "@/pages/navbar/navbar";
import Servicos from "@/pages/servicos/servicos";
import Sobre from "@/pages/sobre/sobre";


export default function Home() {
  return (
    <React.Fragment>
      <Navbar/>
      <Servicos/>
      <Sobre/>
    </React.Fragment>
  );
}
