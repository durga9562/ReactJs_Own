import React from 'react'
import { TableCell } from '@mui/material';
//import TableHead from '@material-ui/core'
import { TableHead } from '@mui/material';
import { TableRow } from '@mui/material';
import { TableSortLabel } from '@mui/material';

function TableHeader() {
    return (
        <div>
<TableHead>
    <TableRow>
        <TableCell key="name">
            <TableSortLabel
            active={"name" === "name"}
            direction="asc"
            >
Name
            </TableSortLabel>
        </TableCell>



        <TableCell key="age">
            <TableSortLabel
            active={"age" === "age"}
            direction="desc"
            >
Age
            </TableSortLabel>
        </TableCell>
    </TableRow>
</TableHead>
        </div>
    )
}

export default TableHeader
