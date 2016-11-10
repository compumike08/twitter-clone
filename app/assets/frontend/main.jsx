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
  }


  render() {
      return (
        <div className="container">
          <TweetBox />
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
