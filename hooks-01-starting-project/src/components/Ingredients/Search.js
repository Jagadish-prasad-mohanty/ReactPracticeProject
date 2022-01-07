import React, { useState } from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => {
  const [filterData,setFilterData]=useState('');
  const onClickHandler= (e)=>{
    setFilterData(e.target.value)
    props.getFilter(e.target.value);
  }
  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input type="text" onChange={onClickHandler} value={filterData}/>
        </div>
      </Card>
    </section>
  );
});

export default Search;
