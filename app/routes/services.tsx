import type { V2_MetaFunction, LinksFunction } from "@remix-run/node";
import { Grid } from "@mui/material";

import styles from "~/styles/services.css";

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
    <>
      <Grid container sx={{ fontFamily: "sans-serif", color: "#2C2D3C", marginTop: "130px"}}>
        <Grid item xs={1} />
        <Grid item xs={6}>
          <h1 className="header-title">
            Streamline Your Shipping Operations With Our Complete Amazon
            Shipping Solution
          </h1>
          <p className="header-paragraph">
            With FBA, You Can Streamline Your Shipping Operations, Improve Your
            Order Processing Times, And Provide Your Customers With Fast And
            Reliable Delivery.
          </p>
        </Grid>
        <Grid item xs={5} />
      </Grid>
      <Grid container sx={{marginTop: "250px"}}>
        <Grid item xs={5} />
        <Grid item xs={6}>
          <h2 style={{fontFamily: "sans-serif", fontSize: "30px", color: "#2C2D3C"}}>
            By using our Trans-SBQ Platform FBA Sellers Can Take Advantage Of
            The Following Benefits:
          </h2>
          <ul style={{fontFamily: "sans-serif", fontSize: "18px", color: "#828282"}}>
            <li>
              Lower shipping cost and increase security with consolidated
              freight.
            </li>
            <li>Faster order fulfillment with streamlined flow of goods </li>
            <li>
              Ensure on-time and quality deliveries with improved delivery
              performance tracking
            </li>
            <li>
              Reduce transportation costs and improve your bottom line with our
              platform
            </li>
            <li>
              Manage your inventory more efficiently and free up capital for
              other areas of your business
            </li>
            <li>
              Real-time visibility into your shipments and purchase orders with
              our platform
            </li>
            <li>
              Reduce delays and ensure on-time delivery with consistent shipping
              schedules
            </li>
          </ul>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </>
  );
}
