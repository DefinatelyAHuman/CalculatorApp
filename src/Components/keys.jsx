function Keys({clickedbtn}){
    const keybtn=[1,2,3,4,5,6,7,8,9,0,'.','+','-','*','/','C','=']
    

    return <div className="keys">
        {keybtn.map((item, index) => (
        <button className="keybtn" key={index} onClick={clickedbtn}>
          {item}
        </button>
      ))}
    </div>


}

export default Keys;