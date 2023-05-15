import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface ServiceCardProps {
  serviceName: string;
  showFooter: boolean;
  className?: string;
}

export default function ServiceCard({
  serviceName,
  showFooter,
  className,
}: ServiceCardProps) {
  return (
    <Card
      className={className}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        minWidth: 265,
        height: 250,
        boxShadow: "0px 10px 30px rgba(178, 178, 179, 0.15)",
        borderRadius: "10px",
        border: "1px dotted black",
      }}
    >
      <CardContent>
        <Typography sx={{ fontFamily: "sans-serif", fontWeight: 700 }}>
          {serviceName}
        </Typography>
      </CardContent>
      {showFooter && (
        <div
          style={{ backgroundColor: "#2C2D3C", height: "10px", width: "100%" }}
        ></div>
      )}
    </Card>
  );
}
