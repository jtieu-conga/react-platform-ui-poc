import React, { useState } from "react";
import "extensible-ui-framework";

const mockData = {
    mac: [{
        id:'1',
        productTitle:"MacBook Air",
        isChecked: false,
        productDescription: "Power. It’s in the Air."
    },{
        id:'2',
        productTitle:"MacBook Pro 13\"",
        isChecked: false,
        productDescription: "All systems Pro."
    },{
        id:'3',
        productTitle:"MacBook Pro 16\"",
        isChecked: false,
        productDescription: "The best for the brightest."
    },{
        id:'4',
        productTitle:"iMac",
        isChecked: false,
        productDescription: "The all-in-one for all."
    }],
    ipad: [{
        id:'1',
        productTitle:"iPad Pro",
        isChecked: false,
        productDescription: "Your next computer is not a computer."
    },{
        id:'2',
        productTitle:"iPad Air",
        isChecked: false,
        productDescription: "Powerful. Colorful. Wonderful."
    },{
        id:'3',
        productTitle:"iPad",
        isChecked: false,
        productDescription: "Delightfully capable. Surprisingly affordable."
    },{
        id:'4',
        productTitle:"iPad Mini",
        isChecked: false,
        productDescription: "Mini just got mightier."
    }]
};


const App = () => {
    const [dataStr, setDataStr] = useState(JSON.stringify(mockData.mac));
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
            {/* <div>
                <button onClick={() => {setDataStr(JSON.stringify(mockData.mac))}}>Mac</button>
                <button onClick={() => {setDataStr(JSON.stringify(mockData.ipad))}}>iPad</button>
            </div> */}
            <div>
                <catalog-component dataStr={dataStr} view="List" />
            </div>
        </React.Fragment>
    );
};

export default App;

