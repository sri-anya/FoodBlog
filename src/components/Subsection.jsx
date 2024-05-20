import React from 'react';
import Divider from './Divider';

const Subsection = ({image, message, secondMessage=""}) => {
    return (
        <div>
            <div className="flex justify-center items-center pt-20 pb-10">
                <div className="flex flex-col justify-center items-center">
                    <div className="mb-4">
                        <img src={image} alt="emotions" />
                    </div>
                    <div>
                        <h1 className="font-medium text-3xl font-serif italic text-center">{message}</h1>
                        <p className="font-medium pt-10 text-center">{secondMessage}</p>
                    </div>
                </div>
            </div>
            <Divider />
        </div>
    )
}

export default Subsection
