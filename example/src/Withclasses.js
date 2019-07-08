import React from "react";
import { RenderUseForm } from "@tevhooks/useform";

import signupvalidation from "./validations/signup";

export default class App extends React.Component {
  handleSubmit = values => {
    console.log(values);
  };

  render() {
    return (
      <RenderUseForm callback={this.handleSubmit} validate={signupvalidation}>
        {({ values, handleChange, handleSubmit, errors }) => (
          <div>
            <form onSubmit={handleSubmit} data-testid="form">
              <input
                type="email"
                value={values.email || ""}
                placeholder="email"
                onChange={handleChange}
                name="email"
                data-testid="email"
              />
              <br />
              {errors.email && (
                <div data-testid="email-error-message">{errors.email}</div>
              )}

              <input
                type="text"
                placeholder="username"
                value={values.username || ""}
                onChange={handleChange}
                name="username"
                data-testid="username"
              />
              <br />
              {errors.username && (
                <div data-testid="username-error-message">
                  {errors.username}
                </div>
              )}

              <input
                type="text"
                placeholder="firstname"
                value={values.firstname || ""}
                onChange={handleChange}
                name="firstname"
                data-testid="firstname"
              />
              <br />
              {errors.firstname && (
                <div data-testid="firstname-error-message">
                  {errors.firstname}
                </div>
              )}

              <input
                type="text"
                placeholder="lastname"
                value={values.lastname || ""}
                onChange={handleChange}
                name="lastname"
                data-testid="lastname"
              />
              <br />
              {errors.lastname && (
                <div data-testid="lastname-error-message">
                  {errors.lastname}
                </div>
              )}

              <input
                type="password"
                placeholder="password"
                value={values.password || ""}
                onChange={handleChange}
                name="password"
                data-testid="password"
              />
              <br />
              {errors.password && (
                <div data-testid="password-error-message">
                  {errors.password}
                </div>
              )}
              <input
                type="password"
                placeholder="retypedpassword"
                value={values.retypedpassword || ""}
                onChange={handleChange}
                name="retypedpassword"
                data-testid="retypedpassword"
              />
              <br />
              {errors.retypedpassword && (
                <div data-testid="retypedpassword-error-message">
                  {errors.retypedpassword}
                </div>
              )}
              <br />
              <button data-testid="submit" type="submit">
                Submit
              </button>
            </form>
          </div>
        )}
      </RenderUseForm>
    );
  }
}
