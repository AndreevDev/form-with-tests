import {combineReducers} from 'redux'
import { customers } from './customers'
import { locations } from './locations'

export const rootReducer = combineReducers({customers, locations})
