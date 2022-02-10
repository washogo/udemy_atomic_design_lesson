import axios from 'axios';
import { RecoilRoot } from 'recoil';
import { UserProvider } from './providers/UserProvider';
import { Router } from './router/Router';
import './styles.css';

export const App = () => {
  const onClickUsers = () => {
    axios
    .get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res.data);
    })
    .catch((err) => console.log(err));
  };
  const onClickUser1 = () => {
    axios
    .get("https://jsonplaceholder.typicode.com/users/3").then((res) => {
      console.log(res.data);
    })
    .catch((err) => console.log(err));
  };
  return (
    <RecoilRoot>
      <UserProvider>
        <Router/>
        <button onClick={onClickUsers}>users</button>
        <button onClick={onClickUser1}>id=1のuser</button>
      </UserProvider>
    </RecoilRoot>
  );
};
