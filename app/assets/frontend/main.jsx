import TweetBox from "./components/TweetBox";
import TweetsList from "./components/TweetsList";

let mockTweets = [
  {id: 1, name: 'User 1', body: 'My #FirstTweet'},
  {id: 2, name: 'User 1', body: 'My #SecondTweet'},
  {id: 3, name: 'User 1', body: 'My #ThirdTweet'}
];

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = { tweetsList: mockTweets };

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
    ReactDOM.render(
        <Main />,
        document.getElementById('react')
    );
};

$(documentReady);
