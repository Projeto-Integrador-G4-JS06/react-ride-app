// import CardVeiculos from ""

import { useEffect, useState } from "react";
import Veiculo from "../../../models/Veiculo";
import { listar } from "../../../services/Service";
import CardVeiculo from "../cardveiculo/CardVeiculo";
import { Plus } from "@phosphor-icons/react";

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
            <div className="items-end flex justify-end m-4">
              <button className="flex flex-row gap-2 text-base hover:cursor-pointer hover:bg-amber-100 border-orange border-2 font-semibold bg-white text-orange rounded-2xl p-2">
                <Plus size={20} color="#ffa500"/>
                Cadastrar novo veículo
              </button>
            </div>
            <div
              className="grid grid-cols-1 md:grid-cols-2 
                                    lg:grid-cols-4 gap-8"
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