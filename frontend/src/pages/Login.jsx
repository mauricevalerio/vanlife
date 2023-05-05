import { 
    useLoaderData, 
    useNavigation, 
    Form, 
    useActionData, 
    redirect,
    Link } from "react-router-dom"
import "./login.css"

export function loader({request}) {
    return (new URL(request.url).searchParams.get("message"))
}

export async function action(request, login) {
    try {
        const loginUser = await request.formData()
        const formDataObj = Object.fromEntries(loginUser)
        await login(formDataObj)
        return redirect(`${new URL(request.url).searchParams.get("redirectTo") || "/host"}`)
    } catch(e) {
        return e.message
    }
}

export default function Login() {
    const loginMessage = useLoaderData()
    const errorMessage = useActionData()
    const navigation = useNavigation()
    
    return (
        <>
            <h1 className="form-header">Sign in to your account!</h1>
            {errorMessage && <p className="error">{errorMessage}</p>}
            {loginMessage && <h3 className="login-message">{loginMessage}</h3>}
            <Form method="POST" autoComplete="off" replace>

                <input type="text" name="username" placeholder="Username"/>
                <input type="password" name="password" placeholder="Password"/>

                <button disabled={navigation.state === "submitting" ? true : false}>Sign in</button>
            </Form>
            <p className="login-cta">Don't have an account? 
            <Link to="/register"><span className="orange-cta"> Create one now</span></Link> 
            </p>
        </>
    )
}