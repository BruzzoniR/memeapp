import './Boton.css'
import html2canvas from 'html2canvas';


function Boton(props) {
    const {titulo,memeCreado} = props

    function bajarMeme() {
        html2canvas(memeCreado,{
            allowTaint: true,
            useCORS: true,
        })
        .then(canvas => {
        let enlace = document.createElement('a');
        enlace.download = "Meme-from-Memeapp.png";
        enlace.href = canvas.toDataURL();
        enlace.click();
    })
    }

    return <button onClick={bajarMeme} className="boton">{titulo}</button>
}

export default Boton