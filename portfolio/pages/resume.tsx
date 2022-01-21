import { languages, tools } from "../data"
import Bar from '../components/Bar'

function resume() {
  return (
    <div className="px-6 py-2">
      <div className="grid gap-6 md:grid-cols-2">

        <div>
          <h5 className="my-3 text-2xl font-bold">*Education*</h5>
          <div>
            <h4 className="my-2 text-2xl font-bold"><i>Computer Technician</i></h4>
            <p className="font-semibold">CEFET/RJ(2017-2021)</p>
            <p className="my-3">High School and course in Computing</p>
          </div>
          <div>
            <h4 className="my-2 text-2xl font-bold"><i>Systems Analyst</i></h4>
            <p className="font-semibold">UNIGRANRIO(2021-2024)</p>
            <p className="my-3">Doing...</p>
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">*Experience*</h5>
          <div>
            <h5 className="my-2 text-2xl font-bold"><i>Estagiária</i></h5>
            <p className="font-semibold">ZEE.DOG(2021-atual)</p>
            <p className="my-3">The best initial experience!</p>
          </div>

        </div>
        
      </div>
      <div className="grid gap-6 md:grid-cols-2">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h5 className="my-3 text-2xl font-bold"> Languages & Frameworks</h5>
              <div className="my-2">
                  {
                    languages.map(language=><Bar data={language} key={language.name}/>)
                  }
              </div>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h5 className="my-3 text-2xl font-bold"> Tools & Softwares</h5>
              <div className="my-2">
                  {
                    tools.map(tool=><Bar data={tool} key={tool.name}/>)
                  }
              </div>
            </div>
          </div>
      </div>  
    </div>
  )
}

export default resume
