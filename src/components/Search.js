import React, { Component } from "react";
import * as actions from '../actions/index.js';
import {connect} from 'react-redux';

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      keyword : ''
    }
  }

  onChange = (event) => {
    this.setState({keyword : event.target.value});
  }

  onSearch = () => {
    // this.props.onSearch2(this.state.keyword);
    this.props.nameSearch(this.state.keyword);   
  }

  render() {
    return (
      <div className="input-group">
        <input
          name="keyword"
          type="text"
          className="form-control"
          placeholder="Nhập từ khóa..."
          onChange={this.onChange}
          value={this.state.keyword}
        />
        <span className="input-group-btn">
          <button className="btn btn-primary" type="button" onClick={this.onSearch}>
            <span className="fa fa-search mr-5"></span>Tìm
          </button>
        </span>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    nameSearch : (name) => {
      dispatch(actions.search(name));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Search);
