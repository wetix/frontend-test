# Frontend Web Interview Test (Senior/Pro Level)

> This test is mainly to test out the understanding of web bundling and the differences between cjs, mjs and iife files.

## Mission: Complete the missing pieces of web bundling

Instead of coding (every developer able to do that, even the monkey), you as a senior/pro level should know how and what is web bundling for.


Components required :

- rollup@2.37.1

Notes:
You will need to install some rollup plugins in order to make this work.

### Expected Result

<br/>

**1. Complete the npm build**

Your should able to output following bundle files :

- **bundle.js** (IIFE js file without minify)
- **cjs/bundle.js** (Common js file without minify)
- **esm/bundle.js** (ES Module js file without minify)
- **bundle.min.js** (IIFE js file with minify)
- **cjs/bundle.min.js** (Common js file with minify)
- **esm/bundle.min.js** (ES Module js file with minify)

<br/>

**2. Able to display bundle size**

<img width="50%" src="https://user-images.githubusercontent.com/28108597/105315513-65a20280-5bfa-11eb-90f4-0168d137b34f.png" alt="frontend-test" />

<br/>

**3. Able to start a dev server**

Your dev server should run in port 9000.

<img width="50%" src="https://user-images.githubusercontent.com/28108597/105316409-c41bb080-5bfb-11eb-830d-13aa3e2afcd6.png" alt="yarn dev" />

<br/>

**4. Able to support typescript and sass**

Your dev server should able to compile typescript and sass.

<img width="50%" src="https://user-images.githubusercontent.com/28108597/105319529-f3ccb780-5bff-11eb-993f-b37a9d9aa6bd.png" alt="error" />

**5. Able to import css file and compile to bundle.css**

Your bundle.css should be reside in `public/bundle.css`.

<br/>

To do this test, you should fork this repository and implement your solution inside your forked repository.
