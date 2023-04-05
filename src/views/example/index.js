
import { Box, Container } from '@mui/material';
import { LayoutConfig } from '../../constants';
import { EnhancedDataGrid } from '../../components';


export const Example = () => {
  return (<Box sx={LayoutConfig.defaultContainerSX}>
    <Container
      maxWidth="xl">
      <EnhancedDataGrid></EnhancedDataGrid>
    </Container>
  </Box>);
};
