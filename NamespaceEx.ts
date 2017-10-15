///<reference path="MyNamespaceEx.ts" />

//creating an object of type interface
let strInterface: MyNamespaceEx.DisplayMessage={str:"Hello"};

//calling the namespace function and passing the interface object

MyNamespaceEx.printMessage(strInterface);
