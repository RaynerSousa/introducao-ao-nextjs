type props = {
    isDark : boolean,
    onToggle : () => void;
}

export function ToggleDark({onToggle,isDark}:props){
    return(
        <button onClick={onToggle}
        className="w-30 h-10 bg-blue-500 text-white rounded">
        
            {isDark ? 'Toggle Light':'Toggle Dark'}
        </button>
    )
}