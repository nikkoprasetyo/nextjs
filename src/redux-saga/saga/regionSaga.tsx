import {call,put} from 'redux-saga/effects'
import region from '@/pages/api/region'
import { GetRegionFail, GetRegionSuccess } from '../action/regionAction'

function* handleGetRegion():any {
    try {
        const result = yield call(region.GetData)
        yield put(GetRegionSuccess(result))
    } catch (error) {
        yield put(GetRegionFail(error))
    }
}

export {
    handleGetRegion
}