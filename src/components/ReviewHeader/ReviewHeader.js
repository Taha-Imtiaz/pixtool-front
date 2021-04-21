import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Logo from '../../images/logo.png'
import "./Reviewheader.scss"

const ReviewHeader = () => {
    return (
        <div className  = "review__navbar">
        <div className='sidebar__logo'>
        <img src={Logo} alt="Logo" className="logo-img"  />
    </div>
    </div>
    )
}
var mapStateToProps = (state) => ({
    projectId: state.project && state.project._id
})

export default connect(mapStateToProps)(withRouter(ReviewHeader))
