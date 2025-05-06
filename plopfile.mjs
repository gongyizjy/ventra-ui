export default function (plop) {
  plop.setGenerator('component', {
    description: 'Create a new React component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name (PascalCase):'
      }
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'packages/react/{{kebabCase name}}',
        base: '.plop-templates/component',
        templateFiles: '.plop-templates/component/**'
      }
    ]
  });
}