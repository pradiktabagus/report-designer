import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Tool extends React.Component {
  state = {};

  render = () => (
    <div
      onDragStart={ e =>
        e.dataTransfer.setData(
          'tool',
          JSON.stringify({
            title: this.props.title,
            style: this.props.style,
            type: this.props.type
          })
        )
      }
      className="pl-5 hover:bg-grey-lighter p-2 bg-grey-lightest w-full text-grey-dark border-b border-grey-light text-sm outline-none"
      draggable
    >
      <FontAwesomeIcon className="text-grey-dark mr-2" icon={ this.props.icon } />{' '}
      {this.props.title}
    </div>
  );
}

Tool.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired
};

export default Tool;