import { localStoreCart } from "../../data/cart.js"
import { renderOrderSummary } from "../../jsx/checkout/orderSummary.js"
describe('test order summary', () =>{
     document.querySelector('.order-summary').innerHTML
    = `<div class = ></div>`
    it('rendering', ()=> {
        spyOn(localStorage,'setItem');
        spyOn(localStorage,'getItem').and.callFake(()=>{
            return JSON.stringify([
                {
                    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6", 
                    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
                    quantity: 1,
                    deliveryOptionID: 1
                },
                {
                    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
                    name: "pairs",
                    quantity: 1,
                    deliveryOptionID: 1
                },
            ])
        })
        localStoreCart();
        renderOrderSummary()
    })
})