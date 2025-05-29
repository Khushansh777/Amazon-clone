let orders = [];

export function placeOrders(param){
    orders.unshift(param)
    saveToStorage()
}

function saveToStorage(){
    localStorage.setItem('orders', JSON.stringify(orders));
}
