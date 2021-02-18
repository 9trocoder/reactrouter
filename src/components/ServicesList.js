import React from 'react';

const ServicesList = (props) => {
    console.log(props)
    return (
      <>
        <div>{props.match.params.id}</div>
      </>
    );
  }
  
  export default ServicesList;