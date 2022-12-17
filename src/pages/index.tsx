import { Grid, Divider } from '@mui/material';
import { NextPage } from 'next'
import { Page } from '../components/Page';
import MainInfo from './mainInfo';
import NavigationInfo from './navigationInfo';

const HomePage: NextPage = () => {
  return (
    <Page>
      <Grid container>
        <Grid
          item
          xs={12}
          lg={4}
        >
          <MainInfo></MainInfo>
          <Divider orientation="vertical" flexItem variant="fullWidth" />
        </Grid>
        <Grid
          item
          xs={12}
          lg={8}
        >
          <NavigationInfo></NavigationInfo>
        </Grid>
      </Grid>
    </Page>
  );
}

export default HomePage;