import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Container,
  Box,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import logoIcon from "../assets/frontity-logo.svg";

/**
 * Navigation Component
 *
 * It renders the navigation links
 */

/**
 * One level menu (no child menus)
 */
// const Nav = ({ state }) => {
//   const items = state.source.get(`/menu/${state.theme.menuUrl}/`).items;
//   // console.log('ITEMS:',items)
//   return (
//     <NavContainer>
//       {items.map((item) => {
//         return (
//           <NavItem key={item.ID}>
//             <Link link={item.url}>{item.title}</Link>
//           </NavItem>
//         );
//       })}
//     </NavContainer>
//   );
// };

/**
 * Two level menu (with one level of child menus)
 */
const Nav = ({ state }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const items = state.source.get(`/menu/${state.theme.menuUrl}/`).items;
  // console.log('ITEMS:',items)
  return (
    <>
      {/* <NavContainer>
        {items.map((item) => {
          if (!item.child_items) {
            return (
              <NavItem key={item.ID}>
                <Link link={item.url}>{item.title}</Link>
              </NavItem>
            );
          } else {
            const childItems = item.child_items;
            return (
              <NavItemWithChild key={item.ID}>
                <NavItem>
                  <Link link={item.url}>{item.title}</Link>
                </NavItem>
                <ChildMenu>
                  {childItems.map((childItem) => {
                    return (
                      <NavItem key={childItem.ID}>
                        <Link link={childItem.url}>{childItem.title}</Link>
                      </NavItem>
                    );
                  })}
                </ChildMenu>
              </NavItemWithChild>
            );
          }
        })}
      </NavContainer> */}

      {/* <div className={classes.root}>
        <AppBar>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {items.map((item) => (
                <MenuItem key={item.ID} onClick={handleClose}>
                  <Link link={item.url}>{item.title}</Link>
                </MenuItem>
              ))}
            </Menu>
            <Typography variant="h6" className={classes.title}>
              <StyledLink link="/">
                <Title>{state.frontity.title}</Title>
              </StyledLink>
            </Typography>
            <Button color="inherit" className={classes.donateButton}>
              Donate
            </Button>
          </Toolbar>
        </AppBar>
      </div> */}

      <AppBar>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <StyledLink link="/">
              <img
                src={logoIcon}
                sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
              />
            </StyledLink>
            {/* <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              {state.frontity.title}
            </Typography> */}

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                justifyContent: "flex-end",
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                  float: 0,
                }}
                className="hello-ab"
              >
                {items.map((item) => (
                  <MenuItem key={item.ID} onClick={handleCloseNavMenu}>
                    <Link link={item.url}>{item.title}</Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Display menu items as buttons for larger screens */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
              }}
            >
              {items.map((item) => (
                <Button
                  key={item.ID}
                  component={Link}
                  link={item.url}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {item.title}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default connect(Nav);

const NavContainer = styled.nav`
  list-style: none;
  display: flex;
  max-width: 100%;
  box-sizing: border-box;
  padding: 0 24px;
  margin: 0;
  /* overflow-x: auto; */
  overflow: hidden;

  @media screen and (max-width: 560px) {
    display: none;
  }
`;

const NavItem = styled.div`
  padding: 0;
  margin: 0 16px;
  color: #fff;
  font-size: 0.9em;
  box-sizing: border-box;
  flex-shrink: 0;

  & > a {
    display: inline-block;
    line-height: 2em;
    border-bottom: 2px solid;
    border-bottom-color: transparent;
    /* Use for semantic approach to style the current link */
    &[aria-current="page"] {
      border-bottom-color: #fff;
    }
  }
  & > a:hover {
    text-decoration: underline;
    font-weight: 700;
  }

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;

    &:after {
      content: "";
      display: inline-block;
      width: 24px;
    }
  }
`;
/**
 * Styling of nav elements
 */
const NavItemWithChild = styled.div`
  background: pink;
`;
const ChildMenu = styled.div`
  left: 0;
  background-color: lightblue;
  width: 100%;
  z-index: 1;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Title = styled.h2`
  margin: 0;
`;

// export { NavContainer, NavItem, NavItemWithChild, ChildMenu };
