import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FloatingInput, Button } from '../../UI'
import { IoLogoFacebook } from 'react-icons/io'
import Container from './styles'

const Auth = () => {
  const [{ email, password }, setFormState] = useState({
    email: '',
    password: '',
  })
  const handleInput = ({ target }) => {
    setFormState((s) => ({
      ...s,
      [target.name]: target.value,
    }))
  }
  return (
    <Container>
      <header></header>
      <main>
        <h1>Sign In</h1>
        <FloatingInput
          label="Email or Phone number"
          value={email}
          name={email}
          onChange={handleInput}
        />
        <FloatingInput
          label="Password"
          value={password}
          name={password}
          onChange={handleInput}
        />
        <Button full>Sign In</Button>
        <div className="row">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <div>Need help?</div>
        </div>
        <p className="socials">
          <IoLogoFacebook />
          Login with Facebook
        </p>
        <p className="new__users">
          New to Netflix? <Link>Sign up now.</Link>
        </p>
        <p>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{' '}
          <Link>Learn more.</Link>
        </p>
      </main>
      <footer>
        <p>Questions? Contact us.</p>
        <ol>
          <li>FAQ</li>
          <li>Help Center</li>
          <li>Terms of Use</li>
          <li>Privacy</li>
          <li>Cookie preferences</li>
          <li>Corporate Information</li>
        </ol>
      </footer>
    </Container>
  )
}

export default Auth
