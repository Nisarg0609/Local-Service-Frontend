import { POST_CATEGORY,GET_CATEGORY } from "../constants/constants"

// eslint-disable-next-line import/no-anonymous-default-export
export default (categories=[],action)=>{
    switch(action.type){
        case POST_CATEGORY:
            return action.payload
        case GET_CATEGORY:
            categories = action.payload
            return categories
        default :
            return categories
    }
}