
import { Box, Container } from '@mui/material';
import { LayoutConfig } from '../../constants';
import { EnhancedDataGrid } from '../../components';

const rows = [
  { _id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { _id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { _id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { _id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { _id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { _id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { _id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { _id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { _id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export const Example = () => {
  return (<Box sx={LayoutConfig.defaultContainerSX}>
    <Container
      maxWidth="xl">
      <EnhancedDataGrid title={'Example'} isToolBarOn={false} dataRow={rows}></EnhancedDataGrid>
    </Container>
  </Box>);
};
