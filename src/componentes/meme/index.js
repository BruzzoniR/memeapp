import "./Meme.css"

function Meme(props) {

    const {topText,bottomText,selectMeme,fontSize,fontColor} = props;
    
    return <div className="meme" style={{backgroundImage: `url(${selectMeme})`}}>
        <div style={{
            fontSize:`${fontSize}rem`,
            color:`${fontColor}`,
        }}>
            <p className="texto-superior">{topText}</p>
            <p className="texto-infeior">{bottomText}</p>    
        </div>
    </div>
}

export default Meme