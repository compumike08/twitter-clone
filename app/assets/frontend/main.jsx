class Main extends React.Component {
    render() {
        return (
          <div className="container">
            
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
