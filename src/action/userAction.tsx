import {USER_LOGIN_SUCCESS} from '../constants/userConstants'
import {ThunkAction , ThunkDispatch} from 'redux-thunk'
import {AnyAction}  from 'redux'
import {RootState } from '../store'

export const loginAction = 
(
    email : string, password: string
) : ThunkAction<Promise<void> , RootState , unknown , AnyAction> =>
 async (
     dispatch : ThunkDispatch<RootState , unknown , AnyAction>
     ) : Promise<void> => {
  try {
    const payload = {
       email: email ,
       password: password
     }

    dispatch({
      type: "USER_LOGIN_SUCCESS", 
      payload 
    });
     
  ///fetch data from backend userInfo

  } catch (error) {}
};



export default loginAction