// import CardVeiculos from ""

import { useEffect, useState } from "react";
import Veiculo from "../../../models/Veiculo";
import { listar } from "../../../services/Service";

function ListaVeiculos() {

    const [viagens, setViagens] = useState<Veiculo[]>([]);

  async function buscarViagens() {
    try {
      await listar("/veiculos/all", setViagens, {
        headers: {},
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        alert("erro");
      }
    }
  }

  useEffect(() => {
    buscarViagens();
  }, [viagens.length]);

    return (
        <>
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 
                                    lg:grid-cols-3 gap-8">
                            {/* <CardVeiculos /> */}
                    </div>
                </div>
            </div>
        </>
    )
}
export default ListaVeiculos;