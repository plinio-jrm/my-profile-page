import { Avatar, SvgIcon, Tooltip } from "@mui/material"
import theme from "../utils/theme";

export interface SvgProps {
   viewbox: string;
   path: string;
}

export interface NetworkLink {
   name: string;
   svg: SvgProps;
}

export type AvatarLinkProps = NetworkLink;

export const AvatarLink = (props: AvatarLinkProps) => {
   function getAvatarLinkSize() {
      return theme.spacing(4);
   }

   return (
      <Tooltip title={props.name} arrow>
         <Avatar
            alt={props.name}
            sx={{
               bgcolor: '#fff',
               width: getAvatarLinkSize(),
               height: getAvatarLinkSize()
            }}>
            <SvgIcon viewBox={props.svg.viewbox}><path d={props.svg.path} /></SvgIcon>
         </Avatar>
      </Tooltip>
   );
}