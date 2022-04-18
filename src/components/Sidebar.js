import React,{ useContext, useRef } from 'react';
import { WeatherContext } from '../context/weatherContext';

const Sidebar = (props) => {

	const {setCountry, locationList, setlocationList } = useContext(WeatherContext);
	const refContry = useRef(null);

	const handleSubmit = (e) =>{
		e.preventDefault();	

		if(refContry.current.value === ''){
			alert('Fill in the input field');
		}else{
			setCountry(refContry.current.value);
			locationAdd(refContry.current.value.toLowerCase());
			refContry.current.value = '';
			props.setSidebarToggle(false)
			
		}	
	};
	
		
	const locationAdd = (item) =>{
		const addedItem = locationList.find((e)=> e === item);
		if(!addedItem){
			setlocationList([...locationList,item]);
		}
	};

	const historyCountry = (item) =>{
		setCountry(item);
		props.setSidebarToggle(false)
	};

	const removeList = ()=>{
		setlocationList([]);
	};

	return (
		<div className="sidebar">
			<div className="sidebar__wrapper">
				<button className="sidebar__close-btn" onClick={()=>props.setSidebarToggle(false)}><i className='bx bx-x'></i></button>
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
							locationList.length > 0 && (
								locationList.map((item,index)=>{
									return (
										<div className="sidebar__country-item" key={index} onClick={()=>historyCountry(item)}>
											<span>{item}</span>
										</div>
									)
								})
							)
						}
					</div>
				</div>
				{
					locationList.length > 0 && (
						<button className="btn-search" style={{ alignSelf:'flex-end' }} onClick={removeList}>Remove List</button>
					)
				}
			</div>
		</div>
	);
};

export default Sidebar;
