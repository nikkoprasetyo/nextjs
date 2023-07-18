import * as ActionRegion from '../constant/regionConstant'

export const GetRegionReq = () =>({
    type:ActionRegion.GET_DATA_REQ
})

export const GetRegionSuccess = (payload : any) => ({
    type: ActionRegion.GET_DATA_OK,
    payload
})

export const GetRegionFail = (payload: any) => ({
    type: ActionRegion.GET_DATA_FAIL,
    payload
})