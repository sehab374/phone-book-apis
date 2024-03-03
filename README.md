## Getting Started


First, run the development server:

```bash
npx ts-node src/index.ts
```
please test there by postman

Open [http://localhost:5000](http://localhost:5000) with your browser to see the result.

## Avaliable APIs

Open [http://localhost:5000/api/auth/login](http://localhost:5000/api/auth/login) Post Request to Login 

```bash
{
    "email":"",
    "password":""
}
```

Open [http://localhost:5000/api/auth/signup](http://localhost:5000/api/auth/signup) Post Request to Sign Up 

```bash
{
"fullName":"",
"email":"",
"password":"",
"number":""
}
```

Open [http://localhost:5000/api/contact](http://localhost:5000/api/contact) Get Request to add contact

```bash
token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcwOTQxMjk0MX0.RlcosaphRMMSfa7aZ9_S7Z_wQTmaLr9bb3FvM2raK3o
```


