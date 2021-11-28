import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Post from "./Post";
import image from "../assets/blog-image-1.jpg";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

const Feed = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Post image={image} title="Choose the perfect design" />
      <Post image={image} title="Simply Recipes Less Stress. More Joy" />
      <Post image={image} title="Choose the perfect design" />
      <Post image={image} title="Simply Recipes Less Stress. More Joy" />
      <Post image={image} title="Choose the perfect design" />
      <Post image={image} title="Simply Recipes Less Stress. More Joy" />
    </Container>
  );
};

export default Feed;
