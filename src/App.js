import React,{ useContext } from 'react';
import Layout from './components/Layout';
import LoadingPage from './components/LoadingPage';
import WeatherContainer from './components/WeatherContainer';
import { WeatherContext } from './context/weatherContext';
const App = () => {
	const { data } = useContext(WeatherContext);
	return (
		<Layout>
			{
				data === null ?  <LoadingPage/>: <WeatherContainer/>
			}			
		</Layout>
	);
};

export default App;
