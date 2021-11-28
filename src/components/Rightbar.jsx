import {
  Avatar,
  Container,
  Divider,
  ImageList,
  ImageListItem,
  Link,
  Typography,
} from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";
import { makeStyles } from "@material-ui/styles";

import image from "../assets/user.jpg";
import image1 from "../assets/blog-image-1.jpg";
import image2 from "../assets/blog-image-2.jpg";
import image3 from "../assets/blog-image-3.jpg";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    position: "sticky",
    top: 0,
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: "#555",
  },
  link: {
    marginRight: theme.spacing(2),
    color: "#555",
    fontSize: 16,
  },
}));

const Rightbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography className={classes.title} gutterBottom>
        Online Friends
      </Typography>
      <AvatarGroup max={5} style={{ marginBottom: 20 }}>
        <Avatar src={image} alt="micha worku"></Avatar>
        <Avatar src={image} alt="micha worku"></Avatar>
        <Avatar src="" alt="micha worku"></Avatar>
        <Avatar src={image} alt="micha worku"></Avatar>
        <Avatar src={image} alt="micha worku"></Avatar>
        <Avatar src={image} alt="micha worku"></Avatar>
        <Avatar src={image} alt="micha worku"></Avatar>
      </AvatarGroup>
      <Typography className={classes.title} gutterBottom>
        Gallery
      </Typography>
      <ImageList rowHeight={100} style={{ marginBottom: 20 }}>
        <ImageListItem>
          <img src={image1} alt="" />
        </ImageListItem>
        <ImageListItem>
          <img src={image2} alt="" />
        </ImageListItem>
        <ImageListItem>
          <img src={image3} alt="" />
        </ImageListItem>
        <ImageListItem>
          <img src={image1} alt="" />
        </ImageListItem>
        <ImageListItem>
          <img src={image2} alt="" />
        </ImageListItem>
        <ImageListItem>
          <img src={image3} alt="" />
        </ImageListItem>
      </ImageList>
      <Typography className={classes.title} gutterBottom>
        Categories
      </Typography>
      <Link href="#" className={classes.link} variant="body2">
        Sport
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Food
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Music
      </Link>
      <Divider flexItem style={{ marginBottom: 5 }} />
      <Link href="#" className={classes.link} variant="body2">
        Movies
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Science
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Life
      </Link>
    </Container>
  );
};

export default Rightbar;
