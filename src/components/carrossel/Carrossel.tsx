import 'swiper/swiper-bundle.css';
import { Navigation, Pagination } from 'swiper/modules';
import SwiperCore from 'swiper'
import { SwiperSlide, Swiper } from 'swiper/react';
import CardSobre from '../cardsobre/CardSobre';

SwiperCore.use([Navigation, Pagination]);

const CardsDados = [
    {
        nome: "Alan",
        imagem: "https://ik.imagekit.io/liaMatsubara/rh_fotos/alan.png?updatedAt=1740587313242",
        cargo: "Desenvolvedor Frontend",
        responsavel: "Responsável pelo componente 'Navbar' e 'Footer'",
        linkedin: "https://www.linkedin.com/in/alanbmrosa/",
        github: "https://github.com/alanbrunoscience"
    },
    {
        nome: "Fernando",
        imagem: "https://ik.imagekit.io/liaMatsubara/rh_fotos/fernando.jpeg?updatedAt=1740587313152",
        cargo: "Scrum Master",
        responsavel: "Responsável pelo componente 'Sobre'",
        linkedin: "https://www.linkedin.com/in/fernando-lana/",
        github: "https://github.com/loslanas"
    },
    {
        nome: "Gabriela",
        imagem: "https://ik.imagekit.io/liaMatsubara/rh_fotos/gaba1.jpg?updatedAt=1740588316189",
        cargo: "Desenvolvedor Frontend",
        responsavel: "Responsável pelo componente 'Colaborador'",
        linkedin: "https://www.linkedin.com/in/gaba-teixeira/",
        github: "https://github.com/gaba-teixeira"
    },
    {
        nome: "Isis",
        imagem: "https://ik.imagekit.io/liaMatsubara/rh_fotos/Isis.png?updatedAt=1740587313258",
        cargo: "Desenvolvedor Frontend",
        responsavel: "Responsável pelo componente 'Colaborador' e a idêntidade visual",
        linkedin: "https://www.linkedin.com/in/isis-okamoto/",
        github: "https://github.com/iyumw"
    },
    {
        nome: "João",
        imagem: "https://ik.imagekit.io/liaMatsubara/rh_fotos/joao.jpg?updatedAt=17405883031848",
        cargo: "Desenvolvedor Frontend",
        responsavel: "Responsável pelo componente 'Navbar' e 'Footer'",
        linkedin: "https://www.linkedin.com/in/jo%C3%A3o-henrique-0665081a2/",
        github: "https://github.com/Jhacss"
    },
    {
        nome: "Lia",
        imagem: "https://ik.imagekit.io/liaMatsubara/rh_fotos/lia%20(1).jpg?updatedAt=1740587359401",
        cargo: "Desenvolvedor Frontend",
        responsavel: "Responsável pelo componente 'Sobre'",
        linkedin: "https://www.linkedin.com/in/liamatsubara/",
        github: "https://github.com/liamatsubara"
    },
    {
        nome: "Samuel",
        imagem: "https://ik.imagekit.io/liaMatsubara/rh_fotos/samuel.jpeg?updatedAt=1740587313309",
        cargo: "Desenvolvedor Frontend",
        responsavel: "Responsável pelo componente 'Home'",
        linkedin: "https://www.linkedin.com/in/samueldos-santos/",
        github: "https://github.com/Samuel-1210"
    },
]

function Carrossel(){
    return (

        <div className='flex items-center w-full'>
            <Swiper
                spaceBetween={10}
                slidesPerView={1}
                centeredSlides={false}
                navigation
                pagination={false}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    }
                }}
            >
                {CardsDados.map((card, index) => (
                    <SwiperSlide key={index}>
                        <CardSobre
                            nome={card.nome}
                            imagem={card.imagem}
                            cargo={card.cargo}
                            responsavel={card.responsavel}
                            linkedin={card.linkedin}
                            github={card.github}
                        />
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    );
}

export default Carrossel