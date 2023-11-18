function Article(props) {
    return (
		<div className="border p-3">
			<img src={props.img} alt={props.title} />
			<h1>{props.title}</h1>
			<p>{props.author}</p>
			<p>{props.publication_date}</p>
			<p>{props.content}</p>
		</div>
	);
}

export default Article;