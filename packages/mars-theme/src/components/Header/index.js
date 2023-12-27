import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
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
import logoIcon from "../../assets/frontity-logo.svg";
import "./style.css";

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
      <AppBar
        className="app-Bar-Main"
        style={{
          backgroundColor: "transparent",
          boxShadow: "none",
          color: "#1F1534",
          padding: "20px 0px",
        }}
      >
        <Container maxWidth="xl" className="containerMain">
          <Toolbar disableGutters>
            <Box
              sx={{
                display: "flex",
                flexGrow: 1,
                alignItems: "center",
                justifyContent: "space-between",
              }}
              className="box-one"
            >
              <StyledLink link="/">
                <img
                  src={logoIcon}
                  alt="Logo"
                  sx={{ display: { xs: "none", md: "block" }, marginRight: 1 }}
                />
              </StyledLink>
              {/* Display the menu icon only on mobile and tablet */}
              <Box
                sx={{
                  display: { xs: "flex", md: "none" },
                  justifyContent: "flex-end",
                  alignItems: "center",
                  float: 0,
                }}
              >
                <IconButton
                  // size="large"
                  size="medium"
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
                  sx={{ float: 0 }}
                  className="hello-ab"
                >
                  {items.map((item) => (
                    <MenuItem key={item.ID} onClick={handleCloseNavMenu}>
                      <Link link={item.url}>{item.title}</Link>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Box>

            {/* Display menu items as buttons for larger screens */}
            <Box
              sx={{
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

const StyledLink = styled(Link)`
  text-decoration: none;
`;
// const appBarMain = styled.appBarMain`
//   box-shadow: none !important;
//   background-color: #000;
// `;

// const containerMain = styled.containerMain`
//   display: flex;
//   justify-content: space-between;
// `;

// export { appBarMain, containerMain };
