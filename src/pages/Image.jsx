import React, { Component } from "react";
import SideBar from '../components/Sidebar/SideBar';
import img from './img.png';
import image from './image.png'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";


export default function Image() {
    return (
        <div>
            <center><h1>ZOOM TYPE'S</h1></center>
            <h1>FIRST TYPE</h1>
            <TransformWrapper>
                <TransformComponent>
                  <center>
                    <img src={img} alt="this is a image" style={{height:"80%",width:"70%"}}/>

                  </center>

                </TransformComponent>
            </TransformWrapper>

            <h1>SECOND TYPE</h1>


            <TransformWrapper
                initialScale={1}
                initialPositionX={200}
                initialPositionY={100}
            >
                {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                    <React.Fragment>
                        <div className="tools">
                            <button onClick={() => zoomIn()}>+</button>
                            <button onClick={() => zoomOut()}>-</button>
                            <button onClick={() => resetTransform()}>x</button>
                        </div>
                        <TransformComponent>
                    <center>
                            <img src={image} alt="test" style={{height:"80%",width:"70%"}}/>

                    </center>
                            <div>Example text</div>
                        </TransformComponent>
                    </React.Fragment>
                )}
            </TransformWrapper>
        </div>
    )
}
