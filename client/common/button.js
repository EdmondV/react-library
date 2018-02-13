import React from 'react';

const Button = ({children, ...rest}) => {
	// console.log(React.Children.count(children), 'count');
	return (
		<button {...rest}>{children}</button>
	)
}

export default Button
