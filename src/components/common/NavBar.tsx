import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { primaryColor } from "../../constants/colors";
import { ROUTER } from "../../constants/routers";

const NavBar = () => {
  const navigate = useNavigate();

  const drawerWidth = 240;
  const navItems = [
    { item: "Home", path: ROUTER.ROOT.path },
    { item: "About", path: ROUTER.ABOUT.path },
    { item: "Experience", path: ROUTER.WORK_EXPERIENCE.path },
    { item: "Resume", path: ROUTER.RESUME.path },
  ];

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", backgroundColor: "black", height: "100%" }}>
      <Typography variant="h4" sx={{ my: 2, color: primaryColor }}>
        Ss
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, i) => (
          <ListItem key={i} disablePadding>
            <ListItemButton
              sx={{
                textAlign: "center",
              }}
              onClick={() => {
                navigate(item.path);
              }}
            >
              <ListItemText primary={item?.item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window.document.body : undefined;

  return (
    <Box>
      <AppBar
        elevation={0}
        component="nav"
        style={{
          backgroundColor: "transparent",
          // opacity: "0.5",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h4"
            component="div"
            sx={{
              flexGrow: 1,
              color: primaryColor,
              display: { xs: "none", sm: "block" },
            }}
          >
            Ss
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item, i) => (
              <Button
                variant="text"
                key={i}
                onClick={() => {
                  navigate(item.path);
                }}
                sx={{
                  color: "#fff",
                  textDecoration: "none",
                  transition: "text-decoration 0.6s ease",
                  "&:hover": {
                    color: primaryColor,
                  },
                }}
              >
                {item?.item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default NavBar;
