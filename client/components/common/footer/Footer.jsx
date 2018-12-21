import React from 'react';
// import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  legal: {
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    width: '97.6%',
    borderTop: '1px solid #eee',
    padding: '15px',
    overflow: 'hidden',
    textAlign: 'center',
  },
});

const Footer = ({ classes }) => (
  <div className={classes.legal}>
    <div className="copyright">
      © 2016 - 2017
      {' '}
      <a href="javascript:void(0);">Material Design</a>
.
    </div>
  </div>
);

Footer.propTypes = {
  classes: stylePropType.isRequired,
};

export default withStyles(styles)(Footer);
