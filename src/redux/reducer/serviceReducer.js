import { POST_SERVICE } from "../constants/constants"

// eslint-disable-next-line import/no-anonymous-default-export
export default (services=[],action)=>{
    switch(action.type){
        case POST_SERVICE:
            return action.payload
        // case GET_CATEGORY:
        //     categories = action.payload
        //     return categories
        default :
            return services
    }
}