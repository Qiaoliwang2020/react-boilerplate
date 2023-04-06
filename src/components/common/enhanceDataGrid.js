import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { DataGrid,GridToolbar } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';


export default function EnhancedDataGrid(props) {
  const [columns, setColumns] = useState([]);
  useEffect(()=>{
    let columns =Object.keys(props.dataRow[0])?.map((key)=>{
      return {
        field: key,
        headerName: key.replaceAll("_", ""),
        description: '',
        sortable: true,
        width: 160,
      };
    });
    setColumns(columns);
  },[props.dataRow]);

  return (
    <Box sx={{ height: 615, width: '100%' }}>
      <Typography variant='h5' className='table-title'>{props?.title ?? ''}</Typography>  
      <DataGrid
        loading={props?.loading ?? false}
        isCellEditable={() =>props?.isCellEditable ?? false}
        components={{ Toolbar: props?.isToolBarOn ? GridToolbar : '' }}
        getRowId={(row) => row?._id}
        rows={props?.dataRow}
        columns={columns}
        pageSize={props?.pageSize ?? 5}
        rowsPerPageOptions={props?.rowsPerPageOptions ?? [5]}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
EnhancedDataGrid.propTypes ={
  title:PropTypes.string,
  loading:PropTypes.bool,
  isCellEditable:PropTypes.bool,
  isToolBarOn:PropTypes.bool,
  dataRow:PropTypes.array.isRequired,
  pageSize:PropTypes.number,
  rowsPerPageOptions:PropTypes.array
};