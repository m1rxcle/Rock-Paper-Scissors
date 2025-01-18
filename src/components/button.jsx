const Button = ({ text, className, onClick, disabled }) => {
	return (
		<button disabled={disabled} onClick={onClick} className={className}>
			{text}
		</button>
	)
}
export default Button
