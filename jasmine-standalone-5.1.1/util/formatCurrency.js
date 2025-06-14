import { formatCurrency } from "../../jsx/formatCurr.js";
import {cart} from '../../data/cart.js'

describe('test suite: test formatCurr', () => {
    describe('describe',()=> {
        it('check with most expected no',() => { 
            expect(formatCurrency(2095)).toEqual('20.95')
        })

    })
    it('test with 0', ()=> {
        expect(formatCurrency(0)).toEqual('0.00')
    })
    it('describe with decimals',()=> {
        expect(formatCurrency(29.12334)).toEqual('0.29');
    })
})

describe('cart fn',() =>{
    it('cart functioning',() =>{
        spyOn(localStorage,'getItem').add.callFake(() =>{
            return JSON.stringify([])
        })
        cartAdd();
        expect(cart.length).toEqual(1);
    
    })});
