import React, { useState } from "react";
import { FormControl, InputLabel, Select } from "@material-ui/core";
import "./DropDownSelect.scss";
import { makeStyles } from "@material-ui/core";
import { Fragment } from "react";
import ButtonLight from "../Button/ButtonLight";

const DropDownSelect = () => {
  const [state, setState] = useState({
    surface: "panel",
  });
  const [surfaceModalForm, setSurfaceModalForm] = useState({
    cabinetSize: "",
    pixelPitch: "",
    pixelSize: "",
  });
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      border: "1px solid #292929",
      borderRadius: "5px !important",
      // padding: 0,
      height: "5rem",
    },
  }));
  const handleChange = (event) => {
    const name = event.target.name;
    console.log(event.target.name, event.target.value);
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const handleModalInput = (e) => {
    let { name, value } = e.target;
    console.log(name, value);
    setSurfaceModalForm({
      ...surfaceModalForm,
      [name]: value,
    });
  };
  const classes = useStyles();
  let { surface } = state;
  return (
    <Fragment>
      <div className="addTeamModal__body">
        <div className="addSurfaceModal">
          <FormControl variant="outlined">
            <InputLabel>Surfaces</InputLabel>
            <Select
              native
              value={state.surface}
              onChange={handleChange}
              inputProps={{
                name: "surface",
                id: "outlined-age-native-simple",
              }}
            >
              <option value={"projector"}>Projector</option>
              <option value={"panel"}>Panel</option>
            </Select>
          </FormControl>
          <input
            type="text"
            name="cabinetSize"
            value={surfaceModalForm.cabinetSize}
            onChange={handleModalInput}
            className="addTeamModal__input addTeamModal__input--name"
            placeholder="Cabinet Size"
          />
          {surface === "panel" && (
            <Fragment>
              <input
                type="text"
                name="pixelPitch"
                value={surfaceModalForm.pixelPitch}
                onChange={handleModalInput}
                className="addTeamModal__input addTeamModal__input--name"
                placeholder="Pixel Pitch"
              />
              <input
                type="text"
                name="pixelSize"
                value={surfaceModalForm.pixelSize}
                onChange={handleModalInput}
                className="addTeamModal__input addTeamModal__input--name"
                placeholder="Pixel Size"
              />
            </Fragment>
          )}
        </div>
      </div>
      <div className="addTeamModal__footer">
        <ButtonLight
          text="Add Surface"
          //   click={handleAddTeam}
        />
      </div>
    </Fragment>
  );
};
export default DropDownSelect;
