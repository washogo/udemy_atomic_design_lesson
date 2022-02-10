// import React, { useContext } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
// import { UserContext } from '../../providers/UserProvider';
import { UserState } from '../../store/userState';
import { SecondaryButton } from '../atoms/button/SecondaryButton';

import { SearchInput } from '../molecules/SearchInput';
import { UserCard } from '../organisms/user/UserCard';

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `ショウゴ${val}`,
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    email: "123@exmaple.com",
    phone: "090-1111-2222",
    company: {
      name: "テスト株式会社",
    },
    website: "https://google.com",
  }
})

export const Users = () => {
  // const { userInfo, setUserInfo } = useContext(UserContext);
  const [ userInfo, setUserInfo ] = useRecoilState(UserState);

  const onClickSwitch = () => setUserInfo({isAdmin: !userInfo.isAdmin})

  return (
    <SContainer>
      <h1>ユーザー一覧</h1>
      <SearchInput/>
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      <SUsersArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUsersArea>
    </SContainer>
  )
}

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUsersArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;