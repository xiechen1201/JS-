function tplLoader(source) {
  return `
    export default (component, { template, data, mehtods }) => {

        if(Object.prototype.toString.call(component) !== '[object Object]'){
            throw new Error('component 必须是一个对象！')
        }

        if(template){
            console.log(\`${source}\`)
        }

        if(component.data && data){
            console.log(component.data())
        }

        if(component.mehtods && mehtods){
            console.log(component.mehtods)
        }

        component.template = \`${source}\`;

        return component;
    }`;
}

modules.exports = tplLoader;
