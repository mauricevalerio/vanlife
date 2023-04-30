import { Form, useActionData, redirect } from "react-router-dom"
import { registerUser } from "../api"

export async function action({request}) {
    try {
        const register = await request.formData()
        const formDataObj = Object.fromEntries(register)
        await registerUser(formDataObj)
        return redirect("/host")
    } catch (e) {
        return e.message
    }
}

export default function Register() {
    const errorMessage = useActionData()

    return (
        <>
        <Form method="POST" autoComplete="off" replace>
            <input type="text" name="username" placeholder="Username" />
            <input type="password" name="password" placeholder="Password" />
            <input type="text" name="name" placeholder="name" />
            <button>Register</button>
        </Form>
        {errorMessage && <h3>{errorMessage}</h3>}
        </>

    ) 
}