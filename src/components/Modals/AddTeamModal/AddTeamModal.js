import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { addNewTeamMember } from '../../../Redux/team/teamActions';
import ButtonLight from '../../Button/ButtonLight';
import "./AddTeamModal.scss"

const AddTeamModal = ({showModal,setShowModal, modalToggler,teamId,addNewTeamMember}) => {
    // teamState
    const [teamMemberEmail, setTeamMemberEmail] = useState('')
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
        console.log(name, value)
       setTeamMemberEmail(value)
    }
    const handleAddTeam = () => {
        console.log(teamId)
        let newTeamMember = {
            email: teamMemberEmail,
            teamId:teamId
        }
        addNewTeamMember(newTeamMember)
    }
    return (
        <div className="modal__backDrop backDrop2" style={backDropStyle} >
        <div className="modal">
            <div className="modal__content">
                <div className="addTeamModal">
                    <div className="addTeamModal__header">
                        <span className="addTeamModal__heading">New Team Member</span>
                        <span className="addTeamModal__closeBtn" onClick={modalToggler}>
                            <i className="fas fa-times"></i>
                        </span>
                    </div>
                    <div className="addTeamModal__body">
                        <div>
                            <input type="email" name="teamMemberEmail" value={teamMemberEmail} onChange={handleModalInput} className="addTeamModal__input addTeamModal__input--name" placeholder="Enter Email" />
                        </div>
                    </div>
                    <div className="addTeamModal__footer">
                        <ButtonLight text="Add Member"
                         click={handleAddTeam} 
                         />
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
var mapStateToProps = (state) => ({
    teamId: state.accounts && state.accounts.account && state.accounts.account[0] && state.accounts.account[0]._id
})
var mapDispatchToProps = {
    addNewTeamMember
}
export default connect(mapStateToProps, mapDispatchToProps)(AddTeamModal)
