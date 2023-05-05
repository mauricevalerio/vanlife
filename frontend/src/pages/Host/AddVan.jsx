import { useActionData, Form, redirect } from "react-router-dom"

export async function action(request, postHostVans) {
    try {
        const hostVanData = await request.formData()
        const formDataObj = Object.fromEntries(hostVanData)
        await postHostVans(formDataObj)
        return redirect('/host/vans')
    } catch (e) {
        return e.message
    }
}

export default function AddVan() {
    const errorMessage = useActionData()
    return (
        <Form method='POST' replace>
            <input 
            type='text'
            name='name'
            placeholder='Name' />

            <input 
            type='number'
            name='price'
            placeholder='Price' />

            <input 
            type='text'
            name='description'
            placeholder='Description' />

            <input 
            type='url'
            name='imageUrl'
            placeholder='Image URL' />

            <select name='type'>
                <option value=''>--Please choose van type--</option>
                <option value='simple'>Simple</option>
                <option value='rugged'>Rugged</option>
                <option value='luxury'>Luxury</option>
            </select>
            <button>Add</button>
            {errorMessage && <p>{errorMessage}</p>}
        </Form>
    )
}