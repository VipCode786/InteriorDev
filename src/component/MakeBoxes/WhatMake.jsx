import React, { useEffect } from 'react'
import { useLayoutEffect } from 'react';
import $ from 'jquery';
import './whatmake.css'
const WhatMake = () => {




    useLayoutEffect(() => {

        // var dim = $('#flip').is(":visible");
        //     console.log(dim)

        window.onscroll = function (e) {
            // print "false" if direction is down and "true" if up
            {
                var direction = null;
                var oldScroll = 0;
                if (this.oldScroll > this.scrollY) {
                    if (direction !== "up") {
    
                        document.getElementById("flip").style.transform = ""; 

                    }
                    direction = "up"
                } else {
                    if (direction !== 'down') {
                        document.getElementById("flip").style.transform = "rotateY(180deg)";
                    }
                    direction = "down";
                }
                this.oldScroll = this.scrollY;
            }

            
            
        }

    })
    return (
        <div>
            <div className='flex-row'>
                <div class="flip-card">
                    <div class="flip-card-inner" id="flip">
                        <div class="flip-card-front">
                            <div style={{ width: "300px", height: '300px', background: "orange" }}>
                            </div>

                        </div>
                        <div class="flip-card-back">
                            <div>
                                <p>Architect & Engineer</p>
                                <p>We love that guy</p>
                            </div>
                        </div>
                    </div>
                </div>
                    <div class="flip-card">
                        <div class="flip-card-inner" id="flip1">
                            <div class="flip-card-front">
                                <div style={{ width: "300px", height: '300px', background: "orange" }}>
                                </div>

                            </div>
                            <div class="flip-card-back">
                                <div>
                                    <p>Architect & Engineer</p>
                                    <p>We love that guy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                



                

            </div>

        </div>
    )
}

export default WhatMake