import React from "react";
import { suggestions } from '../types/type';
const own_suggestion_hook = () => {
    const [ownSuggestion, setOwnSuggestion] = React.useState<suggestions | undefined>(undefined);
    
}

export default own_suggestion_hook;