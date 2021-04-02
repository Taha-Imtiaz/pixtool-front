import { React, useState } from 'react';
import { connect } from 'react-redux';
import { getProjectAssets } from '../../Redux/project/projectActions';
import ButtonSmallPrimary from '../Button/ButtonSmallPrimary';
import './Filter.scss';

function Filter({ parentId, getProjectAssets }) {
    // State To Store The Filter Value
    const [showFilter, setShowFilter] = useState(false);

    // checkbox state
    const [checkboxState, setCheckBoxState] = useState(false)

    // state for dropdown menu options
    const [dropdownOptionValue, setDropDownOptionValue] = useState("all")

    // state for date
    const [date, setDate] = useState(new Date())

    // Function to Toggle the Filter
    const toggleFilter = () => {
        setShowFilter(!showFilter);
        // by default all is checked
        setDropDownOptionValue("all")
        setDate(new Date())
    }

    // toggle checkBox state
    const toggleCheckBoxState = () => {
        setCheckBoxState(!checkboxState)

    }
    /* const saveFilter = (event) => {
        let filterForm = document.getElementById("filterForm");
        filterForm.submit();
        event.preventDefault();
    } */
    // form submit handler
    const onFormSubmit = (event) => {
      
        event.preventDefault();
        console.log("Form Submit")
        let assetObj;
        if(checkboxState) {
           assetObj = {
                filters: {
                    status: dropdownOptionValue,
                    uploaded_at: date.toDateString()
                }
            }

        }
        else {
            // filter assets on the basis of status
         assetObj = {
            filters: {
                status: dropdownOptionValue,
            }
        }
        }
        console.log(assetObj)
        getProjectAssets(parentId, assetObj)
        //   hide filter modal
        setShowFilter(false)
    }
    // handler for changing the value of a dropdown option
    const handleChangeFilterValue = (e) => {
        console.log(e.target.value)
        setDropDownOptionValue(e.target.value)
    }
    const handleDateFilter = (e) => {
        let {name, value} = e.target
        console.log(name, value)
        setDate(new Date(value))
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
                <form id="filterForm" className="filter__body" onSubmit={(e) => onFormSubmit(e)}>
                    <fieldset className="filter__group">
                        <legend className="filter__legend">Filter by Status</legend>

                        <div className="filter__options"  >
                            <div className="filter__items" >
                                <input type="radio" name="status" id="inProgress" value="in_progress" onChange={handleChangeFilterValue} />
                                <label htmlFor="inProgress">In Progress</label>
                            </div>

                            <div className="filter__items">
                                <input type="radio" name="status" id="needsReview" value="needs_review" onChange={handleChangeFilterValue} />
                                <label htmlFor="needsReview">Needs Review</label>
                            </div>

                            <div className="filter__items" >
                                <input type="radio" name="status" id="approved" value="approved" onChange={handleChangeFilterValue} />
                                <label htmlFor="approved">Approved</label>
                            </div>

                            <div className="filter__items">
                                <input type="radio" name="status" id="all" value="all" onChange={handleChangeFilterValue} defaultChecked />
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
                                <input type="checkbox" className="checkbox" name="date" checked={checkboxState} onChange={toggleCheckBoxState} />
                                <input type="date" name="date" id="date" onChange={handleDateFilter} value={date.toISOString().split('T')[0]} />
                            </div>
                        </div>
                    </fieldset>

                    <div className="filter__button">
                        <ButtonSmallPrimary text="Save" type="submit" />
                    </div>

                </form>
                :
                null
            }
        </div>
    )
}
var mapStateToProps = (state) => ({
    parentId: state.project && state.project.parentId
})
var mapDispatchToProps = {
    getProjectAssets
}
export default connect(mapStateToProps, mapDispatchToProps)(Filter)
