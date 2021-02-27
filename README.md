# User authentication boilerplate (Token is stored on localStorage or sessionStorage)

## Quick start

`yarn install` or `npm install`

### P.S.

By default, the token is written to `localStorage`. If you want to written in `sessionStorage` then replace the following lines of code - `localStorage` on `sessionStorage`.

Path - src/components/App/useToken.js

```js
import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem('token'); // Here
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  };
  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    localStorage.setItem('token', JSON.stringify(userToken)); // Here
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token,
  };
}
```
