import { useRef, useEffect } from "react"
import { useLocation } from "react-router-dom"

const usePreviousRoute = ()=>{
    const location = useLocation()
    const prevLocationRef = useRef(null)
    const currentLocationRef = useRef(location)

    useEffect(()=>{
        prevLocationRef.current = currentLocationRef.current
    }, [location])

    return prevLocationRef.current
}

export default usePreviousRoute