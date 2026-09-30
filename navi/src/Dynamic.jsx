import React from 'react'
import { useParams } from 'react-router-dom'

const Dynamic = () => {
        const {id} = useParams();

  return (
    <div>
      the is ids{id}
    </div>
 
)
}

export default Dynamic
