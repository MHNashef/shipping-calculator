import { Box, Grid } from "@mui/material";
import type { LinksFunction, V2_MetaFunction } from "@remix-run/node";

import styles from "~/styles/index.css";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Home" }];
};

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
};

export default function Index() {
  return (
    <Grid container>
      <Grid item xs={2}></Grid>
      <Grid item xs={8} sx={{ textAlign: "center", height: "100vh" }}>
        <Box className="text-wrapper">
          Trans-SBQ Serves Its Customers With Efficient And Quality
          Transportation And Logistics Services
        </Box>
        <Box className="btns-wrapper">
          <button id="get-quote-btn">Get A Quote</button>
          <button id="track-shipment-btn">Track A Shipment</button>
        </Box>
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
}
