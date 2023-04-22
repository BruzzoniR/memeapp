import './App.css';
import { useState } from 'react';
import Boton from './componentes/boton';
import Footer from './componentes/footer';
import Formulario from './componentes/formulario';
import Header from './componentes/header';
import Meme from './componentes/meme';

function App() {

  const memes = [
    {
        url:"/img/memes/dodge.jpg",
        titulo:"Doge"
    },
    {
      url: "/img/memes/gato.webp",
      titulo:"Gato enojado"
    },
    {
      url:"/img/memes/fine.jpg",
      titulo:"It's fine dog"
    },
    {
      url:"/img/memes/nena.jpg",
      titulo:"niña casa ardiendo"
    },
    {
      url:"/img/memes/nene.webp",
      titulo:"niño meme"
    },
    {
      url:"/img/memes/philosoraptor.jpg",
      titulo:"Filosiraptor"
    }
];

const [topText,setTopText] = useState("")
const [bottomText,setBottomText] = useState("")
const [selectMeme,setSelectMeme] = useState("")
const [fontSize,setFontSize] = useState(2)
const [fontColor,setFontColor] = useState("#FFFFFF")

const memeCreado = document.querySelector(".meme");

  return (
    <div className="App">
      <Header />
      <Formulario 
      topText={topText} 
      bottomText={bottomText} 
      selectMeme={selectMeme} 
      fontSize={fontSize} 
      fontColor={fontColor}
      setBottomText={setBottomText}
      setTopText={setTopText}
      setSelectMeme={setSelectMeme}
      setFontColor={setFontColor}
      setFontSize={setFontSize}
      memes={memes} />

      {selectMeme!=="" && 
            <div className='sector-meme'>
            <Meme topText={topText} bottomText={bottomText} selectMeme={selectMeme} fontSize={fontSize} fontColor={fontColor} />
            <Boton titulo="Descargar" memeCreado={memeCreado} />
          </div>}

      <Footer />
    </div>
  );
}

export default App;
