import React from 'react';

const Section = ({ col, children }) => {
    return (
        <div className="row">
            <div className={col}>{children}</div>
        </div>
    );
};

export default Section;