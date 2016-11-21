export default class TweetBox extends React.Component {
  constructor(props) {
    super(props);

    //Bind 'this' context to component functions
    this.sendTweet = this.sendTweet.bind(this);
  }

  sendTweet(event) {
    event.preventDefault();

    this.props.sendTweet(this.refs.tweetTextArea.value);
    this.refs.tweetTextArea.value = '';
  }

  render() {
    return (
      <div className="row">
        <form onSubmit={this.sendTweet} className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <textarea ref="tweetTextArea" id="new-tweet-text-input" className="materialize-textarea" />
              <label htmlFor="new-tweet-text-input">What's happening?</label>
              <button type="submit" className="btn right">Tweet</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
