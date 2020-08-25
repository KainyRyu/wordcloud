import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
<<<<<<< HEAD

const databaseURL = "https://wordcloud-359a4.firebaseio.com";

class Words extends React.Component {
=======

const databaseURL = "https://wordcloud-359a4.firebaseio.com";

class Words extends React. Component {
>>>>>>> 4bb97d9592fb726b397a27eb9b839855632ae840
    constructor() {
        super();
        this.state = {
            words: {}
        };
    }
<<<<<<< HEAD
    
    _get() {
        fetch(`${databaseURL}/words.json`)
        .then(res => {
            if(res.status != 200) {
                throw new Error(res.statusText);
            }
            return res.json()
        })
        // .then((words) => console.log(words));
        .then(words => this.setState({ words: words }));
=======
    _get() {
        fetch(`${databaseURL}/words.json`).then(res => {
            if(res.status != 200) {
                throw new Error(res.statusText);
            }
            return res.json();
        }).then(words => this.setState({ words: words }));
>>>>>>> 4bb97d9592fb726b397a27eb9b839855632ae840
    }
    shouldComponentUpdate(nextProps, nextState) {
        return nextState.words != this.state.words;
    }
<<<<<<< HEAD
    componentDidMount() {
=======
    componenetDidMount() {
>>>>>>> 4bb97d9592fb726b397a27eb9b839855632ae840
        this._get();
    }
    render() {
        return (
            <div>
                {Object.keys(this.state.words).map(id => {
                    const word = this.state.words[id];
                    return (
                        <div key={id}>
                            <Card>
                                <CardContent>
                                    <Typography color="textSecondary" gutterBottom>
                                        Weight: {word.weight}
                                    </Typography>
                                    <Typography variant="h5" component="h2">
                                        {word.word}
                                    </Typography>
                                </CardContent>
                            </Card>
                            <br/>
                        </div>
                    );
                })}
            </div>
        )
    }
}

export default Words;