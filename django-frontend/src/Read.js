import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { findingOne } from './API';
export const Read=()=>{
    const{id}=useParams()
    const[corp,setCorp]=useState({})

    const callFindOne=async()=>{
        const t = await findingOne(id)
        setCorp(t.data)
    }

    useEffect(()=>{
        callFindOne()
    },[])

    return(
        <>
            <div className='container-fluid'>
                <div className='row justify-content-center'>
                <Card className='bg-info col-lg-4 col-md-6 col-sm-12 shadow'>
                    <CardContent>
                        <Typography className='text-center text-primary' sx={{ fontSize: 30 }} gutterBottom>
                            {corp.org}
                        </Typography>
                        <Typography variant="h5" component="div">
                            {corp.nature}   {corp.employees}
                        </Typography>
                        <Typography className='text-center text-danger' >
                            {corp.opennings}
                        </Typography>
                        <Typography variant="body2">
                            {corp.place}    {corp.basic}
                        <br />
                            {corp.ratings}
                        </Typography>
                    </CardContent>
                    <CardActions className='row justify-content-around'>
                        <Button variant='outlined' className='col-3' size="medium" color='error'>Delete</Button>
                        <Button variant='outlined' className='col-3' size="medium" color='warning'>Edit</Button>
                    </CardActions>
                </Card>
                </div>
            </div>
        </>
    )
}