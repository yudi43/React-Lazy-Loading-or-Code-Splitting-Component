# React-Lazy-Loading-or-Code-Splitting-Component
This component is reusable and can be used anywhere you want lazy loading in your app.

How to use:

We use webpack in React for bundling your code and pushing it to the server, sometimes we need to bundle items separately. Which gives us the power of loading components only when we need them. This is be done using lazyLoading or CodeSplitting

1. Implement the Higher Order Component folder (HOC) in src.
2. Create file asyncComponent.
3. use its functionality to load any component by passing it to the async component. (This is shown in the App.js)
