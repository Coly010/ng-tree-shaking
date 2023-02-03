# Ng Tree Shaking Issue

This repo contains three branches that illustrate a Tree Shaking issue introduced in Angular v15.

The three branches are:

- `angular-v14-es2022`
- `angular-v15-es2022`
- `angular-v15-es2020`

## The Problem

With Angular V15, when`"target": "es2022` is set in `tsconfig.json`, `UnusedService` a service that is not used in the application, is not tree shaken from the bundle.

This can be reproduced by doing the following"

1. Checkout `angular-v15-es2022`
2. Run `npm install`
3. Run `npm run build`
4. Run `npm run check-tree-shaking`

You'll see a line output stating that `grep` managed to find the `UnusedService` in the bundle.

### This is a regression

To prove this is a regression, you can do the following:

1. Checkout `angular-v14-es2022`
2. Run `npm install`
3. Run `npm run build`
4. Run `npm run check-tree-shaking`

You'll not see a line output stating that `grep` managed to find the `UnusedService` in the bundle.

### Futhermore

If you set the `"target": "es2020` in `tsconfig.json` with Angular v15, the service is tree shaken correctly.

1. Checkout `angular-v15-es2020`
2. Run `npm install`
3. Run `npm run build`
4. Run `npm run check-tree-shaking`

You'll not see a line output stating that `grep` managed to find the `UnusedService` in the bundle.
