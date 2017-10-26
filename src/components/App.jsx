class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      videoDisplay: this.props.data[0]
    };
  }
  
  selectNewVideo(event) {
    // console.log(event);
    console.log('event.target:', event.target);
    // console.log('event.value:', event.value);
    this.setState({
      videoDisplay: event
    });
  }
  
  render() {
    return ( 
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.videoDisplay} />
          </div>
          <div className="col-md-5">
            <VideoList data={this.state.data}
                       clickfunction={this.selectNewVideo.bind(this)} />
          </div>
        </div>
      </div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
