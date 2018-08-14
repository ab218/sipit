import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import RatingStar from './Rating_star.jsx';


const styles = theme => ({
  card: {
    maxWidth: 400,
    marginRight: 20,
    marginBottom: 20,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'inline-box',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class CafeCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        }
    }
    
handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

getCafes = () => {
    const { classes } = this.props;
    return this.props.cafesList
    .map((cafe, i) => (
        <div className={classes.actions}>
        <Card className={classes.card}>
          <CardHeader

            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title={cafe.name}
          />
          <CardMedia
            className={classes.media}
            image={cafe.image_url}
            title="Contemplative Reptile"
          />
          <CardContent>
            <RatingStar starRating={this.props.cafesList[i].rating}/>
            <Typography component="p">
              This impressive paella is a perfect party dish and a fun meal to cook together with
              your guests.
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="Share">
              <ShareIcon />
            </IconButton>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph variant="body2">
                Method:
              </Typography>
              <Typography paragraph>
                Add rice and stir very gently to distribute. Top with artichokes and peppers, and
                cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes.
                Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into
                the rice, and cook again without stirring, until mussels have opened and rice is
                just tender, 5 to 7 minutes more. (Discard any mussels that don’t open.)
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    ))
}

  render() {
    return (
        <div>
            {this.getCafes()}
        </div>
    )
  }
}

CafeCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CafeCard);