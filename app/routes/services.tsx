import type { V2_MetaFunction, LinksFunction } from "@remix-run/node";
import { Grid } from "@mui/material";

import styles from "~/styles/services.css"

export const meta: V2_MetaFunction = () => {
  return [{ title: "SBQ - Services" }];
};

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
};

export default function Services() {
  return (
    <Grid container sx={{ fontFamily: "sans-serif", color: "#2C2D3C" }}>
      <Grid item xs={1} />
      <Grid item xs={6}>
        <h1 className="header-title">
          Streamline Your Shipping Operations With Our Complete Amazon Shipping
          Solution
        </h1>
        <p className="header-paragraph">
          With FBA, You Can Streamline Your Shipping Operations, Improve Your
          Order Processing Times, And Provide Your Customers With Fast And
          Reliable Delivery.
        </p>
      </Grid>
      <Grid item xs={5} />
    </Grid>
  );
}
