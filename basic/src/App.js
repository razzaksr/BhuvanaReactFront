import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Button from '@mui/material/Button';
import SailingRoundedIcon from '@mui/icons-material/SailingRounded';
export const App=()=>{
    return(
        <>
            <button className="btn btn-outline-primary">Button</button>
            <Button variant="outlined" color="error">Hai there!</Button>
            <Button variant="contained" color="primary">
                <SailingRoundedIcon/>
            </Button>
        </>
    )
}