
import React from 'react';

export class Contents extends React.Component {

    //allows html in JAVASCRIPT
    render() {

        //return html
        return (
            <div className="Content">
                <h1>Hello World!!</h1>

                <h2>It is {new Date().toLocaleTimeString()}.</h2>

            </div >

        );
    }
}

