export default class TweetBox extends React.Component {
  render() {
    return (
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <textarea id="new-tweet-text-input" className="materialize-textarea" />
              <label htmlFor="new-tweet-text-input">What's happening?</label>
              <button className="btn right">Tweet</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
