import { useRouteError } from 'react-router-dom'

export default function Error() {
    const error = useRouteError()
    console.log(error)
    return (
        <>
            <h1>{error.defaultMessage}</h1>
            <pre>{`${error.status} - ${error.text}`}</pre>
            
        </>
    )
}