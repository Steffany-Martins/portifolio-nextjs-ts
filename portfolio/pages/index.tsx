//import { GetServerSidePropsContext, GetStaticProps, GetStaticPropsContext } from 'next';
import {services} from '../data';
const index = () => {
  return (
    <div>
      <h5>
        Eu estou com o meu ensino médio técnico na instituição CEFET/RJ em andamento no curso
        de informática. Eu tenho oito meses de experiência em empresa/freelance e dois anos programado em Javascript.
        Ganhei dois hackathons como Dev Front-end e possuo habilidades como Back-end em projetos próprios.
      </h5>
      <div>
        <h6> Minha bagagem</h6>
        <div>
          {
            services.map(service => (
              <ServiceCard service={service}/>
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
