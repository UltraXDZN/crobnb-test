interface BaseDropdownProps {
    title: string;
    icon: string;
    isOpen: boolean;
    onToggle: () => void;
}

interface StandardDropdownProps extends BaseDropdownProps {
    variant: 'standard';
    options: string[];
}

interface IconDropdownProps extends BaseDropdownProps {
    variant: 'icon';
    options: string[];
}

interface CalendarDropdownProps extends BaseDropdownProps {
    variant: 'calendar';
}

interface GuestsDropdownProps extends BaseDropdownProps {
    variant: 'guests';
    minValue: number;
    maxValue: number;
}

type DropdownProps = StandardDropdownProps | IconDropdownProps | CalendarDropdownProps | GuestsDropdownProps;

export type { DropdownProps };