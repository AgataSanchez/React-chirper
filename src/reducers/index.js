import {combinedReducers} from 'redux'
import authedUser from './authedUser'
import users from './users'
import tweets from './tweets'

export default function combinedReducers({
    authedUser,
    users,
    tweets,
})