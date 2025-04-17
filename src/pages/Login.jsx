import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()

    // Simple mock login check
    if (email === 'abc@gmail.com' && password === '12345') {
      localStorage.setItem('isLoggedIn', true)
      localStorage.setItem('user', JSON.stringify({ name: 'John Doe', email }))
      navigate('/dashboard')
    } else {
      alert('Invalid login credentials')
    }
  }

  return (
    <div className="container col-md-6">
      <h2>Student Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control"
            value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input type="password" className="form-control"
            value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  )
}

export default Login
