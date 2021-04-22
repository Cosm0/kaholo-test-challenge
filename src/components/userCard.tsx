import * as React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import UserDetails from "./userDetails";

export default props => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Card onClick={handleClickOpen}>
        <CardActionArea>
          <CardHeader
            avatar={<Avatar src={props.item.picture.thumbnail} />}
            title={`${props.item.name.title} ${props.item.name.first} ${props.item.name.last}`}
            subheader={props.item.email}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.item.login.username}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <UserDetails item={props.item} open={open} setOpen={setOpen} />
    </div>
  );
};
