const { getOptions } = require('loader-utils');

function tplLoader (source) {
  
  const { consoleLog } = getOptions(this);

  if (consoleLog) {
    return `
      export default (component, { template, data, methods }) => {

        if (Object.prototype.toString.call(component) !== '[object Object]') {
          throw new Error('component must be the type of Object.');
        }

        if (template) {
          console.log(\`${source}\`);
        }

        if (component.data && data) {
          console.log(component.data());
        }

        if (component.methods && methods) {
          console.log(component.methods);
        }

        component.template = \`${source}\`;

        return component;
      }
    `
  } else {
    return `
      export default (component, { template, data, methods }) => {

        if (Object.prototype.toString.call(component) !== '[object Object]') {
          throw new Error('component must be the type of Object.');
        }

        component.template = \`${source}\`;

        return component;
      }
    `
  }

  
}

module.exports = tplLoader;