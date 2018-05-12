import * as React from 'react';

import { Navbar } from '../components';

export default class PartnerContainer extends React.Component<{}, {}> {

    constructor(props: {}) {
        super(props);
    }

    public componentDidMount() {
        // empty block
    }

    public render() {
        return (
            <Navbar/>
        );
    }
}