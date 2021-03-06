import React, { useState } from 'react';

import './pieg.css';

function PieGraph () {
    return (
        <div>
            <section className="circle-chart-container">
            <svg className="circle-chart" viewbox="0 0 33.83098862 33.83098862" xmlns="http://www.w3.org/2000/svg">
                <circle stroke="#efefef" stroke-width=".5" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431" />
                <circle className="circle-chart-circle" stroke="#64b2d1" stroke-width="3" stroke-dasharray="54,100" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431" />
                </svg>
            <span className="circle-chart-percentage circle-chart-one-percentage">
                29.1%
                </span>
            <svg className="circle-chart circle-chart-two" viewbox="0 0 33.83098862 33.83098862" xmlns="http://www.w3.org/2000/svg">
                <circle stroke="#efefef" stroke-width="0" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431" />
                <circle className="circle-chart-circle" stroke="#5292ac" stroke-width="3" stroke-dasharray="29,100" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431" />
                </svg>
            <span className="circle-chart-percentage circle-chart-two-percentage">
                54.9%
                </span>
            </section>
        </div>
    )
}

export default PieGraph