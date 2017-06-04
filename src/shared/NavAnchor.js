import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Waypoint  from 'react-waypoint';

class NavAnchor extends Component {
  constructor(props) {
    super(props);

    ['updateBrowserHistory'].forEach((fn) => { this[fn] = this[fn].bind(this); });
  }

  updateBrowserHistory() {
    if (this.props.id === undefined) { return }
    const currentPath = `/${this.props.id}`
    this.context.router.history.replace(currentPath, { scroll: false });
  }

  render() {
    return (
      <Waypoint scrollableAncestor={window} topOffset={'50%'} onEnter={this.updateBrowserHistory}>
        <div>
          {this.props.children}
        </div>
      </Waypoint>
    );
  }
}

NavAnchor.contextTypes = {
  router: PropTypes.object.isRequired
};

NavAnchor.propTypes = {
  id: PropTypes.string,
}

export default NavAnchor;
