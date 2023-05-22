import { Box, Button, Grid } from "@mui/material";
import type { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import ChatBubbleIcon from "@mui/icons-material/ChatBubbleOutline";

import styles from "~/styles/index.css";
import styled from "@emotion/styled";
import ServiceCard from "~/components/ServiceCard";
import CallToActionBtn from "~/components/CallToActionBtn";
import actionBtnStyles from "~/styles/CallToActionBtn.css";
import { Link } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [{ title: "SBQ - Home" }];
};

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: "stylesheet",
      href: actionBtnStyles,
    },
  ];
};

const TalkToUsBtn = styled(Button)({
  color: "#fff",
  backgroundColor: "#2c2d3c",
  borderStyle: "none",
  borderRadius: "70px",
  fontFamily: "sans-serif",
  textTransform: "capitalize",
  width: "150px",
  height: "40px",
});

export default function Index() {
  return (
    <>
      <Grid container sx={{ height: "700px" }}>
        <Grid item xs={2}></Grid>
        <Grid item xs={8} sx={{ textAlign: "center" }}>
          <Box className="text-wrapper">
            Trans-SBQ Serves Its Customers With Efficient And Quality
            Transportation And Logistics Services
          </Box>
          <Box className="btns-wrapper">
            <Link to="/services">
              <button id="get-quote-btn">Get A Quote</button>
            </Link>
            <button id="track-shipment-btn">Track A Shipment</button>
          </Box>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
      {/* Why Choose Us section */}
      <Grid container>
        <Grid item xs={1} />
        <Grid item xs={3}>
          <h2 className="why-choose-us">
            <span>Why</span> Choose Us?
          </h2>
        </Grid>
        <Grid item xs={6}>
          <ol className="reasons-list">
            <li>
              Safety
              <p>
                From miles per hour to securing the load, we always focus on
                safety FIRST.
              </p>
            </li>
            <li>
              Environment
              <p>
                We strive for eco-friendly cargo transport through ongoing
                operational improvements.
              </p>
            </li>
            <li>
              Reinvestment and Growth
              <p>
                We promise to keep growing through debt-free expansion of our
                fleet and hiring expert drivers.
              </p>
            </li>
            <li>
              Servant Leadership
              <p>
                Our management leads by doing, getting involved, and taking
                charge of the team.
              </p>
            </li>
            <li>
              Grit and Gusto
              <p>Our management team leads by working alongside employees.</p>
            </li>
            <li>
              Customer Service
              <p>
                We recruit tenacious talent with spunk, perseverance, and
                strength of character to build our team.
              </p>
            </li>
          </ol>
        </Grid>
        <Grid item xs={2}>
          <TalkToUsBtn startIcon={<ChatBubbleIcon />}>talk to us</TalkToUsBtn>
        </Grid>
      </Grid>
      <hr />
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <h2 className="for-your-business">
            <span>For</span> Your Business
          </h2>
        </Grid>
        <Grid item>
          <p className="your-bussines-paragraph">
            Trans-SBQ is a rapidly growing organization focused on
            transportation and logistics. We believe the possibilities are
            endless. Trans-SBQ currently specializes in hauling steel bars,
            billets and coils with the capacity to haul other cargo across the
            country.
          </p>
        </Grid>
        <Grid item>
          <CallToActionBtn btnText="Get Started" />
        </Grid>
      </Grid>
      <hr />
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <h2>
            <span>Explore Our</span> Services
          </h2>
        </Grid>
        <Grid item>
          <Box className="services-cards-wrapper">
            <ServiceCard serviceName="Service (A)" showFooter={false} />
            <ServiceCard serviceName="Service (B)" showFooter={false} />
            <ServiceCard serviceName="Service (C)" showFooter={false} />
            <ServiceCard serviceName="Service (D)" showFooter={false} />
          </Box>
        </Grid>
        <Grid item>
          <CallToActionBtn btnText="Explore More" />
        </Grid>
      </Grid>
      <hr />
      <Grid container>
        <Grid item xs={1} />
        <Grid item container direction="column" xs={4}>
          <Grid item>
            <h2>
              <span>Customers Say About</span> Trans-SBQ
            </h2>
          </Grid>
          <Grid item>
            <CallToActionBtn btnText="All Testimonials" />
          </Grid>
        </Grid>
        <Grid item container xs={7} className="testimonials-grid-container">
          <ServiceCard
            serviceName="Customer Name"
            showFooter={true}
            className="testimonial-card"
          />
          <ServiceCard
            serviceName="Customer Name"
            showFooter={true}
            className="testimonial-card"
          />
        </Grid>
      </Grid>
      <hr />
      <Grid container>
        <Grid item xs={1} />
        <Grid item container direction="column" xs={7}>
          <div className="questions-wrapper">
            <div>
              Question (A)
              <span>&#43;</span>
            </div>
            <div>
              Question (B)
              <span>&#43;</span>
            </div>
            <div>
              Question (C)
              <span>&#43;</span>
            </div>
          </div>
        </Grid>
        <Grid item container direction="column" xs={4}>
          <Grid item>
            <h2>
              <span>Getting Started With</span> Trans-SBQ
            </h2>
          </Grid>
          <Grid item>
            <CallToActionBtn btnText="Ask Us" />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
