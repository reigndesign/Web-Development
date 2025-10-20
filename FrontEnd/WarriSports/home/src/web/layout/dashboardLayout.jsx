import * as React from 'react';
import { DataGrid, gridPageCountSelector,
  useGridApiContext,
  useGridSelector, } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import MuiPagination from '@mui/material/Pagination';



function Pagination({ page, onPageChange, className }) {
  const apiRef = useGridApiContext();
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <MuiPagination
      color="primary"
      className={className}
      count={pageCount}
      page={page + 1}
      onChange={(event, newPage) => {
        onPageChange(event, newPage - 1);
      }}
    />
  );
}

export default function DashboardLayout() {

  const { loading } = useDemoData({
    dataSet: 'Users',
    rowLength: 100,
  });

  return (
    <div style={{ height: 400, width: '100%', display: 'flex', }}>
      <DataGrid rows={rows} columns={columns} loading={loading}
      checkboxSelection
      disableRowSelectionOnClick
      showToolbar 
      pagination
      slotProps={{
      basePagination: {
      material: {
        ActionsComponent: Pagination,
      },
    },
  }}
         />
    </div>
  );
}

const columns = [
  {
    field: 'id',
    headerName: 'ID',
    width: 50,
  },
  {
    field: 'typeofbet',
    headerName: 'Type Of Bet',
    display: 'flex',
    editable: true,
    width: 180,
    type: '',
  },
  {
    field: 'team',
    headerName: 'Team',
    display: 'flex',
    editable: true,
    width: 180,
    type: '',
  },
  {
    field: 'stake',
    headerName: 'Stake (₦)',
    display: 'flex',
    editable: true,
    width: 180,
    type: 'number',
  },
  {
    field: 'odd',
    headerName: 'Odd',
    display: 'flex',
    editable: true,
    width: 180,
    type: 'number',
  },
  {
    field: 'date',
    headerName: 'Date',
    display: 'flex',
    editable: true,
    width: 180,
    type: 'number',
  },
];

const rows = [
  { id: 1, typeofbet: 'Exchange', team: 'Barcelona', stake: 500, odd: 2.5, date: '10/20/2025'},
  { id: 2, typeofbet: 'P2P', team: 'Spain', stake: 1000, odd: 2.5, date: '10/20/2025'},
  { id: 3, typeofbet: 'Sportbook', team: 'Real Madrid', stake: 800, odd: 2.5, date: '10/20/2025'},
  { id: 4, typeofbet: 'P2P', team: 'Evarton', stake: 5000, odd: 2.5, date: '10/20/2025'},
  { id: 5, typeofbet: 'Exchange', team: 'Arsenal', stake: 70000, odd: 2.5, date: '10/20/2025'},
  { id: 6, typeofbet: 'Spoortbook', team: 'Manchester Utd', stake: 650, odd: 2.5, date: '10/20/2025'},
  
];