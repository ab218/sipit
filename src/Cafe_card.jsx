import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import RatingStar from './Rating_Star.jsx';
import { Link } from "react-router-dom";


const styles = theme => ({
  card: {
    maxWidth: 300,
    minWidth: 300,
    maxHeight: 500,
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 20,
  },
  spacer: {
      marginRight: '20%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'inline-box',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class CafeCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

getCafes = () => {
    const { classes, cafesList } = this.props;
    return cafesList
    .map((cafe, i) => (
        <div key={i} className={classes.actions}>
        <Card className={classes.card}>
        <Link to={`/${cafe.id}`}>
          <CardHeader
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title={`${i + 1}. ${cafe.name}`}
          />
          </Link>
          <CardMedia
            className={classes.media}
            image={cafe.image_url}
          />
          <CardContent>
            <RatingStar starRating={cafe.rating}/>

            {/* <Typography component="ul">
            { 
                cafe.categories.map((sub, subindex) =>
                    <li key={subindex}>{sub.title}</li>)
            }
            </Typography> */}
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="Share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </div>
    ))
}

  render() {
      const { classes } = this.props
    return (
        <div className={classes.spacer}>
            {this.getCafes()}
        </div>
    )
  }
}

CafeCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CafeCard);