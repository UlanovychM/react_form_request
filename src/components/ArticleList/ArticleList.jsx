import Article from '../Article/Article';

const ArticleList = ({ items }) => {
	return (
		<div>
			<h1>Latest articles</h1>

			<ul>
				{items.map(({ objectID, url, title }) => (
					<li key={objectID}>
						<Article url={url} title={title} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default ArticleList;
