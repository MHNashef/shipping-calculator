import { Box, Grid, Toolbar, Typography } from "@mui/material";
import { useState } from "react";

import { Link } from "@remix-run/react";

export default function Navbar() {
  const [selectedTab, setSelectedTab] = useState("home");

  return (
    <Toolbar>
      <Grid
        sx={{ placeItems: "center", borderBottom: "1px solid #E0E0E0" }}
        container
      >
        <Grid item xs={2}>
          {/* to-do: replace with SBQ logo */}
          <Typography sx={{ fontSize: "18px", color: "#828282" }}>
            S<span style={{ color: "red" }}>B</span>Q
          </Typography>
        </Grid>
        <Grid item xs={7}>
          <div className="nav-tabs">
            <Link
              to="/"
              className={selectedTab === "home" ? "active" : ""}
              onClick={() => setSelectedTab("home")}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={selectedTab === "services" ? "active" : ""}
              onClick={() => setSelectedTab("services")}
            >
              Services
            </Link>
            <Link
              to="/resources"
              className={selectedTab === "resources" ? "active" : ""}
              onClick={() => setSelectedTab("resources")}
            >
              Resources
            </Link>
            <Link
              to="/customers"
              className={selectedTab === "customers" ? "active" : ""}
              onClick={() => setSelectedTab("customers")}
            >
              Customers
            </Link>
            <Link
              to="/hiring"
              className={selectedTab === "hiring" ? "active" : ""}
              onClick={() => setSelectedTab("hiring")}
            >
              Hiring
            </Link>
            <Link
              to="/about"
              className={selectedTab === "about" ? "active" : ""}
              onClick={() => setSelectedTab("about")}
            >
              About us
            </Link>
          </div>
        </Grid>
        <Grid item xs={3}>
          <Box display="flex">
            <button
              type="button"
              id="contact-us-btn"
              className="header-buttons"
            >
              Contact us
            </button>
            <button type="button" id="login-btn" className="header-buttons">
              Login
            </button>
          </Box>
        </Grid>
      </Grid>
    </Toolbar>
  );
}
