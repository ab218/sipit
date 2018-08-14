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
import RatingStar from './Rating_star.jsx';


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
    

getCategories = () => {
        for (let cats of cafe.categories) {
            return <div>
                {cats.title}
                </div>
    }
}


getCafes = () => {
    const { classes } = this.props;
    return this.props.cafesList
    .map((cafe, i) => (
        <div key={i} className={classes.actions}>
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
          />
          <CardContent>
            <RatingStar starRating={cafe.rating}/>

            <Typography component="div">
            { 
                cafe.categories.map((sub, subindex) =>
                    <span key={subindex}>{sub.title},&nbsp;</span>)
            }
            </Typography>
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