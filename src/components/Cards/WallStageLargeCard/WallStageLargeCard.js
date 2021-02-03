import React from 'react';
import './WallStageLargeCard.scss';
import CoderWall from '../../../images/Icon simple-coderwall.png';
import CoderWallBig from '../../../images/Icon simple-coderwall-2x.png';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
// import { createSlides } from "../utils/slides";

function WallStageLargeCard(props) {

    /* const createSlides = () => {} */

    return (
        <div className="wallStageLargeCard">
            <h3 className="wallStageLargeCard__title">Wall Stage</h3>
            <div className="wallStageLargeCard__imgBox">
                <img src={CoderWallBig} alt="Coder Wall Big" className="wallStageLargeCard__largeImg" />

                <div className="splider">
                    <Splide
                        className="splide"
                        options={{
                            /* perPage: 2,
                            perMove: 1,
                            rewind: true,
                            autoHeight: true,
                            autoWidth: true,
                            width: 780,
                            gap: '1rem', */
                            perPage: props.perPage,
                            perMove: 1,
                            rewind: true,

                        }}
                        /* onMoved={(splide, newIndex) => { console.log('moved', newIndex) }} */
                    >
                        {/* {createSlides().map(slide => (
                            <SplideSlide key={CoderWall.src}>
                                <img src={CoderWall} alt="Coder Wall" className="wallStageLargeCard__smallImg" />
                            </SplideSlide>
                        ))} */}

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
    )
}

export default WallStageLargeCard
