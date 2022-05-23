import React from "react";
import{Link, Typography} from "@mui/material"


const Board=( )=>{
    return(
        <>
   <h1 >WELCOME TO THE DASHBOARD</h1>
   <p className="FONT">You can view your work here</p>
   <Typography>
        <Link  href="">My Account</Link>
    </Typography>
    <Typography>
        <Link href="">Work</Link>
    </Typography>
    <Typography>
        <Link href="">Setting</Link>
    </Typography>
    <Typography>
        <Link href="">Accounts</Link>
    </Typography>
   </>
    )
}

export default Board;