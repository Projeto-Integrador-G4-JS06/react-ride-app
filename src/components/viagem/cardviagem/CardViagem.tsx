import {
  Calendar,
  CurrencyCircleDollar,
  HourglassMedium,
  MapPin,
  Pencil,
  Trash,
} from "@phosphor-icons/react";
import Viagem from "../../../models/Viagem";
import { Link } from "react-router-dom";

interface CardViagemProps {
  viagem: Viagem;
}

function CardViagem({ viagem }: CardViagemProps) {
  return (
    <div className="flex flex-col my-10 mx-10 overflow-hidden bg-gray-50 w-[13.5rem] h-[25rem] rounded-lg">
      <div className="flex  border-amber-500 bg-orange py-1.5 justify-between pt-2 pr-2">
        <p className="text-[#293241] mx-1.5">Viagem</p>
        <div className="flex ">
          <Link to={`/editarviagem/${viagem.id}`}>
            <Pencil
              size={24}
              color="#293241"
              className="mr-1 hover:fill-teal-800"
            />
          </Link>
          <Link to={`/deletarviagem/${viagem.id}`}>
            <Trash
              size={24}
              color="#293241"
              className="mr-1 hover:fill-red-700"
            />
          </Link>
        </div>
      </div>
      <div className="p-4 flex flex-col items-start ">
        <p className="text-sm flex font-poppins">
          <MapPin size={20} color="#293241" />
          Partida:
        </p>
        <p className="text-sm font-poppins">
          {viagem.bairro_partida} - {viagem.cidade_partida}
        </p>
        <br />
        <p className="text-sm flex font-poppins">
          <MapPin size={20} color="#293241" />
          Destino:
        </p>
        <p className="text-sm font-poppins">
          {viagem.bairro_destino} - {viagem.cidade_destino}
        </p>
        <br />
        <p className="text-sm flex font-poppins">
          <Calendar size={20} color="#293241" />
          Data:
        </p>
        <p className="text-sm font-poppins">
          {new Intl.DateTimeFormat("pt-BR", {
            dateStyle: "short",
            timeStyle: "short",
          }).format(new Date(viagem.data_partida))}
        </p>
        <br />
        <p className="text-sm flex font-poppins">
          <CurrencyCircleDollar size={20} color="#293241" />
          Preço:
        </p>
        <p className="text-sm font-poppins">
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(viagem.preco)}
        </p>
        <br />
        <p className="text-sm flex font-poppins">
          <HourglassMedium size={20} color="#293241" />
          Duração:
        </p>
        <p className="text-sm font-poppins">{viagem.duracao}</p>
      </div>
    </div>
  );
}

export default CardViagem;
