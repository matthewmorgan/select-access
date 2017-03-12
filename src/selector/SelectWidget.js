import React, {Component, PropTypes} from "react";
import selectorSkin from './dropdown.png';


// the style info could be imported from an external file

const SELECTOR_STYLES = {
  'WebkitAppearance': 'none',
  'padding': '5px 10px 5px 10px',
  'fontSize': '14px',
  'width': '200px',
  'height': '40px',
  'overflow': 'hidden',
  'background': `url(${selectorSkin}) no-repeat right #FFFFFF`,
  'border': '1px solid #eaeaea',
  'borderRadius': '0'
};

console.log(selectorSkin);

export default class SelectWidget extends Component {
  render() {
    const {id, containerClass, ariaLabel, value, onChange, options} = this.props;

    return (
        <select
            id={id}
            style={SELECTOR_STYLES}
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