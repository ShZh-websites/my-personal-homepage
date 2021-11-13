

<h1 align="center">ShZh's homepage</h1>

<p align="center"><i>Codebase of ShZh's homepage, with HTML-first and mobile-first design</i></p>

<p align="center">
    <a href="https://sonarcloud.io/dashboard?id=ShZh-websites_my-personal-homepage" style="text-decoration:none" >
        <img src="https://sonarcloud.io/api/project_badges/measure?project=ShZh-websites_my-personal-homepage&metric=vulnerabilities" alt="sonarcloud"/>
    </a>
    <a href="https://github.com/ShZh-websites/my-personal-homepage" style="text-decoration:none" >
        <img src="https://img.shields.io/github/languages/code-size/ShZh-websites/my-personal-homepage" alt="repo size"/>
    </a>
  <a href="https://app.netlify.com/sites/sad-bardeen-bf5b4e/deploys" style="text-decoration:none">
        <img src="https://api.netlify.com/api/v1/badges/6e9453ef-0890-49a6-94c8-19546c95e5ec/deploy-status" alt="depolyment status"/>
    </a>
</p>

# Overview

I'm always wandering how to **combine better DX and UX** when making your personal website. Here is the best solution I've come up with so far.

For DX: [TailwindCSS](https://tailwindcss.com/) and [Alpine.js](https://alpinejs.dev/) are chosen so that almost **zero CSS and Javascript** are needed. Always select deployment platform with **CI/CD**, like Netlify and Vercel. Throw away framework like Vue and React. It's too heavy for your lightweight web application. **SSG** is all you need.

For UX: Other than key images like avatar which **directly embeded in HTML**, all of Images are **shrinked properly** and encoded with the new generation image format—**AVIF**, which will compress your images as much as possible. It doesn't matter if your browser does not support AVIF(such as browsers use Webkit), cause **PNG format is the fallback**. All images are hosting at [cloudinary](https://cloudinary.com/) to get benefit of its **powerful CDN**.

 You may click [shzh.me](https://shzh.me) to see the full view of my homepage.



# Benchmark

Lighthouse score(you may run this test locally in your Chrome browser):

<img src="assets/lighthouse.png" width=600px />

Google's [PageSpeed Inside](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fshzh.me%2F&tab=desktop) score:

<img src="./assets/page_speed_inside.png" height=225px />



# Scripts

These scripts are probably useful when contributing.

- `yarn start`: Runs the app in the development mode.
- `yarn add -D`: Add devdependency through yarn.
- `yarn build`: Bundle the app in the production mode.



# TODOs

There are more features and optimizaiton to be done.

- [ ] i18n support. ([#1](https://github.com/ShZh-websites/my-personal-homepage/issues/1))
- [ ] Dark mode support. ([#2](https://github.com/ShZh-websites/my-personal-homepage/issues/2))
- [ ] Rewrite hamburger button and add animation. ([#3](https://github.com/ShZh-websites/my-personal-homepage/issues/3))



# License

[Apache-2.0 License](LICENSE)

Copyright ©️ 2021 sh-zh-7