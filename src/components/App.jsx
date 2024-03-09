import './App.css';
import { useState } from 'react';
import { fetchArticlesWithTopic } from '../articles-api.js';
import { SearchForm } from './SearchForm/SearchForm';
import { Error } from './Error/Error.jsx';
import Loader from './Loader/Loader.jsx';
import ArticleList from './ArticleList/ArticleList.jsx';

const App = () => {
	const [articles, setArticles] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const handleSearch = async topic => {
		try {
			setArticles([]);
			setError(false);
			setLoading(true);
			const data = await fetchArticlesWithTopic(topic);
			setArticles(data);
		} catch (error) {
			setError(true);
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<SearchForm onSearch={handleSearch} />
			{loading && <Loader />}
			{error && <Error />}
			{articles.length > 0 && <ArticleList items={articles} />}
		</>
	);
};

export default App;
