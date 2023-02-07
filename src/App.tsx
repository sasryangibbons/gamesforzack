import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';

import Letters from './components/Letters';
import NumbersInOrder from './components/NumbersInOrder';
import RandomNumbers from './components/RandomNumbers';
import Words from './components/Words';

function App() {

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<p>Please select a game listed above.</p>} />
        <Route path='/random-numbers' element={<RandomNumbers />} />
        <Route path='/numbers-in-order' element={<NumbersInOrder />} />
        <Route path='/abc' element={<Letters />} />
        <Route path='/words' element={<Words />} />
      </Routes>
    </Layout>
  )
}

export default App;





