import { connect} from 'react-redux';
import login from '../component/login';
import {LoginUserAction,fecthTCAction,fecthTbAction} from '../action';


// chuyển đổi từ state sang props
const mapStateToProps = (state)=>{
    return{
        user:state.useReducers

    }
};

// chuyển đổi từ dispatch sang props

const mapDispatchToProps = (dispatch)=>{
    return{
        onAddUser:(newUser)=>{
            dispatch(LoginUserAction(newUser));
        }
    };
}
const userContainer = connect(mapDispatchToProps,mapDispatchToProps)(login)
export default userContainer;