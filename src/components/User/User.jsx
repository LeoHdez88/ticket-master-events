import { Link } from "react-router-dom"

const User = ({user}) => {
  return (
        <>
         <Link  className="nav-link text-white" style={{color:"white"}} to='/profile'>
            <span>{user.user?.Email}</span>
         </Link>
        </>
  )
}

export default User;