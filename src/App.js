import {
  BrowserRouter as Router, Routes, Route, Navigate,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/Header';
import './styles/App.css';
import Home from './pages/Home';
import Details from './pages/Details';
import store from './redux/store';
import Services from './pages/Services';
import Footer from './components/Footer';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/microbizfinder" element={<Navigate to="/" />} />
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/services/:id" element={<Services />} />
          <Route path="*" element={<div>If page not found it goes here</div>} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
