import symbol from './resources/adder.png'

const Adder = params => {
    return (
        <div className="adder-holder" onClick={params.onClick}>
            <div className="adder-frame" style={{backgroundImage:`url(${symbol})`, backgroundSize:'cover'}}></div>
            <p>Add Color</p>
        </div>
    )
}

export default Adder;