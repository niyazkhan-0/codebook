
export async function login(authDetail) {
    const requestOption = {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(authDetail)
    }

    const response = await fetch(`${process.env.REACT_APP_HOST}/login`, requestOption)
    if(!response.ok){
        throw{message : response.message, status: response.status}//eslint-disable-line
    }
    const data = await response.json()

    if (data.accessToken) {
        sessionStorage.setItem("token", JSON.stringify(data.accessToken))
        sessionStorage.setItem("cbid", JSON.stringify(data.user.id))
    }
    return data
}

export async function register(authDetail) {
    const requestOption = {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(authDetail)
    }

    const response = await fetch(`${process.env.REACT_APP_HOST}/register`, requestOption)
    if(!response.ok){
        throw{message : response.message, status: response.status} //eslint-disable-line 
    }
    const data = await response.json()

    if (data.accessToken) {
        sessionStorage.setItem("token", JSON.stringify(data.accessToken))
        sessionStorage.setItem("cbid", JSON.stringify(data.user.id))
    }
    return data 
}

export function logout() {
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("cbid")
}
