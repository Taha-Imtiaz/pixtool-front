import React from 'react'
import { Fragment } from 'react'

const Review = ({ match: { params: { id } }, location,history }) => {
    // {pathname === `/review/${id}` && <Redirect to={`/review/${id}`} />}
    let {pathname} = location
    console.log(pathname,location)
    // if (pathname === `/review/${id}` ) {
    //     history.push(`/review/${id}`)
    //   }

    
    return (
        <Fragment>
            <div>
                abcd
        </div>
        
        </Fragment>

    )
}

export default Review
