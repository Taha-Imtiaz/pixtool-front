import React from 'react';
import './Filter.scss';

function Filter() {

    return (
        <div className="filter">
            <div className="filter__icon">
                <i className="fas fa-filter"></i>
            </div>

            <select className="filter__dropdown" name="cars">
                <option value="" default>Filter by position</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>

            <div className="filter__arrow-icon">
                <i class="fas fa-chevron-down"></i>
            </div>
        </div>
    )
}

export default Filter
