

import React from 'react';

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <h3>Header</h3>
            {children}
        </div>
    );
};

export default CommonLayout;