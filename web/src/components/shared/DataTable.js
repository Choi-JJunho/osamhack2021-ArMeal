import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import { useHistory } from "react-router";

export default function DataTable({rows, columns}){
  const history = useHistory();
  return (
    <DataGrid 
      rows={rows}
      columns={columns}
      pageSize={11}
      rowsPerPageOptions={[10]}
      onCellClick={(e) => history.push(`/sidedish/${e.row.id}`)}
    />
  )
}