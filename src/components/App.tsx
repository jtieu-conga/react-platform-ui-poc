import * as React from "react";

export const App = () => {
    return (
        <React.Fragment>
            <div className="slds-context-bar">
                <div className="slds-context-bar__primary">
                    <div className="slds-context-bar__item slds-no-hover">
                        <span className="slds-context-bar__label-action slds-context-bar__app-name">
                            <span className="slds-truncate" title="App Name">React POC</span>
                        </span>
                    </div>
                </div>
            </div>
            <div>
                <catalog-component />
            </div>
        </React.Fragment>
    )
}