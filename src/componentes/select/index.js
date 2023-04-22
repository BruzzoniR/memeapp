function Select(props) {
    const {memes,selectMeme,setSelectMeme} =props

    function actualizarMeme(e) {
        setSelectMeme(e.target.value)
        console.log(selectMeme)
    }

    return <select className="select" id="select" onChange={actualizarMeme}>
        <option disabled selected hidden>Elija el meme</option>
        {memes.map((meme, index) => <option key={index} value={meme.url}>{meme.titulo}</option>)}
        
    </select>

}

export default Select
