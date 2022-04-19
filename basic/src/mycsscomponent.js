// external css
import './hey.css'
export const Styling=()=>{
    // internal
    const wind={
        border:'4px',
        borderStyle:'dotted',
        borderColor:'blue'
    }
    return(
        <>
            <h1>Bhuvana learning React front end library</h1>
            <p style={wind}>React is demanded and easy library in java script</p>
            <img style={{border:'4px',borderStyle:'dashed',borderColor:'red',borderRadius:'30px',boxShadow:'3px 3px 3px red'}} src="/pics/infosys.png"/>
        </>
    )
}