import React from "react";
import { DataGrid } from '@mui/x-data-grid';

export default function DataTable({rows, columns, onCellClick}){
  return (
    <DataGrid 
      rows={rows}
      columns={columns}
      pageSize={10}
      rowsPerPageOptions={[10]}
      onCellClick={(e) => onCellClick(e)}
    />
  )
}