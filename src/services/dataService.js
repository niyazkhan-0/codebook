function getSession() {
    const token = JSON.parse(sessionStorage.getItem("token"))
    const cbid = JSON.parse(sessionStorage.getItem("cbid"))

    return {
        token: token,
        cbid: cbid
    }
}

export async function getUser() {

    const { token, cbid } = getSession()
    const response = await fetch(`${process.env.REACT_APP_HOST}/600/users/${cbid}`, {
        method: "GET",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` }
    });
    if (!response.ok) {
        throw { message: response.statusText, status: response.status }      //eslint-disable-line
    }

    const data = await response.json();
    return data;
}

export async function getUserOrders() {
    const { token, cbid } = getSession()
    const requestOption = {
        method: "GET",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` }
    }

    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders?user.id=${cbid}`, requestOption);
    if (!response.ok) {
        throw { message: response.statusText, status: response.status }    //eslint-disable-line  
    }

    const data = await response.json()
    return data
}

export async function createOrder(cartList, total, user) {

    const { token, cbid } = getSession()
    const order = {
        products: cartList,
        amount_paid: total,
        quantity: cartList.length,
        user: {
            name: user.name,
            email: user.email,
            id: cbid
        }
    }

    const requestOption = {
        method: "POST",
        headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify(order)
    }

    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders`, requestOption)
    if (!response.ok) {
        throw { message: response.statusText, status: response.status }      //eslint-disable-line
    }

    const data = await response.json()
    return data

}