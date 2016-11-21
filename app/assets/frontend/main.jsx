import TweetBox from "./components/TweetBox";
import TweetsList from "./components/TweetsList";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = { tweetsList: [] };

    //Bind 'this' context to component functions
    this.addTweet = this.addTweet.bind(this);
  }

  addTweet(tweetToAdd) {
    let newTweetsList = this.state.tweetsList;

    newTweetsList.unshift({
      id: Date.now(),
      name: 'Guest',
      body: tweetToAdd
    });

    this.setState({
      tweetsList: newTweetsList
    });
  }

  render() {
      return (
        <div className="container">
          <TweetBox sendTweet={this.addTweet} />
          <TweetsList tweets={this.state.tweetsList} />
        </div>
      );
  }
}

let documentReady = () => {
    let reactNode = document.getElementById('react');
    if(reactNode) {
        ReactDOM.render(<Main />, reactNode);
    }
};

$(documentReady);
