import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Profile() {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if (!isLoggedIn) {
      navigate('/login')
    } else {
      const userData = JSON.parse(localStorage.getItem('user'))
      setUser(userData)
    }
  }, [])

  return (
    <div>
      <h2>Student Profile</h2>
      {user ? (
        <div className="card p-3 mt-3">
          <h4>Name: {user.name}</h4>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  )
}

export default Profile
