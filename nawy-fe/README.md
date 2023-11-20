
## Getting Started
1. First run `npm i` to install all the dependencies used. 
2. Then create a `.env.local` file in the same level as `package.json` and add `BACKEND_URI` to it, which represents the URI of the backend endpoints.
   It should be like this `http://localhost:3000`.
3. Then run `npm run dev -- p <port number>`, replace `<port number>` with a port number different from the backend. It should look like this `npm run dev -- -p 3001` 

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
