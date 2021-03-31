import React from "react";
import "./litelements/catalog-component/catalog-component"

const App = (props) => {
    const self = props.self;
    return (
        <React.Fragment>
            <div class="slds-context-bar">
                <div class="slds-context-bar__primary">
                    <div class="slds-context-bar__item slds-no-hover">
                        <span class="slds-context-bar__label-action slds-context-bar__app-name">
                            <span class="slds-truncate" title="App Name">React POC</span>
                        </span>
                    </div>
                </div>
            </div>
            <div>
                <catalog-component />
            </div>
        </React.Fragment>
    );
};

export default App;

