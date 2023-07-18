import {takeEvery,all} from 'redux-saga/effects'
import * as ActionRegion from '../constant/regionConstant'
import { handleGetRegion } from './regionSaga'
function* watchAll(){
    yield all([
        takeEvery(ActionRegion.GET_DATA_REQ,handleGetRegion)
    ])
}

export default watchAll