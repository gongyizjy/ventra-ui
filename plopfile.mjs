export default function (plop) {
  plop.setGenerator("component", {
    description: "Create a new React component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name (PascalCase):",
      },
    ],
    actions: [
      {
        type: "add",
        path: "packages/react/{{kebabCase name}}/package.json",
        templateFile: "template/component/package.json.hbs",
      },
      {
        type: "add",
        path: "packages/react/{{kebabCase name}}/eslint.config.mjs",
        templateFile: "template/component/eslint.config.mjs.hbs",
      },
      {
        type: "add",
        path: "packages/react/{{kebabCase name}}/tsconfig.json",
        templateFile: "template/component/tsconfig.json.hbs",
      },
      {
        type: "add",
        path: "packages/react/{{kebabCase name}}/README.md",
        templateFile: "template/component/README.md.hbs", 
      },
      {
        type: "add",
        path: "packages/react/{{kebabCase name}}/src/index.ts",
        templateFile: "template/component/src/index.ts.hbs",
      },
      {
        type: "add",
        path: "packages/react/{{kebabCase name}}/src/{{kebabCase name}}.tsx",
        templateFile: "template/component/src/component.tsx.hbs",
      },
      {
        type: "add",
        path: "packages/react/{{kebabCase name}}/src/{{kebabCase name}}.scss",
        templateFile: "template/component/src/component.scss.hbs",
      },
    ],
  });
}
