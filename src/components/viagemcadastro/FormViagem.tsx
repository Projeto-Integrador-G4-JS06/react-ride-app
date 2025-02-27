function FormViagem() {
  return (
    <div className="container flex flex-col mx-auto items-center bg">
      <h1 className="text-4xl text-center my-8">Cadastrar Viagem</h1>

      <form className="flex flex-col w-1/2 gap-4 ">
        {/* onSubmit={gerarNovoProduto} */}
        <div className="flex flex-col gap-2">
          <label htmlFor="localdapartida">Local da Partida</label>
          <input
            type="text"
            placeholder="Local da Partida"
            name="nome"
            required
            className="border-2 border-slate-700 rounded p-2"
            // value={produto.nome}
            // onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="horariodepartida">Horario de Partida</label>
          <input
            type="time"
            placeholder="Horario de Partida"
            name="Horario de Partida"
            required
            className="border-2 border-slate-700 rounded p-2"
            // value={produto.preco}
            // onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="datadepartida">Data de Partida</label>
          <input
            type="date"
            placeholder=""
            name="datadepartida"
            required
            className="border-2 border-slate-700 rounded p-2"
            // value={produto.foto}
            // onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="localdedestino">Local de Destino</label>
          <input
            type="text"
            placeholder="Local de Destino"
            name="localdestino"
            required
            className="border-2 border-slate-700 rounded p-2"
            // value={produto.foto}
            // onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="distancia">Distância</label>
          <input
            type="number"
            placeholder="Em KM"
            name="distancia"
            required
            className="border-2 border-slate-700 rounded p-2"
            // value={produto.foto}
            // onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="velocidademedia">Velocidade Média</label>
          <input
            type="number"
            placeholder="Em KM/h"
            name="velocidademedia"
            required
            className="border-2 border-slate-700 rounded p-2"
            // value={produto.foto}
            // onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="preco">Preço</label>
          <input
            type="number"
            placeholder="R$ 10"
            name="preco"
            required
            className="border-2 border-slate-700 rounded p-2"
            // value={produto.foto}
            // onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <p>Veiculo</p>
          <select
            name="veiculo"
            id="veiculo"
            className="border p-2 border-slate-800 rounded"
            // onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
          >
            <option value="" selected disabled>
              Selecione um veiculo
            </option>

            {/* {categorias.map((categoria) => (
              <>
                <option value={categoria.id}>{categoria.tipo}</option>
              </>
            ))} */}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="duracao">Duração</label>
          <input
            type="number"
            placeholder="Em horas"
            name="duracao"
            required
            className="border-2 border-slate-700 rounded p-2"
            // value={produto.foto}
            // onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <p>Categoria do Jogo</p>
          <select
            name="tema"
            id="tema"
            className="border p-2 border-slate-800 rounded"
            // onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
          >
            <option value="" selected disabled>
              Selecione uma Categoria
            </option>

            {/* {categorias.map((categoria) => (
              <>
                <option value={categoria.id}>{categoria.tipo}</option>
              </>
            ))} */}
          </select>
        </div>
        <button
          type="submit"
          className="rounded disabled:bg-slate-200 bg-indigo-400 hover:bg-indigo-800
                               text-white font-bold w-1/2 mx-auto py-2 flex justify-center"
          // disabled={carregandoCategoria}
        >
          Cadastrar Viagem
          {/* {isLoading ? (
            <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="24"
              visible={true}
            />
          ) : (
            <span>{id !== undefined ? "Atualizar" : "Cadastrar"}</span>
          )} */}
        </button>
      </form>
    </div>
  );
}

export default FormViagem;
