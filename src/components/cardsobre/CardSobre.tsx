import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react"

interface CardSobreProps {
    nome: string;
    imagem: string;
    cargo: string;
    responsavel: string;
    linkedin: string;
    github: string;
}

function CardSobre({nome, imagem, cargo, responsavel, linkedin, github}: CardSobreProps) {
    return (
        <div className="flex items-center justify-center p-12 md:p-8 md:justify-start md:items-start md:-mx-2 md:left-10 ">
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between w-96 shadow-lg hover:shadow-2xl transition-shadow'>
            <header className='flex flex-col items-center justify-start py-8 px-6 bg-[var(--color-dark-slate)] text-white font-bold text-2xl gap-3.5'>
                <img 
                    src={imagem}
                    alt="Foto de Perfil do Fulano"
                    className="flex items-center w-40 h-40 rounded-full object-cover border-6 border-[var(--color-aqua-dark)]" 
                />

                <div className="">
                    {nome}
                </div>
            </header>

            <div className='flex flex-col items-center justify-center p-8 text-2xl bg-[var(--color-light-gray)] gap-6 min-h-70 md:min-h-[25vh]'>
                <div className="w-full flex flex-col items-center gap-4">
                    <p className="text-center">{cargo}</p>
                    <p className="text-center text-xl">{responsavel}</p>
                </div>

                <div className="flex flex-row gap-8">
                    <a href={linkedin} target='_blank'>
                        <LinkedinLogo size={40} weight="fill" />
                    </a>
                    <a href={github} target='_blank'>
                        <GithubLogo size={40} weight="fill" />
                    </a>
                </div>
            </div>

        </div>
        </div>

    )
}

export default CardSobre