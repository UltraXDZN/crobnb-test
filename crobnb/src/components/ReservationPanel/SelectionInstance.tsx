import React from 'react';
import ReservationDropdown from './ReservationDropdown';

import location from '@assets/icons/location.svg'
import bed from '@assets/icons/bed.svg'
import date from '@assets/icons/date.svg'
import person from '@assets/icons/person.svg'

type DropdownId = 'location' | 'icon' | 'date' | 'guests';


const SelectionInstance: React.FC = () => {
    const [activeDropdown, setActiveDropdown] = React.useState<DropdownId | null>(null);
    const handleToggleDropdown = (dropdownId: DropdownId) => {
        if (activeDropdown === dropdownId) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(dropdownId);
        }
    };
    return (
        <div className='flex flex-row gap-4'>
            <ReservationDropdown
                variant="icon"
                title="Lokacija"
                icon={location}
                options={['Središnja Dalmacija', 'Split i okolica', 'Omiš i okolica', 'Makarska i okolica']}
                isOpen={activeDropdown === 'location'}
                onToggle={() => handleToggleDropdown('location')}
            />
            <ReservationDropdown
                variant="standard"
                title="Tip smještaja"
                icon={bed}
                options={['Hoteli', 'Apartmani', 'Turistička naselja', 'Ville', 'Mobile kućice']}
                isOpen={activeDropdown === 'icon'}
                onToggle={() => handleToggleDropdown('icon')}
                
            />
            <ReservationDropdown
                title="Datum prijave / odjave"
                icon={date}
                variant="calendar"
                isOpen={activeDropdown === 'date'}
                onToggle={() => handleToggleDropdown('date')}
            />
            <ReservationDropdown
                variant='guests'
                title="Gosti"
                icon={person}
                minValue={0}
                maxValue={10}
                isOpen={activeDropdown === 'guests'}
                onToggle={() => handleToggleDropdown('guests')}
            />
        </div>
    );
}

export default SelectionInstance;