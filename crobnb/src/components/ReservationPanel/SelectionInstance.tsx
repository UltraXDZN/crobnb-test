import React from 'react';
import ReservationDropdown from './ReservationDropdown';

import location from '@assets/icons/location.svg'
import bed from '@assets/icons/bed.svg'
import date from '@assets/icons/date.svg'
import person from '@assets/icons/person.svg'



const SelectionInstance: React.FC = () => {
    return (
        <div className='flex flex-row gap-4'>
            <ReservationDropdown
                title="Lokacija"
                icon={location}
                options={['Središnja Dalmacija', 'Split i okolica', 'Omiš i okolica', 'Makarska i okolica']}
                hasStartingIcon={true}
            />
            <ReservationDropdown
                title="Tip smještaja"
                icon={bed}
                options={['Hoteli', 'Apartmani', 'Turistička naselja', 'Ville', 'Mobile kućice']}
            />
            <ReservationDropdown
                title="Datum prijave / odjave"
                icon={date}
                isCalendar={true}
                options={['Option 1', 'Option 2', 'Option 3']}
            />
            <ReservationDropdown
                title="Broj gostiju"
                icon={person}
                options={['Option 1', 'Option 2', 'Option 3']}
            />
        </div>
    );
}

export default SelectionInstance;