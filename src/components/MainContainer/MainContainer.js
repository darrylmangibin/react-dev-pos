import React from 'react';

const MainContainer = (props) => {
  return (
    <div className="main__container">
      {props.children}
    </div>
  )
}

export default MainContainer;