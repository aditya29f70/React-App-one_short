

// pascalCasing (cambel style) -> react develper aspect to follow -> in react commponent we always follow pascalCasing
//  now we have to descide when ever we call this component how should this will give me UI
function Message(){
    // the syntex which is used here is called --> JSX -> java Script XML
    // so by it , this code (h1) it's gonna complie down under the js go --> babeljs.io/repl -> we can see how this code converted into js
    // great thing about jsx is that it allow us to make dynamic components using -> {} braces -> using it we can write any js expression
    // we can  use directly variable 'name ' or getName js fn and also can use if and else condition statement
    const name= ''
    if (name)
        return <h1>Hellow {name}</h1>;
    return <h1>Helow World</h1>
}

// for use it we have to explort it as default object of this module

export default Message; 
// now go to app compent and use this app component