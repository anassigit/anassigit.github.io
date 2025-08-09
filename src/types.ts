import { Dispatch, SetStateAction } from 'react';

export interface DarkModeBaseProps {
    darkMode: boolean;
}

export interface DarkModeProps extends DarkModeBaseProps {
    setDarkMode: Dispatch<SetStateAction<boolean>>;
}