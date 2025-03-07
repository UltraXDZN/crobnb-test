import React from 'react';
import RegionCard from './regionCard';

import istocnaHrvatska from '@assets/background/regions/01.jpeg';
import sredinjaHrvatska from '@assets/background/regions/02.jpeg';
import gorskaHrvatska from '@assets/background/regions/03.jpeg';
import istraIKvarner from '@assets/background/regions/04.jpeg';
import sjevernaDalmacija from '@assets/background/regions/05.jpeg';
import srednjaDalmacija from '@assets/background/regions/06.jpeg';
import juznaDalmacija from '@assets/background/regions/07.jpeg';

const RegionsPanel: React.FC = () => {
    return (
        <div className='mt-[50px] mb-[100px] w-full flex justify-center'>
            <div className='w-full max-w-7xl px-4 mx-auto'>
                <h1 className="text-[32px] font-mulish font-bold text-grayscale-100">Regije</h1>
                <div className='flex flex-row flex-wrap gap-4 mt-5 overflow-x-auto'>
                    <RegionCard regionName='Istočna Hrvatska' regionImageUrl={istocnaHrvatska} />
                    <RegionCard regionName='Središnja Hrvatska' regionImageUrl={sredinjaHrvatska} />
                    <RegionCard regionName='Gorska Hrvatska' regionImageUrl={gorskaHrvatska} />
                    <RegionCard regionName='Istra i Kvarner' regionImageUrl={istraIKvarner} />
                    <RegionCard regionName='Sjeverna Dalmacija' regionImageUrl={sjevernaDalmacija} />
                    <RegionCard regionName='Središnja Dalmacija' regionImageUrl={srednjaDalmacija} />
                    <RegionCard regionName='Južna Dalmacija' regionImageUrl={juznaDalmacija} />
                </div>
            </div>
        </div>
    );
};

export default RegionsPanel;