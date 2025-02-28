import { List, User, LineVertical, SignOut } from "@phosphor-icons/react";
import { useState } from "react";
import { AiOutlineCar } from "react-icons/ai";
import { Link } from "react-router-dom";
//comentario

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // Controlar quando o menu hambúrguer aparece (mobile)

  return (
    <header className="relative bg-[#293241] text-white w-full">
      {/* Navbar Responsiva (Mobile) - Exibir em telas de 1024px ou menos */}
      <div className="container mx-auto px-4 w-full flex items-center justify-between pt-6 pb-2 xl:hidden">
        {/* Ícone do menu hambúrguer (somente no Mobile) */}

        {/* Logo e Nome (centralizado no Mobile) */}
        <div className="flex items-center md:w-auto py-2">
          <p>
            <img
              className="h-[4vh] mr-1"
              src="https://ik.imagekit.io/3ov0fr7b9/usuarios/BORA%20AI.svg?updatedAt=1740689358462"
              alt="PeopleHub Logo"
            />
          </p>
          <Link to="/home">
            <AiOutlineCar size={32} color="#ffa500" />
          </Link>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <div className=" border rounded-4xl border-[#ffa500] bg-amber-500  p-1">
            <List size={29} color="#ffff" />
          </div>
        </button>
      </div>

      {/* Menu Mobile (abre ao clicar no botão hambúrguer) */}

      {/* Explicações relevantes para o trecho de código abaixo

          - Se menuOpen for "true", a parte à direita de && (o componente de navegação) será renderizada. Caso seja "false", a parte da direita de && será ignorada e nada será renderizada;
          - "absolute": significa que o elemento <-nav> será posicionado fora do fluxo normal do documento, ou seja, ele não ocupará espaço no layout tradicional (como se fosse "flutuante"). Ele será posicionado em relação ao <header>, já que este é o elemento pai (position: relative). Caso não houvesse um elemento com "position: relative", o posicionamento absoluto iria se referir ao <body> ou ao <html> da página.

      */}

      {menuOpen && (
        <nav className="container mx-auto w-2/4 px-2 absolute top-[81px] right-0  bg-[#293241] text-white py-2 xl:hidden">
          <ul className="flex flex-col items-start px-4">
            <Link to="" className="w-full py-3  border-b border-gray-400 hover:text-gray-400 cursor-pointer">
              Login
            </Link>
            <Link to="" className="w-full py-3 border-b hover:text-gray-400 cursor-pointer border-gray-400">
              Procurar Viagem
            </Link>
            <Link to="" className="w-full py-3 border-b hover:text-gray-400 cursor-pointer border-gray-400">
              Viagens
            </Link>
            <Link to="" className="w-full py-3 border-b hover:text-gray-400 cursor-pointer border-gray-400">
              Veículos
            </Link>
            <Link to="/sobre" className="w-full py-3  border-b hover:text-gray-400 cursor-pointer border-gray-400">
              Sobre
            </Link>
            <Link to="" className="w-full py-3 hover:text-gray-400 cursor-pointer">
              Sair
            </Link>
          </ul>
        </nav>
      )}

      {/* Navbar Completa para Desktop */}
      {/* 
          hidden: esconde essa <div> por padrão;
          xl:flex: mostra a <div> como modelo "flexbox" em telas de 1280px ou maiores.
      */}
      <div className="container mx-auto px-8 hidden xl:flex items-center justify-between py-4">
        {/* Logo e Nome (lado esquerdo) */}
        <div className="flex items-center">
          <Link to="/home">
            <AiOutlineCar size={40} color="#ffa500" />
          </Link>
        </div>

        {/* Opções de Navegação */}
        <nav>
          <ul className="flex gap-4 text-lg">
            <li className="hover:text-blue-500 cursor-pointer">
              Procurar Viagem
            </li>
            <li>
              <LineVertical size={32} color="gray" />
            </li>
            <li className="hover:text-blue-500 cursor-pointer">Viagem</li>
            <li>
              <LineVertical size={32} color="gray" />
            </li>
            <li className="hover:text-blue-500 cursor-pointer">Veiculo</li>
            <li>
              <LineVertical size={32} color="gray" />
            </li>
            <li className="hover:text-blue-500 cursor-pointer">Sobre</li>
            <li>
              <LineVertical size={32} color="gray" />
            </li>
            <li className="cursor-pointer border-amber-500 rounded-xl p-0.5 bg-amber-500">
              <User size={28} />
            </li>
            <li className="cursor-pointer border-amber-500 rounded-xl p-0.5 bg-amber-500">
              <SignOut size={28} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
