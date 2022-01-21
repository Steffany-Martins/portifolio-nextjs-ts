//import { GetServerSidePropsContext, GetStaticProps, GetStaticPropsContext } from 'next';
import {services} from '../data';
import ServiceCard from '../components/ServiceCard'
const index = () => {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <h5 className="my-3 font-medium">
        Eu estava cursando ensino médio técnico na instituição CEFET/RJ em andamento no curso
        de informática. Agora, eu estou em andamento na faculdade de Analista de Sistemas.
         Eu tenho oito meses de experiência entre empresa e freelance, dois anos programando em Javascript.
        Como experiência na minha jornada, ganhei dois hackathons como Dev Front-end e possuo habilidades como Back-end em projetos próprios.
      </h5>
      <div className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100" style={{marginLeft:'-1.5rem', marginRight:'-1.5rem'}}>
        <h6 className="my-3 text-xl font-bold tracking-wide"> Minha bagagem</h6>
        <div className="grid gap-6 lg:grid-cols-2">
          {
            services.map(service => (
              <div className="bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1"
              key={service.title}>
                <ServiceCard service={service}/>
              </div>
              ))
          }
        </div>
      </div>
    </div>
  )
}

export default index

// export const getServerSideProps:GetServerSideProps = async (context:GetServerSidePropsContext)=>{
//   //calculation

//   const res = await fetch('http://localhost:3000/api/services')
//   const data = await res.json()
//   console.log("SERVER", services)

//   return {
//     props:{
//       services:data.services,
//     },
//   }
// }
// run build
// export const getStaticProps:GetStaticProps = async (context:GetStaticPropsContext)=>{
//   // calculation

//   const res = await fetch('http://localhost:3000/api/services')
//   const data = await res.json()
//   console.log("SERVER", services)

//   return {
//     props:{
//       services: data.services,
//     },
//   }
// }
