
function Home() {
    return (
        // div container
        <div className="bg-[#495F80] flex justify-center min-h-screen m-0 p-0">
            {/* div */}
            <div className="container flex flex-col gap-4 items-center justify-center mx-8 my-8">
                <div className="flex flex-col-reverse lg:flex-row w-full">
                    {/* div esquerda */}
                    <div className="flex flex-col justify-center gap-4 mt-4 lg:w-1/2">
                        <div className="flex justify-center">
                            <img src="https://ik.imagekit.io/liaMatsubara/ride/carro_home%20(1).svg?updatedAt=1740703899856"
                                alt=""
                                className="w-6/7 md:w-5/6"
                            />
                        </div>

                        <p className="text-white text-center">
                            Encontre ou ofereça caronas de um jeito fácil e seguro.
                        </p>
                    </div>

                    {/* div direita */}
                    <div className="flex justify-center mt-6">
                        <img src="https://ik.imagekit.io/liaMatsubara/ride/bemVindoBoraAi.svg?updatedAt=1740685537890" alt="" className="md:w-170" />

                    </div>
                </div>


                <h1 className="text-white text-2xl font-bold mt-10">Encontre sua Viagem</h1>

                {/* div busca */}
                <div className="bg-[#D9D9D9] p-4 w-full rounded-md md:w-5/6 lg:w-2/3">
                    <form className="flex flex-col gap-2">

                        <div className="flex flex-col gap-2 lg:flex lg:w-full lg:justify-center lg:gap-2">
                            <div className="flex flex-col w-full">
                                <label htmlFor="origem" className="ml-2 mb-1">
                                    Local de Origem</label>
                                <input type="text"
                                    className="bg-white rounded-2xl text-center placeholder:text-[#B3B3B3] placeholder:opacity-50 p-1"
                                    placeholder="Bairro Origem - Cidade Origem"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="destino" className="ml-2 mb-1">
                                    Local de Destino</label>
                                <input type="text"
                                    className="bg-white rounded-2xl text-center placeholder:text-[#B3B3B3] placeholder:opacity-50 p-1"
                                    placeholder="Bairro Destino - Cidade Destino"
                                />
                            </div>
                        </div>


                        <div className="flex w-full justify-center gap-2">
                            <div className="flex flex-col w-full">
                                <label htmlFor="ida" className="ml-2 mb-1">
                                    Data de Ida</label>
                                <input type="text"
                                    className="bg-white rounded-2xl text-center placeholder:text-[#B3B3B3] placeholder:opacity-50 w-full p-1"
                                    placeholder="aaaa-mm-dd"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-center">
                            <button className="bg-[#FFA500] w-full rounded-2xl mt-2 text-white font-bold p-1.5">Buscar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Home