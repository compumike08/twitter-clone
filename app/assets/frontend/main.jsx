import TweetBox from "./components/TweetBox";
import TweetsList from "./components/TweetsList";

class Main extends React.Component {
    render() {
        return (
          <div className="container">
            <TweetBox />
            <TweetsList />
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
