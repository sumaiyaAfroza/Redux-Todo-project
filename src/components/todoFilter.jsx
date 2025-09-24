import React from 'react'
import {CheckCircle, Clock, List} from "lucide-react";

export const TodoFilter = ({states, currentfilter}) => {
  const filter = [
    {key: 'all' , label:'All' , icon: List, count:states.total},
    {key: 'active' , label:'Active' , icon: Clock, count:states.active},
    {key: 'completed' , label:'Completed' , icon: CheckCircle, count:states.completed}
  ]


  return (
    <div className='flex items-center justify-center'>
      <div className='inline-flex bg-gray-200'>
        {
          filter.map(({key, label, icon: Icon, count}) => {
            return (
              <button className={`flex items-center gap-2 px-2 py-2 rounded-md text-sm font-medium transition-all 
              duration-200 ${currentfilter === key ? 'bg-white text-gray-800 shadow-md' : 'text-gray-700 hover:text-gray-800 hover:bg-gray-300'}`} key={key}>
                <Icon size={16} />
                <span>{label}</span>
                <span>{count}</span>
              </button>
            )
          })
        }
      </div>
    </div>
  )
}