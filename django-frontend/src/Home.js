import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { collecting } from './API';
import { useEffect, useState } from 'react';
export const Home=()=>{

    const[corps,setCorps]=useState([])

    const heyThere=async()=>{
        const tmp=await collecting()
        setCorps(tmp.data)
    }

    useEffect(()=>{
        heyThere()
    },[])

    return(
        <>
            <div className='container-fluid'>
                <div className='row justify-content-center'>
                    <div className='table-responsive-md'>
                        <div className='col-lg-12 col-md-9 col-sm-12 shadow p-5'>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell align='center'>Corporate Name</TableCell>
                                        <TableCell align="center">Corporate Nature</TableCell>
                                        <TableCell align="center">Corporate Opennings</TableCell>
                                        <TableCell align="center">Corporate Employees</TableCell>
                                        <TableCell align="center">Corporate Basic Salary</TableCell>
                                        <TableCell align="center">Corporate Location</TableCell>
                                        <TableCell align="center">Corporate Rating</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {corps.map((ele)=>(
                                        <TableRow>
                                            <TableCell align='center'>
                                                <a href={`/kind/${ele.org}`} className="text-decoration-none link-success">
                                                    {ele.org}
                                                </a>
                                            </TableCell>
                                            <TableCell align='center'>{ele.nature}</TableCell>
                                            <TableCell align='center'>{ele.opennings}</TableCell>
                                            <TableCell align='center'>{ele.employees}</TableCell>
                                            <TableCell align='center'>{ele.basic}</TableCell>
                                            <TableCell align='center'>{ele.place}</TableCell>
                                            <TableCell align='center'>{ele.ratings}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}