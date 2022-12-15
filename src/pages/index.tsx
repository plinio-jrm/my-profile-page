import { Grid, Divider } from '@mui/material';
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
        >
          <MainInfo></MainInfo>
        </Grid>
        <Divider orientation="vertical" flexItem variant="fullWidth" />
        <Grid
          item
          xs={12}
          md={8}
        >
          testiah doiahsodiash oidah siodh asid iashdiohsdaiodh i
        </Grid>
      </Grid>
    </Page>
  );
}

export default HomePage;