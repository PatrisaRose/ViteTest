import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import kep1 from "../kepek/slide/LimeWire AI Studio Asset.jpg"
import kep2 from '../kepek/slide/LimeWire AI Studio Asset (1).jpg';
import kep3 from '../kepek/slide/LimeWire AI Studio Asset (2).jpg';
import kep4 from '../kepek/slide/LimeWire AI Studio Asset (3).jpg';
import kep5 from '../kepek/slide/LimeWire AI Studio Asset (4).jpg';
import kep6 from '../kepek/slide/LimeWire AI Studio Asset (5).jpg';
import './App.css';


function App() {

  const [kepIndex, setKepIndex] = useState(0);

  const kepLista = [
    kep1,
    kep2,
    kep3,
    kep4,
    kep5,
    kep6
  ];
  
  function elore(){
    let index = kepIndex === kepLista.length - 1 ? 0 : kepIndex + 1;
    setKepIndex(index)
  }

  function hatra(){
    let index = kepIndex === 0 ? kepLista.length - 1  : kepIndex - 1;
    setKepIndex(index)
  }

  return (
    <>
      <main>
        <header>
          <h1>PBJ-Parking</h1>
        <ul>
          <li><a href=""><i className="bi bi-box-arrow-in-right"></i> Belépés</a></li>
          <li><a href=""> <i className="bi bi-person-plus-fill"></i> Regisztáció</a></li>
        </ul>
        </header>
        <nav>
          <ul>
            <li><a href=""><i className="bi bi-house-fill"></i> Főoldal</a></li>
            <li><a href=""><i className="bi bi-cart3"></i> Foglalás</a></li>
            <li><a href=""><i className="bi bi-person-lines-fill"></i> Kapcsolat</a></li>
          </ul>
        </nav>
        <article>
          <h2>Üdvözöljük!</h2>

          <div className="slideshow">
              <button onClick={hatra}>🡸</button>
              <div className="pontok">
                {kepLista.map((elem, index)=>{
                  return(
                  <div className="pont" key={index}></div>)
                })}
              </div>
              <img src={kepLista[kepIndex]} alt="kép 1..." />
              <button onClick={elore}>🡺</button>
          </div>

          <h3>Rólunk</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore maiores in distinctio exercitationem, vitae consectetur ipsa enim, omnis at nobis eos quisquam eveniet qui? Veniam enim recusandae inventore molestiae perspiciatis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates reiciendis laboriosam fugit quia non, minus soluta alias hic officiis id odit quo vel? Animi sit quaerat expedita natus consequatur earum!</p>
        </article>
      </main>
    </>
  )
}

export default App
