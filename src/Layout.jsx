import { Grid } from '@mui/material';
import MenuInferior from './components/MenuInferior';

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <Grid container className="EspacoInferior" />
      <MenuInferior />
    </>
  );
};

export default Layout;
