import { Grid } from '@mui/material';
import { NextPage } from 'next'
import { Page } from '../components/Page';
import MainInfo from './mainInfo';



const HomePage: NextPage = () => {
  return (
    <Page>
      <Grid container>
        <Grid
          item
          xs={12}
          md={4}
          sx={{ border:'solid 1px black' }}
        >
          <MainInfo></MainInfo>
        </Grid>
      </Grid>
    </Page>
  );
}

export default HomePage;