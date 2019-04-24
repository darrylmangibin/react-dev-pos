import React from 'react';

const MainHeader = (props) => {
  return (
    <div className="main__header">
      <div className="main__icon">
        <i className={`fa ${props.icon}`}></i>
      </div>
      <div className="main__text">
        <span>{props.courseName}</span>
        <span>{props.courseDescription}</span>
      </div>
      {props.children ? props.children : null}
    </div>
  )
}

export default MainHeader;