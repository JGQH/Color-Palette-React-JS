const Picker = params => {
    const color = params.color;
    return (
        <div className="picker-holder">
            <div className="picker-frame" style={{backgroundColor:color}} onClick={() => params.onClick(color)}></div>
            <p>{color}</p>
        </div>
    )
}

export default Picker;