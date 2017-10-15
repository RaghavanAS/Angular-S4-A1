namespace MyNamespaceEx{
    export interface DisplayMessage{
        str:string;
    }
     export function printMessage(msg:DisplayMessage) {
        console.log(`Message passed is ${msg.str}`);
    }
}

