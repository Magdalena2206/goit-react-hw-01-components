import user from './Profile/user.json';
import { Profile } from './Profile/Profile';

import data from './Statistics/data.json';
import { Statistics } from './Statistics/Statistics';

import friends from './FriendList/friends.json';
import { FriendList } from './FriendList/FriendList';

import transactions from './TransactionHistory/transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';


import { GlobalStyle } from './GlobalStyle';
import { Box } from './Box';

import { theme } from '../theme.jsx';
import { ThemeProvider } from "styled-components";


export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        as="main"
        px={5}
        py={3}
        width={1}
        bg="muted">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="Upload stats" stats={data} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
        <GlobalStyle />
      </Box>
    </ThemeProvider>);
};

