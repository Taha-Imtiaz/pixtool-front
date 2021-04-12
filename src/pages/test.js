import React from 'react';
import ConfirmationModal from '../components/Modals/ConfirmationModal/ConfirmationModal';

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
            <ConfirmationModal />
        </div>
    )
}

export default test
