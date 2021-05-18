import React, { useState } from "react";
import "./Surfaces.scss";

import MainTile1 from "../MainTile-1/MainTile-1";
import ButtonSmallPrimary from "../../Button/ButtonSmallPrimary";

import TileImg1 from "../../../images/tile.svg";
import TileImg2 from "../../../images/tile2.svg";
import { Fragment } from "react";
import ButtonLight from "../../Button/ButtonLight";
import { Backdrop, Fade, Modal } from "@material-ui/core";
import AddSurfaceModal from "../../Modals/AddSurfaceModal/AddSurfaceModal";

function Surfaces() {
  const createNew = () => {};
  const [surfaceOpen, setSurfaceOpen] = useState(false);
  const [showSurfacesModal, setShowSurfacesModal] = useState(false);

  console.log(surfaceOpen);
  const addSurfaceModalToggle = () => {
    if (showSurfacesModal) {
      // Allow to scroll when closing the modal
      document.body.style.removeProperty("overflow");
    } else {
      // Disable scrolling on the `body` element when opening a modal
      document.body.style.overflow = "hidden";
    }

    setShowSurfacesModal(!showSurfacesModal);
  };
  return (
    <Fragment>
      <div className="surfaces">
        <ButtonLight text="Add Surfaces" click={addSurfaceModalToggle} />
        {showSurfacesModal && (
          <Modal
            className="modal"
            open={showSurfacesModal}
            onClose={() => setShowSurfacesModal(false)}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={showSurfacesModal}>
              <div>
                <AddSurfaceModal
                  showModal={showSurfacesModal}
                  setShowModal={setShowSurfacesModal}
                  modalToggler={addSurfaceModalToggle}
                />
              </div>
            </Fade>
          </Modal>
        )}
        {/* <div className="tileLayout">
                 < div className="tileLayout__left" >
                     <div className="tileLayout__heading">This Is Tile Layout Heading</div>
                     <div className="tileLayout__mainContent">
                         <MainTile1 image={TileImg1} />
                     </div>
                 </div>
                 <div className="tileLayout__right">
                     <div className="rightBox">
                         <h3 className="rightBox__heading">Details</h3>
                         <table className="rightBox__table">
                             <tbody>
                                 <tr className="table__row">
                                     <td className="table__text">Pixel Pitch: </td>
                                     <td className="table__text table__text--primary">84PX</td>
                                 </tr>
                                 <tr className="table__row">
                                     <td className="table__text">Cabinet Size: </td>
                                     <td className="table__text table__text--primary">20 * 20</td>
                                 </tr>
                                 <tr className="table__row">
                                     <td className="table__text">Pixel Size: </td>
                                     <td className="table__text table__text--primary">84PX</td>
                                 </tr>
                             </tbody>
                         </table>
                     </div>
                     <div className="rightBox">
                         <h3 className="rightBox__heading">Screen</h3>
                         <table className="rightBox__table">
                             <tbody>
                                 <tr className="table__row pd-b-1">
                                     <td className="table__img">
                                         <img src={TileImg1} alt="Tile Thumbnail" />
                                     </td>
                                     <td className="table__text table__text--img">20 * 20</td>
                                 </tr>
                                 <tr className="table__row pd-b-1">
                                     <td className="table__img">
                                         <img src={TileImg1} alt="Tile Thumbnail" />
                                     </td>
                                     <td className="table__text table__text--img">20 * 20</td>
                                 </tr>
                             </tbody>
                         </table>
                         <div className="rightBox__btn">
                             <ButtonSmallPrimary text="Add" click={createNew} />
                         </div>
                     </div>
                     <div className="rightBox">
                         <h3 className="rightBox__heading">Stage</h3>
                         <table className="rightBox__table">
                             <tbody>
                                 <tr className="table__row">
                                     <td className="table__text pd-b-1">Main Wall: </td>
                                     <td className="table__text table__text--primary">84PX</td>
                                 </tr>
                                 <tr className="table__row pd-b-1">
                                     <td className="table__img  table__img--2">
                                         <img src={TileImg2} alt="Tile Thumbnail" />
                                     </td>
                                 </tr>
                             </tbody> 
                         </table>
                         <div className="rightBox__btn">
                             <ButtonSmallPrimary text="Add" click={createNew} />
                         </div>
                     </div>
                 </div>
             </div >*/}
      </div>
    </Fragment>
  );
}

export default Surfaces;
