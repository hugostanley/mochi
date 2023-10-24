import { redirect } from "react-router-dom"
import { getLocalStorage, updateLocalStorage } from "@/utils/hooks"
import { toast } from "react-toastify"
import { globals } from "../globals"

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
            toast.success(globals.messages.signUp.success, {
                position: "top-center",
                autoClose: 2000
            })
            return redirect('/login')
        } else {
            return { email: globals.messages.signUp.emailTaken }
        }

    } else {
        alert('missing arguments')
        return redirect('/signup')
    }
}
