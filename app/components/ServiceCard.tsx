import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface ServiceCardProps {
  serviceName: string;
}

export default function ServiceCard({ serviceName }: ServiceCardProps) {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        minWidth: 265,
        minHeight: 200,
        boxShadow: "0px 10px 30px rgba(178, 178, 179, 0.15)",
        borderRadius: "10px",
      }}
    >
      <CardContent>
        <Typography sx={{fontFamily: "sans-serif", fontWeight: 700}}>{serviceName}</Typography>
      </CardContent>
    </Card>
  );
}
