import {actionType} from './actionType'
export const setProducts = (products)=>{

        return{
            type :actionType.SET_PRODUCTS,
            payload : products,
        }
}

export const addProducts = (data)=>{
    return{
        type :actionType.ADD_PRODUCT,
        payload :data
        
    }
}

export const dellProducts = (ind)=>{
    return{
        type :actionType.DELL_PRODUCT,
        payload :ind
    }
}
export const editProducts = (data)=>{
    return{
        type :actionType.EDIT_PRODUCT,
        payload :data,
    }
}


