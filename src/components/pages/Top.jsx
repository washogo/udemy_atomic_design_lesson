import React from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";

import { SecondaryButton } from '../atoms/button/SecondaryButton';
// import { UserContext } from '../../providers/UserProvider';
import { useSetRecoilState } from 'recoil';
import { UserState } from '../../store/userState';

export const Top = () => {
  const history = useHistory();
  // const { setUserInfo } = useContext(UserContext);
  const setUserInfo = useSetRecoilState(UserState);

  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    history.push("/users");
  }
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    history.push("/users");
  }
  return (
    <SContainer>
      <h1>TOPページです</h1>
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
      <br/>
      <br/>
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
    </SContainer>
  )
}

const SContainer = styled.div`
  text-align: center;
`;