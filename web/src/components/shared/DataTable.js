import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import { MuiThemeProvider } from "@material-ui/core/styles";
import { createTheme } from '@material-ui/core';

export default function DataTable({rows, columns, onCellClick}){
  const muiTheme = createTheme({
    typography: {
      fontSize: 20
    },
  });
  return (
    <MuiThemeProvider theme={muiTheme}>
      <DataGrid 
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        onCellClick={(e) => onCellClick(e)}
      />
    </MuiThemeProvider>
  )
}