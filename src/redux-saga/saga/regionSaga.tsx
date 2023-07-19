import { call, put } from "redux-saga/effects";
import region from "@/pages/api/region";
import {
  GetRegionFail,
  GetRegionSuccess,
  CreateRegionFail,
  CreateRegionSuccess,
  UpdateRegionFail,
  UpdateRegionSuccess,
  DeleteRegionFail,
  DeleteRegionSuccess,
} from "../action/regionAction";

function* handleGetRegion(): any {
  try {
    const result = yield call(region.GetData);
    yield put(GetRegionSuccess(result));
  } catch (error) {
    yield put(GetRegionFail(error));
  }
}

function* handleCreateRegion(): any {
  try {
    const result = yield call(region.CreateData);
    yield put(CreateRegionSuccess(result));
  } catch (error) {
    yield put(CreateRegionFail(error));
  }
}

function* handleUpdateRegion(): any {
  try {
    const result = yield call(region.UpdateData);
    yield put(UpdateRegionSuccess(result));
  } catch (error) {
    yield put(UpdateRegionFail(error));
  }
}
function* handleDeleteRegion(): any {
  try {
    const result = yield call(region.DeleteData);
    yield put(DeleteRegionSuccess(result));
  } catch (error) {
    yield put(DeleteRegionFail(error));
  }
}

export {
  handleGetRegion,
  handleCreateRegion,
  handleUpdateRegion,
  handleDeleteRegion,
};
