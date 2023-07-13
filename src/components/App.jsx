import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";

import css from "./App.module.css"

import user from "./Profile/user.json";
import data from './Statistics/data.json';
import friends from './FriendList/friends.json';
import transactions from "./TransactionHistory/transactions.json"


export const App = () => {
  return (
    <div className={css.container}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions}/>  
      
    </div>
  );
};