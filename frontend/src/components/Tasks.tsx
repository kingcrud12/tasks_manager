import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";

interface Props {
  title: string;
  text: string;
  onAdd?: () => void;
}

export default function Tasks({ title, text, onAdd }: Props) {
  return (
    <Card sx={{ width: "15%", marginLeft: 4 }}>
      <CardContent
        sx={{
          direction: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2">{text}</Typography>
      </CardContent>
      <CardActions sx={{ gap: 1 }}>
        <Typography sx={{ fontSize: 14 }} color="primary">
          Add task
        </Typography>
        <Button size="small">
          <ControlPointOutlinedIcon onClick={onAdd} />
        </Button>
      </CardActions>
    </Card>
  );
}
