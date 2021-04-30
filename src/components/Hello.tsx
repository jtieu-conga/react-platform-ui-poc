import * as React from "react";
import { Card, Button } from '@salesforce/design-system-react';

export const Hello = () => {
    return (
        <Card heading='I am a react component' bodyClassName="slds-p-horizontal_small">
            <h1>This is a test:</h1>
            <Button label="Hello Button" />
            <catalog-component />
        </Card>
    )
}