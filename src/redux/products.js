import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value:0,
    products : [
        {title:"Item 1",description:"Item description",price:"20$",id:"1",howMannyAdded:0},
        {title:"Item 2",description:"Item description",price:"50$",id:"2",howMannyAdded:0},
        {title:"Item 3",description:"Item description",price:"5$",id:"3",howMannyAdded:0},
        {title:"Item 4",description:"Item description",price:"160$",id:"4",howMannyAdded:0},
        {title:"Item 5",description:"Item description",price:"28$",id:"5",howMannyAdded:0},
        {title:"Item 6",description:"Item description",price:"40$",id:"6",howMannyAdded:0}
    ],
}

export const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        addToBasket: (state,action) => {
            state.products.map((product) => {
                if(product.id === action.payload.id && product.howMannyAdded === 0) {
                    state.value++
                    product.howMannyAdded++
                }
            })
        },
        plus :(state,action) => {
            state.products.map((product) => {
                if(product.id === action.payload.id) {
                    product.howMannyAdded++
                    product.price = product.price.split('')
                    product.price.pop()
                    product.price = product.price.join('')
                    product.price = parseInt(product.price)
                    product.price = product.price/(product.howMannyAdded-1)*(product.howMannyAdded)
                    product.price = JSON.stringify(product.price) + '$'
                }
            })
        },
        minus :(state,action) => {
            state.products.map((product) => {
                if(product.id === action.payload.id) {
                    if (product.howMannyAdded !== 1) {
                    product.howMannyAdded--
                    product.price = product.price.split('')
                    product.price.pop()
                    product.price = product.price.join('')
                    product.price = parseInt(product.price)
                    product.price = product.price/(product.howMannyAdded+1)*(product.howMannyAdded)
                    product.price = JSON.stringify(product.price) + '$'
                    }
                    else {
                        state.value--
                        product.howMannyAdded--
                    }
                }
            })
        },
        supprimer :(state,action) => {
            state.products.map((product) => {
                if(product.id === action.payload.id) {
                    state.value--
                    product.howMannyAdded=0
                }
            })
        }
    }
})

export const { addToBasket,plus,minus,supprimer } = productsSlice.actions

export default productsSlice.reducer