import { Fade } from "@mui/material";
import { Container } from "@mui/system";
import { PropsWithChildren } from "react";

export const Page = (props: PropsWithChildren) => {
   return (
      <Container sx={{ paddingTop: (theme) => theme.spacing(2) }}>
         <Fade in={true} timeout={500}>
            <div>
               {props.children}
            </div>
         </Fade>
      </Container>
   );
}