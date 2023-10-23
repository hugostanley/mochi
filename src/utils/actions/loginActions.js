export async function loginAction({request}){
    let formData = await request.formData()
    let adminList = await localStorage.getItem('adminList')

    if(adminList){

    }
}
