var MyNamespaceEx;
(function (MyNamespaceEx) {
    function printMessage(msg) {
        console.log("Message passed is " + msg.str);
    }
    MyNamespaceEx.printMessage = printMessage;
})(MyNamespaceEx || (MyNamespaceEx = {}));
//# sourceMappingURL=MyNamespaceEx.js.map