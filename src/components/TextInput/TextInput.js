import React from 'react';
import PropTypes from 'prop-types';
import Label from '../Label';
import themeProvider from '../ThemeContainer';

class TextInput extends React.Component {
  createButtonStyleFromTheme = (theme) => ({
    backgroundColor: theme.backgroundColor,
    borderColor: theme.borderColor,
    color: theme.color
  });

  render() {
    let buttonStyle = (this.props.theme)?this.createButtonStyleFromTheme(this.props.theme):{};
    // let buttonStyle = (this.context.theme)?this.createButtonStyleFromTheme(this.context.theme):{};
    let { htmlId, name, label, type = "text", required = false, onChange, placeholder, value, error, children } = this.props
    return (
      <div style={{ marginBottom: 16 }}>
        <Label htmlFor={htmlId} label={label} required={required} />
        <input
          style={buttonStyle}
          id={htmlId}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={error && 'textInput__input--state-error'}
          />
        {children}
        {error && <div className="textInput__error">{error}</div>}
      </div>
    );
  }
}

TextInput.propTypes = {
  /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing. */
  htmlId: PropTypes.string.isRequired,

  /** Input name. Recommend setting this to match object's property so a single change handler can be used. */
  name: PropTypes.string.isRequired,

  /** Input label */
  label: PropTypes.string.isRequired,

  /** Input type */
  type: PropTypes.oneOf(['text', 'number', 'password']),

  /** Mark label with asterisk if set to true */
  required: PropTypes.bool,

  /** Function to call onChange */
  onChange: PropTypes.func.isRequired,

  /** Placeholder to display when empty */
  placeholder: PropTypes.string,

  /** Value */
  value: PropTypes.any,

  /** String to display when error occurs */
  error: PropTypes.string,

  /** Child component to display next to the input */
  children: PropTypes.node,
  theme: PropTypes.object
};

// TextInput.contextTypes = {
//     theme: PropTypes.object
// }

export default themeProvider(TextInput);