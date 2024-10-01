// import logo from './logo.svg'; - apaga
import './App.css';
import Header from './components/Header';
import SecaoCapa from './components/SecaoCapa';
import Produtos from './components/Produtos'

function App() {
  return (
    <div className="App">
      <Header/>
      <SecaoCapa/>
      <Produtos/>
    </div>
  );
}

export default App;