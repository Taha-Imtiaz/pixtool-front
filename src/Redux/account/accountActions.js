import Axios from "axios";
import { showToastMessage } from "../utility/utilityActions";
import { ACCOUNT, ADD_PROJECT } from "./accountConstants";
import { cloneDeep } from 'lodash';

//get all teams
export const getAccount = (accountId) => async (dispatch) => {
  try {

    let response = await Axios.get(`account/${accountId}`)
    dispatch({
      type: ACCOUNT,
      payload: response.data.data.teams
    })

  } catch (e) {
    if (e.response && e.response.data) {
      dispatch(showToastMessage(e.response.data.message))

    }
  }
}

// add new Project to the team whose teamId is passed

export const addProject = (teamId, data, callback) => async (dispatch, getState) => {
  try {
    let response = await Axios.post(`project/${teamId}`, data, {
      config: {
        handlerEnabled: true
      }
    })
    let { accounts } = getState()
    let { account } = accounts
    let { projects } = account[0]

    console.log(projects)
    let projectsClone = projects.slice()
    projectsClone.push(response.data.data)

    let accountObj = {
      ...accounts.account[0],
      projects: projectsClone
    }

    console.log(accountObj)
    // // update app's state
    dispatch({
      type: ADD_PROJECT,
      payload: accountObj
    })

    dispatch(showToastMessage(response.data.message))
    if (response.status === 202) {
      callback()
    }
  } catch (e) {
    if (e.response && e.response.data) {
      dispatch(showToastMessage(e.response.data.message))

    }
  }
}


export const deleteProject = (projectId, callback) => async (dispatch, getState) => {
  try {
    let response = await Axios.delete(`project/${projectId}`)

    let { accounts } = getState()
    let { account } = accounts
    let { projects } = account[0]

    let projectsClone = cloneDeep(projects)
    let index = projectsClone.findIndex(x => x._id === projectId)
    projectsClone.splice(index, 1)
    // projectsClone.push(response.data.data)
    let accountObj = {
      ...accounts.account[0],
      projects: projectsClone
    }

    console.log(accountObj)
    // // update app's state
    dispatch({
      type: ADD_PROJECT,
      payload: accountObj
    })

    dispatch(showToastMessage(response.data.message))
    if (response.status === 202) {
      callback()
    }
  } catch (e) {
    if (e.response && e.response.data) {
      dispatch(showToastMessage(e.response.data.message))

    }
  }
}