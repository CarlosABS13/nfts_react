import Review from './components/review';
import './App.css';
import Nfts from './components/nfts';
import './stylesheets/nfts.css'

function App() {
  return (
    <div className="App">
      <Review 
      imagen="adam.png"
      nombre="Jaimito Ezquibel"
      rango="Director General"
      >

      </Review>
      <Review 
      imagen="george.jfif"
      nombre="Solomeo Paredes"
      rango="Director de Marketing"
      >

      </Review>
      <Review 
      imagen="cena.jpg"
      nombre="Jhon cena cocena en la piscena de la vecena"
      rango="Ejecutivo"
      >

      </Review>
      <div className='row'> 
      <Nfts 
      imagen3="imagen1.jpg"
      nombre="Jules Wyvern"
      reloj="1 day left"
      precio="2,1 ETH"
      texto="Monkey Angel."
      equilibrio="Desequilibrio #7777"
      >
        
      </Nfts>
      <Nfts imagen3="imagen2.jpg"
      nombre="Kiriku"
      reloj="1 hours left"
      precio="20 ETH"
      texto="Simplemente Kiriku."
      equilibrio="El famosisimo kiriku #9743"
      >
        
      </Nfts>
      <Nfts imagen3="imagen3.webp"
      nombre="Alfonso Lopez"
      reloj="6 hour left"
      precio="5,4 ETH"
      texto="Perdonar es bueno, pero es mejor vengarse, por eso hay una pelicula que se llama los vengadores y no los perdonadores."
      equilibrio="Perdonadores #3768"
      >
        
      </Nfts>
      </div>
    </div>
  );
}

export default App;


