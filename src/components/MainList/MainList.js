import React from 'react';

const MainList = () => {
  return (
    <ul className="main__lists">
      <li className="main__items">
        <span className="main__icon"><i className="fa fa-exclamation-circle"></i></span>
        Course Overview
      </li>
      <li className="main__items active">
        <span className="main__icon"><i className="fa fa-comment-o"></i></span>
        Announcements
      </li>
      <li className="main__items">
        <span className="main__icon"><i className="fa fa-map-marker"></i></span>
        Workshops
      </li>
      <li className="main__items">
        <span className="main__icon"><i className="fa fa-book"></i></span>
        Learnings
      </li>
      <li className="main__items">
        <span className="main__icon"><i className="fa fa-archive"></i></span>
        Assessments
      </li>
      <li className="main__items">
        <span className="main__icon"><i className="fa fa-file-text"></i></span>
        Resources
      </li>
    </ul>
  )
}

export default MainList;