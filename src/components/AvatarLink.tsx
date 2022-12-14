import { Avatar, SvgIcon, Tooltip } from "@mui/material"
import theme from "../utils/theme";

export interface NetworkLink {
   name: string;
   viewbox: string;
   path: string;
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
            <SvgIcon viewBox={props.viewbox}><path d={props.path} /></SvgIcon>
         </Avatar>
      </Tooltip>
   );
}