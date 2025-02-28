// import CardVeiculos from ""

import { useEffect, useState } from "react";
import Veiculo from "../../../models/Veiculo";
import { listar } from "../../../services/Service";
import CardVeiculo from "../cardveiculo/CardVeiculo";

function ListaVeiculos() {

    const [veiculo, setVeiculos] = useState<Veiculo[]>([]);

  async function buscarVeiculos() {
    try {
      await listar("/veiculos/all", setVeiculos, {
        headers: {},
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        alert("erro");
      }
    }
  }

  useEffect(() => {
    buscarVeiculos();
  }, [veiculo.length]);

    return (
      <>
        <div className="flex justify-center w-full my-4">
          <div className="container flex flex-col">
            <div
              className="grid grid-cols-1 md:grid-cols-2 
                                    lg:grid-cols-3 gap-8"
            >
              {veiculo.map((veiculo) => (
                <CardVeiculo key={veiculo.id} veiculo={veiculo} />
              ))}
            </div>
          </div>
        </div>
      </>
    );
}
export default ListaVeiculos;