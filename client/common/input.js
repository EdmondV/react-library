import React from 'react'

const Input = ({ value, ...rest }) => {
	return (
		<div>
			<input value={value} { ...rest } />
		</div>
	)
}

export default Input
