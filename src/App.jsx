import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/home';
import SignIn from './components/Login';
import { AuthProvider } from './context/authContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}


export default App;
