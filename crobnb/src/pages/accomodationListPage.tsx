import ReservationPanel from '@components/ReservationPanel/MainPanel';
import React from 'react';

const AccomodationListPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className='mt-10'>
                <ReservationPanel />
            </div>
            <div>
                {/* Filter Panel */}
                {/* Cards */}
            </div>
            
        </div>
    );
};

export default AccomodationListPage;