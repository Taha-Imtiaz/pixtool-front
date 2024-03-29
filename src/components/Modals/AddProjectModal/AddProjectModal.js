import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { addProject, getAccount } from '../../../Redux/account/accountActions';

import './AddProjectModal.scss';

import ButtonLight from '../../Button/ButtonLight';


const AddProjectModal = ({ showModal, setShowModal, modalToggler, teamId, addProject, getAccount, account }) => {
    // modal form state
    const [modalFormState, setModalFormState] = useState({
        projectName: ''
    })

    
    // Modal Back-drop Styling
    const backDropStyle = {
        opacity: showModal ? '1' : '',
        visibility: showModal ? 'visible' : '',
        overflow: showModal ? 'auto' : '',
        zIndex: showModal ? '2000' : '',
    };

    // Function to close the Modal whenever Backdrop clicked
    const closeModal = (event) => {
        const backDrop = document.querySelector(".backDrop2");
        
        const modal = document.querySelector(".modal");

        if (backDrop && event.target === backDrop && !event.target !== modal) {
            setShowModal(false);
        }
    }

    useEffect(() => {
        // Listener to close the Modal whenever Backdrop clicked
        const backDrop = document.querySelector(".backDrop2");
        backDrop.addEventListener('click', (e) => closeModal(e), false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    
    const handleModalInput = (e) => {
        let { name, value } = e.target;
        setModalFormState({
            ...modalFormState,
            [name]: value
        })
    }

    // add new project to the selected team
    const handleAddProject = (e) => {
        let data = {
            name: modalFormState.projectName
        }

        addProject(teamId, data, () => {
            modalToggler(e, teamId)
        })
    }


    return (
        <div className="modal__backDrop backDrop2" style={backDropStyle} >
            <div className="modal">
                <div className="modal__content">
                    <div className="addProjectModal">
                        <div className="addProjectModal__header">
                            <span className="addProjectModal__heading">New Project</span>
                            <span className="addProjectModal__closeBtn" onClick={modalToggler}>
                                <i className="fas fa-times"></i>
                            </span>
                        </div>
                        <div className="addProjectModal__body">
                            <div>
                                <input type="text" name="projectName" value={modalFormState.projectName} onChange={handleModalInput} className="addProjectModal__input addProjectModal__input--name" placeholder="Enter Project Name" />
                            </div>
                        </div>
                        <div className="addProjectModal__footer">
                            <ButtonLight text="Create Project" click={handleAddProject} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
var mapStateToProps = (state) => ({
    account: state.accounts && state.accounts.account,
})


var mapDispatchToProps = {
    addProject,
    getAccount
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProjectModal)
