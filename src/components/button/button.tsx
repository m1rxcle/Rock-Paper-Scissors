import React from "react"

type TButton = {
	text: string
	className?: string
	onClick?: () => void
	disabled?: boolean
}

const Button: React.FC<TButton> = ({ text, className, onClick, disabled }) => {
	return (
		<button disabled={disabled} onClick={onClick} className={className}>
			{text}
		</button>
	)
}
export default Button
