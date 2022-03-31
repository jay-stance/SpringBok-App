import React from 'react';
import { useParams } from 'react-router-dom';

const ResturantsDetail = () => {
    const {name} = useParams();

  return (
    <div>ResturantsDetail {name}</div>
  )
}

export default ResturantsDetail;