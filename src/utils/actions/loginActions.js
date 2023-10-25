import { getLocalStorage, globals, updateLocalStorage } from "@/utils"
import { redirect } from "react-router-dom"
import { toast } from "react-toastify"

export async function loginAction({ request }) {
    let formData = await request.formData()
    const adminList = getLocalStorage('adminList')

    if (!adminList) {
        toast.error("Please create an admin account", {
            position: "top-center"
        })
        return redirect(globals.paths.signup)
    }

    const email = formData.get('email')
    const password = formData.get('password')

    if (password && email) {
        const foundUser = adminList.find((item) => item.password === password && item.email === email)

        if (foundUser) {
            updateLocalStorage("userSignedIn", true)
            updateLocalStorage("currentUser", foundUser)
            toast.success("Signed in succesfully!", { position: "top-center" })
            return redirect(globals.paths.dashboard)
        } else {
            toast.error("User not found", { position: "top-center" })
            return redirect(globals.paths.login)
        }
    } else {
        toast.error("Please type your email and password", {
            position: "top-center"
        })
        return redirect(globals.paths.login)
    }
}
