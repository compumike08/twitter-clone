import TweetBox from "./components/TweetBox";
import TweetsList from "./components/TweetsList";

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {tweetsList: []};

        //Bind 'this' context to component functions
        this.addTweet = this.addTweet.bind(this);
    }

    componentDidMount() {
        $.ajax("/tweets")
            .success(data => this.setState({tweetsList: data}))
            .error(error => console.log(error));
    }

    addTweet(tweetToAdd) {
        $.post("/tweets", {body: tweetToAdd})
            .success(savedTweet => {
                let newTweetsList = this.state.tweetsList;

                newTweetsList.unshift({
                    id: savedTweet.id,
                    name: savedTweet.name,
                    body: savedTweet.body,
                    user_id: savedTweet.user_id,
                    created_at: savedTweet.created_at,
                    updated_at: savedTweet.updated_at
                });

                this.setState({
                    tweetsList: newTweetsList
                });
            })
            .error(error => console.log(error));
    }

    render() {
        return (
            <div className="container">
                <TweetBox sendTweet={this.addTweet}/>
                <TweetsList tweets={this.state.tweetsList}/>
            </div>
        );
    }
}

let documentReady = () => {
    let reactNode = document.getElementById('react');
    if (reactNode) {
        ReactDOM.render(<Main />, reactNode);
    }
};

$(documentReady);
