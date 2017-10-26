var Search = (query) => (
  //console.log('search query:', query),
  //console.log('form control:', $('.form-control').val()),
  <div className="search-bar form-inline">
    <input className="form-control" type="text" />
    <button className="btn hidden-sm-down" onClick={() => query.clickhandler($('.form-control').val())}>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
