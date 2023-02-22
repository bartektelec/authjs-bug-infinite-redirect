# Bug reproduction repo

This repo is a reproduction repo for Auth.js issue:
https://github.com/nextauthjs/next-auth/issues/6174

Run the app with `npm run dev`, when clicked through `<a>` tags on the main page the router redirects just fine.
But if you type the URL manually in the browser address bar it will end up in infinite redirect.
This is exactly how Auth.js redirect to this page

Type in `http://localhost:5174/auth/error` in address bar. You should get a `ERR_TOO_MANY_REDIRECTS`
This also applies to `http://localhost:5174/auth/signin` and `http://localhost:5174/auth/signout`.

However, if you go to `hooks.server.ts` and uncomment the set of urls that are slightly changed, and not exactly the same as the defaults Auth.js provides it will work just fine. Then try

```
http://localhost:5174/auth/x/error
http://localhost:5174/auth/x/signin
http://localhost:5174/auth/x/signout
```