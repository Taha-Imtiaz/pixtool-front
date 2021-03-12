import React from 'react';
import './AddProjectModal.scss';

import ButtonLight from '../../Button/ButtonLight';

const AddProjectModal = ({ showAddProjectModal, addProjectModalToggle }) => {
    const createNew = () => {}
    
    // Modal Back-drop Styling
    const backDropStyle = {
        opacity: showAddProjectModal ? '1' : '',
        visibility: showAddProjectModal ? 'visible' : '',
        overflow: showAddProjectModal ? 'auto' : '',
        zIndex: showAddProjectModal ? '2000' : '',
    };

    return (
        <div className="modal__backDrop" style={backDropStyle} >
            <div className="modal">
                <div className="modal__content">
                    <div className="addProjectModal">
                        <div className="addProjectModal__header">
                            <span className="addProjectModal__heading">New Project</span>
                            <span className="addProjectModal__closeBtn" onClick={addProjectModalToggle}>
                                <i className="fas fa-times"></i>
                            </span>
                        </div>
                        <div className="addProjectModal__body">
                            <div>
                                <input type="text" className="addProjectModal__input addProjectModal__input--name" placeholder="Enter Project Name" />
                            </div>
                        </div>
                        <div className="addProjectModal__footer">
                            <ButtonLight text="Create Project" click={createNew} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProjectModal
