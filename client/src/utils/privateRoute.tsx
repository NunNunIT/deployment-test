import { useSelector } from "react-redux";
import { Outlet, Navigate} from 'react-router-dom'

export default function PrivateRoute () {
    const { currentUser } = useSelector(state => state.user)
    return currentUser ? <Outlet/> : <Navigate to='/login' />
}

// Cách dùng
< Route element = { <PrivateRoute /> } >
    <Route path = '/profile' element = { <Profile /> }
</Route>