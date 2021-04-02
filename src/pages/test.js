import React from 'react';
import Filter from '../components/Filter/Filter';


function test() {

    let style = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#292929",
        height: "100vh"
    }

    return (
        <div className="page-wrapper" style={style}>
            {/* <svg width="227" height="193" viewBox="0 0 227 193" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" class="FolderCard__FolderIcon-sc-44xqoe-1 fLWcXw">
                <path d="M9 1h44.854a10 10 0 0 1 4.219.934l23.92 11.132a10 10 0 0 0 4.22.934H218a8 8 0 0 1 8 8v162a8 8 0 0 1-8 8H9a8 8 0 0 1-8-8V9a8 8 0 0 1 8-8z" stroke="#303247" stroke-width="2" fill="#303247" vector-effect="non-scaling-stroke"></path>
            </svg> */}
            <Filter />
        </div>
    )
}

export default test
