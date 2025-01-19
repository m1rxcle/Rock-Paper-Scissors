import styles from "./header.module.css"

const Header = () => {
	return (
		<section className={styles.container}>
			<header className={styles.header_title}>
				<h1>Камень ножницы бумага</h1>
			</header>
		</section>
	)
}
export default Header
