import React, { useState } from 'react';
import './AddProjectModal.scss';

import ButtonLight from '../../Button/ButtonLight';
import { connect } from 'react-redux';
import { addProject } from '../../../Redux/project/projectActions';
import { getTeams } from '../../../Redux/team/teamActions';

const AddProjectModal = ({ showAddProjectModal, addProjectModalToggle,teamId,addProject,getTeams,account, closeAddProjectModal }) => {
    // modal form state
    const [modalFormState, setModalFormState] = useState({
        projectName:''
    })
    // Modal Back-drop Styling
    const backDropStyle = {
        opacity: showAddProjectModal ? '1' : '',
        visibility: showAddProjectModal ? 'visible' : '',
        overflow: showAddProjectModal ? 'auto' : '',
        zIndex: showAddProjectModal ? '2000' : '',
    };
    const handleModalInput = (e) => {
        let {name, value} = e.target;
        setModalFormState({
            ...modalFormState,
            [name]: value
        })
    }
    // add new project to the selected team
    const handleAddProject = () => {
       let data = {
           name: modalFormState.projectName
       }
     
        var { account_id } = account
   
       addProject(teamId, data, () =>  { console.log("callback called")
           getTeams(account_id[0]._id)
        })
        closeAddProjectModal()
    }
  
   
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
                                <input type="text" name = "projectName" value = {modalFormState.projectName} onChange = {handleModalInput}  className="addProjectModal__input addProjectModal__input--name" placeholder="Enter Project Name" />
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
    getTeams
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProjectModal)
