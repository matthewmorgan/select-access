import React, {Component, PropTypes} from "react";


export default class SelectWidget extends Component {
  render() {
    const {id, containerClass, ariaLabel, value, onChange, options} = this.props;

    return (
        <select
            id={id}
            className={containerClass}
            onChange={onChange}
            value={value}
            aria-label={ariaLabel}
            role="button"
        >
          {mapToElements(options)}
        </select>
    );
  }
}

function mapToElements(options) {
  return options.map(el => (<option key={el.value} value={el.value}>{el.label}</option>));
}

SelectWidget.propTypes = {
  id:             PropTypes.string.isRequired,
  ariaLabel:      PropTypes.string.isRequired,
  containerClass: PropTypes.string.isRequired,
  options:        PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  value:          PropTypes.string.isRequired,
  onChange:       PropTypes.func.isRequired
};