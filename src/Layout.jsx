import { Grid } from '@mui/material';
import BotaoDoPanico from './components/BotaoDoPanico';
import MenuInferior from './components/MenuInferior';

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <Grid container className="EspacoInferior" />
      <BotaoDoPanico />
      <MenuInferior />
    </>
  );
};

export default Layout;
