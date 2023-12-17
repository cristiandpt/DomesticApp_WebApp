import { Avatar, ListItemIcon, MenuItem } from "@mui/material";
import Divider from "@mui/material/Divider";
import { red } from "@mui/material/colors";
import Link from "next/link";
import WorkIcon from "@mui/icons-material/Work";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const WorkerNavMenu = ({ handleClick }) => {
  return (
    <>
      <Link href="/worker/myAccount" passHref>
        <MenuItem component="a" className="w-screen sm:w-auto" onClick={handleClick}>
          <Avatar /> My account
        </MenuItem>
      </Link>
      <Link href="/worker/myJobs" passHref>
        <MenuItem component="a" onClick={handleClick}>
          <WorkIcon className="mr-3" /> My jobs
        </MenuItem>
      </Link>
      <Link href="/worker/home" passHref>
        <MenuItem component="a" onClick={handleClick}>
          <MonetizationOnIcon className="mr-3" /> Work now
        </MenuItem>
      </Link>
      <Link href="/worker/notifications" passHref>
        <MenuItem component="a" onClick={handleClick}>
          <NotificationsNoneIcon className="mr-3" /> Notifications
        </MenuItem>
      </Link>
      <Divider />
      <Link href="/" passHref>
        <MenuItem
          className="font-bold"
          sx={{ color: red[700] }}
          onClick={handleClick}
        >
          <ListItemIcon>
            <LogoutIcon sx={{ color: red[700] }} fontSize="small" />
          </ListItemIcon>
          Log out
        </MenuItem>
      </Link>
      <Divider />
      <Link href="/welcome-client" passHref>
        <MenuItem component="a" onClick={handleClick}>
          <ListItemIcon>
            <AccountBoxIcon fontSize="small" />
          </ListItemIcon>
          Become a client
        </MenuItem>
      </Link>
    </>
  );
};

export default WorkerNavMenu;
