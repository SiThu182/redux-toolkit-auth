import { useSelector } from 'react-redux'
import '../styles/profile.css'

const ProfileScreen = () => {
  const { userInfo } = useSelector((state) => state.auth)
  console.log(userInfo)

  return (
    <div>
      <figure>{userInfo.data?.name.charAt(0).toUpperCase()}</figure>
      <span>
        Welcome <strong>{userInfo.data?.name}!</strong> You can view this page
        because you're logged in
      </span>
    </div>
  )
}

export default ProfileScreen
