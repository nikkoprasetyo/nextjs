import * as ActionType from "../constant/regionConstant"

const INIT_STATE = {
    regions: []
}

const RegionReducer = (state = INIT_STATE, action : any) => {
    switch (action.type) {
        case ActionType.GET_DATA_REQ :
            return {...state}
        case ActionType.GET_DATA_OK:
            return GetRegion(state,action)    
        default:
            return {...state}
    }
}

const GetRegion = (state: any,action:any) => {
    return {
        ...state,
        regions: action.payload
    }
}

export default RegionReducer