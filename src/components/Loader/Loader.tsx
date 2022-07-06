import React from 'react';

import './Loader.scss'

function Loader() {
    return (
        <div className={'loader'}>
            <svg className={'loader_svg'}>
                <circle className={'loader_circle'}
                        cx={60}
                        cy={60}
                        r={50}
                />
                <circle className={'loader_circle-overhead'}
                        cx={60}
                        cy={60}
                        r={45}
                />
            </svg>
        </div>
    );
}

export default Loader;
