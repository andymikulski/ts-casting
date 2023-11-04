## Installation

1) Add `codegen.ts` to your project in the same directory as your `tsconfig.json`
2) `npm install -D ts-node ts-morph` (or `yarn add ts-node ts-morph -D`)
3) Optional: In your `package.json`, add a new script: `"codegen": "ts-node ./codegen.ts"`
4) Optional: There are a handful of settings at the top of `codegen.ts`, revise as necessary

## Usage

1) `ts-node codegen.ts` or (`npm run codegen` or `yarn codegen`)
2) You'll now find auto-generated TS files in your project!
3) You might need to reformat the files using your local prettier config/etc.