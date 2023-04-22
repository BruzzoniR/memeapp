function Input(props) {
    const {titulo, type ,clase, min,max,step,value,id,setTopText,setBottomText,setFontSize,setFontColor} = props
    
    function elegirFuncion(e) {
        e.preventDefault();
        console.log(e.target.value)
        switch (e.target.id) {
            case "topText":
                setTopText(e.target.value);
                break;
            case "bottomText":
                setBottomText(e.target.value);
                break;
            case "fontSize":
                setFontSize(e.target.value);
                break;
            case "fontColor":
                setFontColor(e.target.value);
                break;
            default:
                break;
        }
    }

    return <div className="input-group mb-3">
        <input onChange={elegirFuncion} type={type} className={clase} placeholder={titulo} min={min} max={max} step={step} value={value} id={id}/>
    </div>
}

export default Input