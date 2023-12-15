import { Avatar, ListItemIcon, MenuItem } from "@mui/material";
import Divider from "@mui/material/Divider";
import { red } from "@mui/material/colors";
import WorkIcon from "@mui/icons-material/Work";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
const WorkerNavMenu = ({ handleClose }) => {
  return (
    <>
      <MenuItem className="w-screen sm:w-auto" onClick={handleClose}>
        <Avatar /> My account
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <WorkIcon className="mr-3" /> My jobs
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <NotificationsNoneIcon className="mr-3" /> Notifications
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
          <AccountBoxIcon fontSize="small" />
        </ListItemIcon>
        Become a client
      </MenuItem>
    </>
  );
};

export default WorkerNavMenu;
