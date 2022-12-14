// import {
//   HashRouter as Router,
//   Route
// } from "react-router-dom";


import { BrowserRouter, Routes, Route ,HashRouter} from 'react-router-dom';



import './App.css';
import Header from './components/Header'
import NotesListPage from './pages/NotesListPage'
import NotePage from './pages/NotePage'

function App() {
  return (
    <BrowserRouter>
      <div className="container light">
        <div className="app">
          <Header />
          <Routes>
          <Route path="/" exact element={<NotesListPage/>}></Route>
          <Route path="/note/:id" element={<NotePage/>}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
