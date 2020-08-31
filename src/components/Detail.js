import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


export default class Detail extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Card>
                <CardContent>
                    {this.props.match.params.textID}
                </CardContent>                
            </Card>
        )
    }
}
