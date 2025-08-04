 type ButtonsProps = {
    label : string;
 }
 
 export function Button({label}: ButtonsProps){
    return (
        <button className="px-6 py-2 bg-blue-800 text-white" >{label}</button>
    )
 }