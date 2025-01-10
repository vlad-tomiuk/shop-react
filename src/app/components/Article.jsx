export default function Article({ title, children }) {
	return (
		<div className="article">
			<div className="container">

				<h2 className="article__title">{title}</h2>

				<div className="page-content">
					{children}
				</div>
			</div>
		</div>
	)
}