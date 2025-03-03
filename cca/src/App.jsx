import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EraPage from './pages/EraPage';
import './styles/global.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/era" element={<EraPage />} />
        <Route path="/" element={<EraPage />} />
      </Routes>
    </Router>
  );
}

export default App;