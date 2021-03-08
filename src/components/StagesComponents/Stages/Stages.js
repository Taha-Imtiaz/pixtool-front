import React from 'react';
import './Stages.scss';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

import MainTile1 from '../MainTile-1/MainTile-1';

import CoderWall from '../../../images/Icon simple-coderwall.png';
import TileImg2 from '../../../images/tile2.svg'

function Stages() {
    return (
        <div className="stages">
            <div className="tileLayout">
                < div className="tileLayout__left" >
                    <div className="tileLayout__heading">This Is Tile Layout Heading</div>
                    <div className="tileLayout__mainContent">
                        <MainTile1 image={TileImg2}/>
                        <div className="tileLayout__splider">
                            <Splide
                                className="splide tileLayout__splide"
                                options={{
                                    perPage: 3,
                                    perMove: 1,
                                    rewind: true,

                                }}
                            >
                                <SplideSlide key={CoderWall.src}>
                                    <img src={CoderWall} alt="Coder Wall" className="wallStageLargeCard__smallImg" />
                                </SplideSlide>

                                <SplideSlide key={CoderWall.src}>
                                    <img src={CoderWall} alt="Coder Wall" className="wallStageLargeCard__smallImg" />
                                </SplideSlide>

                                <SplideSlide key={CoderWall.src}>
                                    <img src={CoderWall} alt="Coder Wall" className="wallStageLargeCard__smallImg" />
                                </SplideSlide>

                                <SplideSlide key={CoderWall.src}>
                                    <img src={CoderWall} alt="Coder Wall" className="wallStageLargeCard__smallImg" />
                                </SplideSlide>

                                <SplideSlide key={CoderWall.src}>
                                    <img src={CoderWall} alt="Coder Wall" className="wallStageLargeCard__smallImg" />
                                </SplideSlide>

                                <SplideSlide key={CoderWall.src}>
                                    <img src={CoderWall} alt="Coder Wall" className="wallStageLargeCard__smallImg" />
                                </SplideSlide>

                                <SplideSlide key={CoderWall.src}>
                                    <img src={CoderWall} alt="Coder Wall" className="wallStageLargeCard__smallImg" />
                                </SplideSlide>

                                <SplideSlide key={CoderWall.src}>
                                    <img src={CoderWall} alt="Coder Wall" className="wallStageLargeCard__smallImg" />
                                </SplideSlide>

                                <SplideSlide key={CoderWall.src}>
                                    <img src={CoderWall} alt="Coder Wall" className="wallStageLargeCard__smallImg" />
                                </SplideSlide>

                                <SplideSlide key={CoderWall.src}>
                                    <img src={CoderWall} alt="Coder Wall" className="wallStageLargeCard__smallImg" />
                                </SplideSlide>

                                <SplideSlide key={CoderWall.src}>
                                    <img src={CoderWall} alt="Coder Wall" className="wallStageLargeCard__smallImg" />
                                </SplideSlide>

                                <SplideSlide key={CoderWall.src}>
                                    <img src={CoderWall} alt="Coder Wall" className="wallStageLargeCard__smallImg" />
                                </SplideSlide>

                                <SplideSlide key={CoderWall.src}>
                                    <img src={CoderWall} alt="Coder Wall" className="wallStageLargeCard__smallImg" />
                                </SplideSlide>

                                <SplideSlide key={CoderWall.src}>
                                    <img src={CoderWall} alt="Coder Wall" className="wallStageLargeCard__smallImg" />
                                </SplideSlide>

                                <SplideSlide key={CoderWall.src}>
                                    <img src={CoderWall} alt="Coder Wall" className="wallStageLargeCard__smallImg" />
                                </SplideSlide>
                            </Splide>
                        </div>
                    </div>
                </div>
                <div className="tileLayout__right">
                    <div className="tileLayout__rightSmallBox"></div>
                    <div className="tileLayout__rightSmallBox"></div>
                    <div className="tileLayout__rightSmallBox"></div>
                </div>
            </div >
        </div>
    )
}

export default Stages
