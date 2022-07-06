import {useState} from "react";

export const useToggler = (initState:boolean = false): [boolean, { On: () => void, Off: () => void, Toggle: () => void }] => {
    const [is, setIs] = useState<boolean>(initState)

    const handleOff = () => setIs(false)
    const handleOn = () => setIs(true)
    const handleToggle = () => setIs(prev => !prev)

    return [
        is,
        {
            On: handleOn,
            Off: handleOff,
            Toggle: handleToggle
        }
    ]
}