import {
  BrowserRouter as Router, Routes, Route, Navigate,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/Header';
import './styles/App.css';
import Home from './pages/Home';
import Details from './pages/Details';
import Results from './pages/Results';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/microbizfinder" element={<Navigate to="/" />} />
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/results" element={<Results />} />
          <Route path="*" element={<div>If page not found it goes here</div>} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
