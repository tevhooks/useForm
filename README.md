# @tevhooks/useform

> A react hook library meant to make it easy while dealing with hooks


## Install

```bash
npm install --save @tevhooks/useform
```

## Usage

```js
// validatepasswords.js
/**
 *validate password values.
 * */
export default values => {
  let errors = {}
  if(values.passord !== values.retypedpassword) {
    errors.missmatch = "The two passwords do not match"
  }
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

Check out the examples folder for a full example on how this library works


## License

MIT © [Tevinthuku](https://github.com/Tevinthuku)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
