// Code ThemedDecoration Component Here
import React from 'react';
import ReactDOM from 'react-dom';


class ThemedDecorations extends React.Component {
  render() {
      const children =
        React.Children.map(this.props.children, child => {
          return React.cloneElement(child, {
            className: this.props.theme
          })
        })
    return (
      <div className="decorations">
        {children}
      </div>
    )
  }
}

export default ThemedDecorations
