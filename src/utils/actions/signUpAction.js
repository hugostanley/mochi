import { redirect } from "react-router-dom"
import { getLocalStorage, updateLocalStorage } from "@/utils/hooks"

export async function signUpAction({ request }) {
    let formData = await request.formData()
    const username = formData.get('username')
    const email = formData.get('email')
    const password = formData.get('password')

    if (username && email && password) {
        const id = Date.now()
        const adminList = getLocalStorage('adminList')

        const existingEmail = adminList.find((admin) => admin.email === email)
        if (!existingEmail) {
            adminList.push({ username, email, password, id })
            updateLocalStorage('adminList', adminList)
            return redirect('/login')
        } else {
            return { email: 'Email is taken' }
        }

    } else {
        alert('missing arguments')
        return redirect('/signup')
    }
}
