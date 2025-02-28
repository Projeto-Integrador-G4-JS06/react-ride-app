import { Pencil, Trash } from "@phosphor-icons/react";
import Viagem from "../../../models/Viagem";
import { Link } from "react-router-dom";

interface CardViagemProps {
  viagem: Viagem;
}

function CardViagem({ viagem }: CardViagemProps) {
  return (
    <div className="flex bg-gray-600 border rounded-2xl w-[233px] h-[430px] p-3 flex-col relative">
      <div>
        <div className="flex justify-end items-center">
          <Link to={`/editarviagem/${viagem.id}`}>
            <Pencil size={26} />
          </Link>
          <Link to={`/deletarviagem/${viagem.id}`}>
            <Trash size={26} />
          </Link>
        </div>
        <div className="flex flex-col items-center p-4 ">
          <h4>{viagem.bairro_destino}</h4>
          <h1 className="text-lg font-semibold"> {viagem.preco}</h1>
          <p>{viagem.veiculo?.id}</p>
        </div>
      </div>

      <div className="flex">
        <button className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition absolute bottom-3 left-1/2 transform -translate-x-1/2">
          Comprar
        </button>
      </div>
    </div>
  );
}

export default CardViagem;
