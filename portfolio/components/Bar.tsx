import {FunctionComponent} from 'react'
import {Skill} from '../type'

const Bar:FunctionComponent<{
  data: Skill
}> = ({data: {Icon, level, name}}) => {
  return (
    <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-dark-300 dark:bg-dark-500">
      <div className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green to-blue-600" style={{width: `${level}%`}}>
        <div className="mr-4"><Icon /></div>
        {name}
      </div>
    </div>
  )
}

export default Bar
