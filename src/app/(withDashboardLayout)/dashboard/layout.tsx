import React from 'react';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex gap-5'>
            <div>
                <h2>Dashboard Header</h2>
            </div>
            <div>
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;