# @tevhooks/useform

> A react hook library meant to make it easy while dealing with hooks



[![Build Status](https://travis-ci.org/tevhooks/useForm.svg?branch=master)](https://travis-ci.org/tevhooks/useForm)
[![codecov](https://codecov.io/gh/tevhooks/useForm/branch/master/graph/badge.svg)](https://codecov.io/gh/tevhooks/useForm)

[![forthebadge](https://forthebadge.com/images/badges/built-by-hipsters.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/ages-12.svg)](https://forthebadge.com)

## Install

```bash
npm install --save @tevhooks/useform or yarn add @tevhooks/useform
```

## Usage

```js
// validatepasswords.js
/**
 *validate password values.
 * */
export default values => {
  let errors = {}
  if(values.password !== values.retypedpassword) {
    errors.missmatch = "The two passwords do not match"
  }

  return errors
}

```

```jsx
// setnewpassword.js
import React, { Component } from 'react'

import useForm from '@tevhooks/useform'

import validatepasswords from "./validatepasswords.js"

const Setnewpassword = () => {
  const { values, handleChange, handleSubmit, errors } = useForm(onSend, validatepasswords)

  /*
  * This function will only be
  *  called when the errors object from the
  * validation scheme
  * is empty.
  */
  const onSend = () => {
    // make ajax call here
    console.log(values)
  }
  return (
    <form onSubmit={handleSubmit}>
      {/* for input boxes provide the
        *name as this will be used
        * as the key in the values object
        * for instance for the form below the values object will be
        *
        * {
        *  "password": "password-value",
        *  "retypedpassword" : "password-value"
        * }
        *  */}
      <input type="password" name="password" value={values.password || ""} onChange={handleChange}/>

      <input type="password" name="retypedpassword" value={values.retypedpassword || ""} onChange={handleChange}/>

      {errors.missmatch && <div className="error">{errors.missmatch}</div>}

      <button type="submit">Submit</button>
    </form>
  )
}
```


#### Still using classes ?

Not to worry, but this guy's advice is [legit](https://www.youtube.com/watch?v=dpw9EHDh2bM&feature=youtu.be&t=3726)

I've exposed a RenderProp that will work with class based components

```jsx

import React from "react";
import { RenderUseForm } from "@tevhooks/useform";

import validatepasswords from "./validatepasswords.js" // same validation as used in the above example

class Forgotpassword extends React.Component {
  handleSubmit = values => {
    // values is the object passeed down from the hook to the callback function
    console.log(values);
  };
  render() {
    return (
      <RenderUseForm callback={this.handleSubmit} validate={validatepasswords}>
        {({ values, handleChange, handleSubmit, errors }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="password"
              name="password"
              value={values.password || ""}
              onChange={handleChange}
            />
            <input
              type="password"
              name="retypedpassword"
              value={values.retypedpassword || ""}
              onChange={handleChange}
            />
            {errors.missmatch && (
              <div className="error">{errors.missmatch}</div>
            )}
            <button type="submit">Submit</button>
          </form>
        )}
      </RenderUseForm>
    );
  }
}

```



Check out the examples folder for a full example on how this library works (examples are for both hooks and renderprop api)


## License

MIT © [Tevinthuku](https://github.com/Tevinthuku)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
