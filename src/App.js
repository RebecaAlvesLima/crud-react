import './App.css';
import Logo from './components/template/Logo';
import Menu from './components/template/Menu';
import Main from './components/template/Main';
import Footer from './components/template/Footer';
import CrudCarro from './components/CrudCarro/CrudCarro';

function App() {
  return (
    <div className="App">
      <Logo />
      <Menu />
      <CrudCarro />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
