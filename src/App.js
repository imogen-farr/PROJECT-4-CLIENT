import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navigation/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Welcome from './components/Welcome';
import './styles/App.css';
import PetIndex from './components/PetIndex';
import AddPet from './components/AddPet';
import MyPets from './components/MyPets';
import PetView from './components/PetView';

function App() {
  return (
    <div className='App'>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/welcome' element={<Welcome />} />
          <Route path='/pets' element={<PetIndex />} />
          <Route path='/pets/add-pet' element={<AddPet />} />
          <Route path='/my-pets' element={<MyPets />} />
          <Route path='/pets/:id' element={<PetView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
