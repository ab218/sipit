import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Link } from 'react-router-dom';
import RatingStar from './RatingStar';

const styles = () => ({
  card: {
    display: 'grid',
    gridTemplateRows: '30% 30% 30% 10%',
    maxWidth: 300,
    minWidth: 300,
    maxHeight: 450,
    paddingRight: 20,
    paddingLeft: 20,
    marginBottom: 20,
  },
  spacer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr));',
    paddingLeft: 20,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'inline-flex',
  },
  buttons: {
    position: 'relative',
    marginTop: '100%',
  },

});

class CafeCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  getCafes = () => {
    const { classes, cafesList } = this.props;
    return cafesList
      .map((cafe, i) => (
        <div key={cafe.id} className={classes.actions}>
          <Card className={classes.card}>
            <Link to={`/business/${cafe.id}`}>
              <CardHeader
                // action={(
                //   <IconButton>
                //     <MoreVertIcon />
                //   </IconButton>
                // )}
                title={`${i + 1}. ${cafe.name}`}
              />
            </Link>
            <CardMedia
              className={classes.media}
              image={cafe.image_url}
            />
            <CardContent>
              <span>
                <RatingStar starRating={cafe.rating} />
                <p>{`(${cafe.review_count} reviews)`}</p>
              </span>
            </CardContent>
            <CardActions disableActionSpacing>
              <IconButton aria-label="Add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="Share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        </div>
      ));
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.spacer}>
        {this.getCafes()}
      </div>

    );
  }
}

// CafeCard.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(CafeCard);
