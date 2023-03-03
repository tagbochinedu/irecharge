import React from "react";
import { NavLink } from "react-router-dom";

import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#D24829",
        marginBottom: "5px",
        width: "100%",
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontSize: "2xl",
            fontWeight: "bolder",
          }}
        >
          <NavLink to="/">Hotel Ranking </NavLink>
        </Typography>

        <nav>
          <NavLink
            to="/add-hotel"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-md md:text-xl text-white transition-all ease-in-out duration-500"
                : "text-md md:text-xl text-white hover:font-semibold transition-all ease-in-out duration-500"
            }
          >
            Add Hotel
          </NavLink>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
