# This is where SETS Platform be built with NextJS

# Rules
1. To protect "master" branch, which is where our main product lies. Please commits your code only to "develop" branch. Project Manager will be the one who merges "develop" branch to "master" branch.
1. Remember to comment code clearly so that eventhough who don't learn NextJS can understand the structure of code.

# File Structure
1. "/PlatformDescription" folder is for containing detailed description and design of web platform components.
1. "/pages" and "/components" folder is for containing UI and controller based on DDD design.
1. "/public" is for containing resources related to UI.
1. "/application" folder is for containing __contractors__. It is called as Application Layer based on DDD design.
	* __contractors__ are people who takes the job from customers. They do not build the house but will find (specialists) builders, electricians, ... to do the job. They will then gather the result and deliver it to customers. 
1. "/domain" folder is for containing business logic, __specialists__. It can also be called as Domain Layer based on DDD design.
	* __specialists__ are people who build the house.
1. "/node_modules" folder is for containing packages. 

# NextJS guideline

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
