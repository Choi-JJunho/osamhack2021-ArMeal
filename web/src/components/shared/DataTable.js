import React from "react";
import { DataGrid } from '@mui/x-data-grid';

export default function DataTable({rows, columns}){
  return (
    <DataGrid 
      rows={rows}
      columns={columns}
      pageSize={11}
      rowsPerPageOptions={[10]}
    />
  )
}