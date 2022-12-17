import { NextPage } from "next";

import { Box } from "@mui/material";
import Paper from '@mui/material/Paper';

import { Page } from "../components/Page";
import theme from "../utils/theme";

const About: NextPage = () => {
   function getParagraphStyle() {
      return {
         fontSize: '12pt',
      };
   }

   return (
      <Page>
         <Paper
            elevation={1}
            variant="elevation"
            sx={{
               padding: theme.spacing(5),
               textAlign: "justify",
               boxShadow: 5,
            }}
         >
            <Box display="flow" justifyContent="space-between" >
               <p style={getParagraphStyle()} >
                  Sou profissional de TI que dei inicio com Delphi na minha carreira e migrei para C#. Durante a carreira desenvolvi minha experiencia em Frontend com HTML, CSS, SASS, LESS, CSCC, Javascript, Jquery e Angular. Como desenvolvedor Backend obtive competencias: Entity Framework, Aspnet Boilerplate, .Net, C#. Com sólido conhecimento em MSSQL Server e C#. Aprendi a utilizar Visual Studio, Eclipse. Obtive conhecimento com OOP, em Scrum, Agile, a desenvolver com DDD, DI, SOLID e serviços Rest/Restful.
               </p>
               <p style={getParagraphStyle()}>
                  Atualmente estou estudando React e Next.js para expandir minhas possibilidades em frontend.
               </p>
               <p style={getParagraphStyle()}>
                  Após aprender C#, adquiri experiência de desenvolvimento de jogos em Unity3D, utilizando Adobe Photoshop, Aseprite, Krita. Após obter experiencia com as ferramentas da Autodesk: 3DS Max e Maya, Aprendi por conta própria, Blender! Com isso desenvolvi meu conhecimento com as linguagens Lua Script e C/C++.
               </p>
            </Box>
         </Paper>
      </Page>
   );
}

export default About;