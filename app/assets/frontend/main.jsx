import TweetBox from "./components/TweetBox";
import TweetsList from "./components/TweetsList";

let mockTweets = [
  {id: 1, name: 'User 1', body: 'My #FirstTweet'},
  {id: 2, name: 'User 1', body: 'My #SecondTweet'},
  {id: 3, name: 'User 1', body: 'My #ThirdTweet'}
];

class Main extends React.Component {
    render() {
        return (
          <div className="container">
            <TweetBox />
            <TweetsList tweets={mockTweets} />
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
