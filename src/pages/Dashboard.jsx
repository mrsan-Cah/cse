import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
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
      <h2>Student Dashboard</h2>
      {user ? (
        <div className="card p-3 mt-3">
          <h4>Welcome, {user.name}</h4>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Dashboard
