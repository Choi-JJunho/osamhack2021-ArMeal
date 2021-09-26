import React from 'react';
import styled from 'styled-components'
import DataTable from './shared/DataTable';

const Container = styled.div`
  padding: 7vh 6vw 0 6vw;
`

const TableWrapper = styled.div`
  height: 69vh;
  background-color: white;
  font-size: 18px;
`

export default function MenuComponent({rows, columns, goSpecPage}){
  return (
    <Container>
      <TableWrapper>
        <DataTable 
          rows={rows}
          columns={columns}
          onCellClick={goSpecPage}
          />
      </TableWrapper>
    </Container>
  )
}