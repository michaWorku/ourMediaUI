import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(5),
  },
  media: {
    height: 250,
    [theme.breakpoints.down("sm")]: {
      height: 150,
    },
  },
}));

const Post = ({ image, title }) => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia image={image} title="My post" className={classes.media} />
          <CardContent>
            <Typography variant="h5" gutterBottom>
              {title}
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              consectetur earum est.
            </Typography>
          </CardContent>
          </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            share
          </Button>
          <Button size="small" color="primary">
            learn more
        
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Post;
