class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      videoDisplay: this.props.data[0],
      query: 'LeBron'
    };
    
    this.selectNewVideo = this.selectNewVideo.bind(this);
    this.getSearchInput = this.getSearchInput.bind(this);
  }
  
  componentDidMount() {
    let data = {
      key: 'AIzaSyCE3Yh9-RTnlZ4CtoEdxr62mR26Cz_em0U',
      q: this.state.query,
      maxResults: 5,
      part: 'snippet',
      type: 'video'
    };
    $.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search',
      data: data,
      success: function(data) {
        console.log('my youtube data bro:', data);
        this.setState({
          data: data.items,
          videoDisplay: data.items[0]
        });
      }.bind(this),
      dataType: 'json'
    });
    
  }
  
  getSearchInput(input) {
    //debugger;
    //console.log('SFI:', input);
    this.setState({
      query: input
    });
    //console.log('should be updated query:', this.state.query);
  }
  
  selectNewVideo(event, n) {
    this.setState({
      videoDisplay: event
    });
  }
  
  render() {
    return ( 
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search clickhandler={this.getSearchInput} />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.videoDisplay} />
          </div>
          <div className="col-md-5">
            <VideoList data={this.state.data}
                       clickfunction={this.selectNewVideo} />
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
