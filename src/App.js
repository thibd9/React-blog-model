//--========== Import du Style ==========--//
import './App.css';

//--========== Import des Composants ==========--//
import Navbar from './Components/Navbar/Navbar'

//--========== Import des Container ==========--//
import Home from './Containers/Home/Home';
import AddArticle from './Containers/AddArticle/AddArticle';
import Contact from './Containers/Contact/Contact';
import Article from './Containers/Article/Article';

//--========== Import des Routes ==========--//
import {Routes, Route} from 'react-router-dom'

function App() {

  return (

    <>

      <Navbar/>


      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/ecrire' element={<AddArticle/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/article' element={<Article/>}/>

      </Routes>


    </>
  );
}

export default App;
