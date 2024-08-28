
import './App.css';

import UserCrudWrapper from './Usercurd/UsercrudWrapper';
import { Counter } from './counter/count';
// import { TodoList } from './TodoList/TodoList';
import {ImageCarasoul} from './ImageCarasoul';
import { UsersList } from './UserProfile/UserList';
import { UserProfile } from './UserProfile/UserProfile';
import Expromise from './promisesexample/promise';
import  FetchDataComponent from './promisesexample/FetchDataPromise';

function App() {
  return (
    <div className="App">
      <UserCrudWrapper />
      <Counter/>
      {/* <TodoList /> */}
      <ImageCarasoul />
      <UsersList />
      <UserProfile />
      <Expromise />
      <FetchDataComponent />

    </div>
  );
}

export default App;
