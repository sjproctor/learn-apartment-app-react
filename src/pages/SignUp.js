import { useForm } from "react-hook-form"
import { Form, FormGroup, Label } from "reactstrap"
import { useNavigate } from "react-router-dom"

const SignUp = ({ handleSignUp }) => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = (user) => {
    handleSignUp(user)
    navigate("/")
  }

  return (
    <div className="page-body page-height">
      <h3 className="title-header center-content">Create an Account</h3>
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
        <FormGroup>
          <Label for="password">Password Confirmation</Label>
          <input
            id="confirmation"
            name="confirmation"
            placeholder="Password Confirmation"
            type="password"
            className="form-control"
            {...register("confirmation", { required: true })}
          />
          {errors.confirmation && (
            <span className="form-validations">
              Password confirmation is required
            </span>
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

export default SignUp
