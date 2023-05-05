import { Form, useActionData, redirect, useNavigation } from "react-router-dom"


export async function action(request, register) {
    try {
        const registerUser = await request.formData()
        const formDataObj = Object.fromEntries(registerUser)
        await register(formDataObj)
        return redirect("/host")
    } catch (e) {
        return e.message
    }
}

export default function Register() {
    const errorMessage = useActionData()
    const navigation = useNavigation()

    return (
        <>
            <h1 className="form-header">Register your account!</h1>
            {errorMessage && <p className="error">{errorMessage}</p>}
            <Form method="POST" autoComplete="off" replace>
                <input type="text" name="username" placeholder="Username" />
                <input type="password" name="password" placeholder="Password" />
                <input type="text" name="name" placeholder="Your Name" />
                <button disabled={navigation.state === "submitting" ? true : false}>Register</button>
            </Form>
        </>

    ) 
}