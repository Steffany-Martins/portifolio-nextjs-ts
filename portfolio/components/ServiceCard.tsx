import {FunctionComponent} from 'react';
import {IService, Skill} from '../type';


const ServiceCard:FunctionComponent<{service:IService}> = ({service:{Icon, about, title}}) => {
  const createMarkup = () => {
    return {
      __html:about,
    }
  }
  return (
    <div className="flex items-center p-2 space-x-4 ">
    <Icon className="w-12 h-12 text-green"/>
    <div>
      <div>
        <h4 className="font-bold">{title}</h4>
        <p dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
    </div>
  )
}

export default ServiceCard