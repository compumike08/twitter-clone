import TweetBox from "./components/TweetBox";
import TweetsList from "./components/TweetsList";
import TweetStore from "./stores/TweetStore";

import TweetActions from "./actions/TweetActions";
TweetActions.getAllTweets();

let getAppState = () => {
  return {tweetsList: TweetStore.getAll()};
};

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = getAppState();

    //Bind 'this' context to component functions
    this.addTweet = this.addTweet.bind(this);
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    TweetStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    TweetStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(getAppState());
  }

  addTweet(tweetToAdd) {
    /*$.post("/tweets", {body: tweetToAdd})
      .success(savedTweet => {
        let newTweetsList = this.state.tweetsList;

        newTweetsList.unshift(savedTweet);

        this.setState(this.formattedTweets(newTweetsList));
      })
      .error(error => console.log(error));*/
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
