- Converting a Function to a Class
    You can convert a function component like Clock to a class in five steps:

   1. Create an ES6 class, with the same name, that extends React.Component.
   2. Add a single empty method to it called render().
   3. Move the body of the function into the render()   method.
   4. Replace props with this.props in the render() body.
    Delete the remaining empty function declaration.

-