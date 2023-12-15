import { Avatar, ListItemIcon, MenuItem } from "@mui/material";
import Divider from "@mui/material/Divider";
import { red } from "@mui/material/colors";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import WalletIcon from "@mui/icons-material/Wallet";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LogoutIcon from "@mui/icons-material/Logout";
import EngineeringIcon from "@mui/icons-material/Engineering";
const ClientNavMenu = ({ handleClose }) => {
  return (
    <>
      <MenuItem className="w-screen sm:w-auto" onClick={handleClose}>
        <Avatar /> My account
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <DesignServicesIcon className="mr-3" /> My services
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <WalletIcon className="mr-3" /> My wallet
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <LocationOnIcon className="mr-3" /> My addresses
      </MenuItem>
      <Divider />
      <MenuItem
        className="font-bold"
        sx={{ color: red[700] }}
        onClick={handleClose}
      >
        <ListItemIcon>
          <LogoutIcon sx={{ color: red[700] }} fontSize="small" />
        </ListItemIcon>
        Log out
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <EngineeringIcon fontSize="small" />
        </ListItemIcon>
        Become a worker
      </MenuItem>
    </>
  );
};

export default ClientNavMenu;
