import Input from '../input'
import Select from '../select'
import './Formulario.css'


function Formulario(props) {

    const {topText,bottomText,setTopText,setBottomText,setFontSize,setFontColor,selectMeme,setSelectMeme,memes} = props

    return <form className="formulario">
        <div className="inputs-texto">
            <Input titulo="Texto superior" value={topText} type="text" clase="form-control" id="topText" setTopText={setTopText} />
            <Input titulo="Texto inferior" value={bottomText} type="text" clase="form-control" id="bottomText" setBottomText={setBottomText} />
        </div>

        <div className="inputs-select">
            <Select memes={memes} setSelectMeme={setSelectMeme} selectMeme={selectMeme} />
            <div className="letra-color">
                <label className="form-label">Elija el tamaño de la letra</label>
                <Input type="range" clase="form-range" min="1.5" max="4" step="0.25" id="fontSize" setFontSize={setFontSize} />
                <label className="form-label">Elija el color de la letra</label>
                <Input type="color" clase="form-control form-control-color" id="fontColor" setFontColor={setFontColor} /> 
            </div>
        </div>

    </form>
}

export default Formulario