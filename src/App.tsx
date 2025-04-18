import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FeedPage from './pages/FeedPage';
import TopUsersPage from './pages/TopUsersPage';
import TrendingPostsPage from './pages/TrendingPostsPage';
import Header from './components/Shared/Header';
import Footer from './components/Shared/Footer';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={FeedPage} />
        <Route path="/top-users" component={TopUsersPage} />
        <Route path="/trending-posts" component={TrendingPostsPage} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;