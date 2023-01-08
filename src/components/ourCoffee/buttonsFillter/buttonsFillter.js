const ButtonsFillter= (props) =>{
	const buttonsData=[
		{name: 'Brazil',label:'Brazil'},
		{name: 'Kenya',label:'Kenya'},
		{name: 'Columbia',label:'Columbia'},
	];
	const buttonk = this.buttonsData.map(({name,label})=>{
		const active = this.props.filter===name;
		return(
			<button type="button" className="filter-buttons__button" key={name+label} onClick={()=>this.props.onFilterSelect(name)} >{label}</button>
		)
		})

	return {buttonk};
}

export default ButtonsFillter;