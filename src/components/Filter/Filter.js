import { React, useState, Fragment } from 'react';
import ButtonSmallPrimary from '../Button/ButtonSmallPrimary';
import './Filter.scss';

function Filter() {

    // State To Store The Filter Value
    const [showFilter, setShowFilter] = useState(false);

    // Function to Toggle the Filter
    const toggleFilter = () => {
        setShowFilter(!showFilter);
    }

    /* const saveFilter = (event) => {
        let filterForm = document.getElementById("filterForm");
        filterForm.submit();
        event.preventDefault();
    } */

    const onFormSubmit = (event) => {
        event.preventDefault();
        console.log("Form Submit")
    }

    return (
        <div className="filter">
            <div className="filter__head" onClick={toggleFilter}>
                <span className="filter__icon">
                    <i className="fas fa-filter"></i>
                </span>

                <span className="filter__text">Filter</span>

                <span className="filter__icon">
                    <i className="fas fa-chevron-down"></i>
                </span>
            </div>
            {showFilter ?
                <form id="filterForm" className="filter__body" onSubmit={(e)=> onFormSubmit(e)}>
                    <fieldset className="filter__group">
                        <legend className="filter__legend">Filter by Status</legend>

                        <div className="filter__options">
                            <div className="filter__items">
                                <input type="radio" name="status" id="inProgress" />
                                <label htmlFor="inProgress">In Progress</label>
                            </div>

                            <div className="filter__items">
                                <input type="radio" name="status" id="needsReview" />
                                <label htmlFor="needsReview">Needs Review</label>
                            </div>

                            <div className="filter__items">
                                <input type="radio" name="status" id="approved" />
                                <label htmlFor="approved">Approved</label>
                            </div>

                            <div className="filter__items">
                                <input type="radio" name="status" id="all" />
                                <label htmlFor="all">All</label>
                            </div>
                        </div>
                    </fieldset>

                    <div className="horizontalBreak"></div>

                    <fieldset className="filter__group">
                        <legend className="filter__legend">Filter by Date</legend>

                        <div className="filter__options">
                            <div className="filter__items">
                                {/* <label htmlFor="date">Date</label> */}
                                <input type="checkbox" className="checkbox" name="date"/>
                                <input type="date" name="date" id="date" />
                            </div>
                        </div>
                    </fieldset>

                    <div className="filter__button">
                        <ButtonSmallPrimary text="Save" type="submit"/>
                    </div>

                </form>
                :
                null
            }
        </div>
    )
}

export default Filter
