import React,{ useContext, useEffect, useRef,useState } from 'react';
import { WeatherContext } from '../context/weatherContext';
import CountryItem from './CountryItem';


const Sidebar = () => {
	const { setSidebarToggle,setCountry } = useContext(WeatherContext);
	const refContry = useRef(null);
	
	const [locationList, setlocationList] = useState(()=>{
		const item = localStorage.getItem('list');
		return item ? JSON.parse(item) : [];
	});
		
	const locationAdd = (item) =>{
		const addedItem = locationList.find((e)=> e === item);
		if(!addedItem){
			setlocationList([...locationList,item]);
		}
	};

	const handleSubmit = (e) =>{
		if(refContry.current.value === ''){
			alert('Fill in the input field');
		}else{
			setCountry(refContry.current.value);
			locationAdd(refContry.current.value.toLowerCase());
			refContry.current.value = '';
			setTimeout(()=>{setSidebarToggle(false);},500);
			
		}	
		e.preventDefault();	
	};

	const removeList = ()=>{
		setlocationList([]);
	};

	useEffect(()=>{
		localStorage.setItem('list',JSON.stringify(locationList));
	},[locationList]);

	return (
		<div className="sidebar">
			<div className="sidebar__wrapper">
				<button className="sidebar__close-btn" onClick={()=>setSidebarToggle(false)}><i className='bx bx-x'></i></button>
				<div className="sidebar__content">
					<form className="sidebar__search" onSubmit={handleSubmit}>
						<div className="sidebar__search-input">
							<label htmlFor="search"><i className='bx bx-search-alt-2'></i></label>
							<input type="text" id="search" placeholder="search location" ref={refContry} />
						</div>
						<button type="submit" className="btn-search">Search</button>
					</form>
					<div className="sidebar__country-list">
						<h3>Most recently searched</h3>
						{
							locationList.length > 0 && locationList.map((item,index)=><CountryItem  key={index} item={item}/>)
						}
					</div>
				</div>
				{
					locationList.length > 0 && <button className="btn-search" style={{ alignSelf:'flex-end' }} onClick={removeList}>Remove List</button>
				}
			</div>
		</div>
	);
};

export default Sidebar;
