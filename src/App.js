import Register from './auth/register/Register';
import Home from './components/home/Home';
import Login from './auth/login/Login';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/login' element={<Login />}  />
        <Route path='/register' element={<Register/>}  />
      </Routes>
    </div>
  );
}

export default App;