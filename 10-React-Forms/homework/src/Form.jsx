import React from 'react';

export default function  Form() {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  return (
    <form>
      <div>
        <label>Username:</label>
        <input type='text' name='username' value={username} onChange={(e) => setUsername(e.target.value)} valor={username}/>
      </div>
      <div>
        <label>Password:</label>
        <input type='text' name='password' value={password} onChange={(e) => setPassword(e.target.value)} valor={password}/>
      </div>
    </form>
  )
}
