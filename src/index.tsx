import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'extensible-ui-framework';

import { App } from "./components/App";

(window as any).mount = (el: any) => {
    ReactDOM.render(
        <App />,
        el
    );
}

