import PropTypes from 'prop-types';
import { NavLink as RouterLink } from 'react-router-dom';
// @mui
import {Box, Divider, List, ListItemText} from '@mui/material';
import {useWeb3} from "../../contexts/Web3Context";
import Iconify from "../iconify";
//
import { StyledNavItem, StyledNavItemIcon } from './styles';

// ----------------------------------------------------------------------

NavSection.propTypes = {
  data: PropTypes.array,
};

export default function NavSection({ data = [], ...other }) {
  const {data : web3Data} = useWeb3();
  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 1 }}>
        {data.map((item) => (
          <NavItem key={item.title} item={item} />
        ))}
        {web3Data.loggedIn &&
          <>
            <Divider sx={{my: 2}} />
            <StyledNavItem
              sx={{
                '&.active': {
                  color: 'text.primary',
                  bgcolor: 'action.selected',
                  fontWeight: 'fontWeightBold',
                },
              }}
              onClick={() => {
                localStorage.removeItem("address");
                window.location.reload();
              }}
            >
              <StyledNavItemIcon>
                <Iconify icon={"ic:baseline-logout"} />
              </StyledNavItemIcon>

              <ListItemText disableTypography primary={"Logout"} />

            </StyledNavItem>
          </>
        }
      </List>
    </Box>
  );
}

// ----------------------------------------------------------------------

NavItem.propTypes = {
  item: PropTypes.object,
};

function NavItem({ item }) {
  const { title, path, icon, info } = item;

  return (
    <StyledNavItem
      component={RouterLink}
      to={path}
      sx={{
        '&.active': {
          color: 'text.primary',
          bgcolor: 'action.selected',
          fontWeight: 'fontWeightBold',
        },
      }}
    >
      <StyledNavItemIcon>{icon && icon}</StyledNavItemIcon>

      <ListItemText disableTypography primary={title} />

      {info && info}
    </StyledNavItem>
  );
}
