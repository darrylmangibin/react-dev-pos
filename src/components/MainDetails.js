import React from 'react';
import Main from './Main/Main';
import MainContainer from './MainContainer/MainContainer';
import MainHeader from './MainHeader/MainHeader';
import MainList from './MainList/MainList';
import RightSide from './common/rightSide';
import Units from './Units/Units';

const MainDetails = (props) => {
  return (
    <Main>
      <MainContainer>
        <MainHeader 
          icon={"fa-graduation-cap"}
          courseName="BSB10115"
          courseDescription = "Certificate I in Business"
        />
        <MainList />
        <MainHeader
          icon="fa-university"
          courseName="Units"
        >
          <RightSide />
        </MainHeader>
        <Units />
      </MainContainer>
    </Main>
  )
}

export default MainDetails