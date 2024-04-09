import { useForm } from "react-hook-form"
import { Form, FormGroup, Label } from "reactstrap"
import { useNavigate } from "react-router-dom"

const SignIn = ({ handleSignIn }) => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = (user) => {
    handleSignIn(user)
    navigate("/")
  }

  return (
    <div className="page-body page-height">
      <h3 className="title-header center-content">Sign In</h3>
      <Form onSubmit={handleSubmit(onSubmit)} className="sign-in-form">
        <FormGroup>
          <Label for="email">Enter Your Email</Label>
          <input
            id="email"
            name="email"
            placeholder="Email"
            type="email"
            className="form-control"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="form-validations">Email is required</span>
          )}
        </FormGroup>
        <FormGroup>
          <Label for="password">Enter Your Password</Label>
          <input
            id="password"
            name="password"
            placeholder="Password"
            type="password"
            className="form-control"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="form-validations">Password is required</span>
          )}
        </FormGroup>
        <div className="center-content">
          <button onClick={handleSubmit} className="nav-button">
            Submit
          </button>
        </div>
      </Form>
    </div>
  )
}

export default SignIn
