import { Grid } from "@mui/material";

export default function Footer() {
  return (
    <Grid container sx={{backgroundColor: "#f9f9fa", marginTop: "40px"}}>
      <Grid item xs={2} />
      <Grid item container direction="column" xs={10}>
        <div className="footer-details-wrapper">
          <div><b>Address:</b> 31000 Solon Solon Oh, 44139-3467</div>
          <div><b>Website:</b> https://www.trans-sbq.com</div>
          <div><b>Email:</b> sales@trans-sbq.com</div>
          <div><b>Phone:</b> 330-622-1989</div>
        </div>
      </Grid>
    </Grid>
  );
}
