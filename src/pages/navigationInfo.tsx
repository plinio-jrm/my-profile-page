import { Grid } from "@mui/material";
import { NextPage } from "next";
import theme from "../utils/theme";

const NavigationInfo: NextPage = () => {
   return (
      <Grid
         sx={{
            display: "flex",
            flexDirection: "column",
            pt: theme.spacing(2)
         }}
      >
         test
      </Grid>
   );
}

export default NavigationInfo;