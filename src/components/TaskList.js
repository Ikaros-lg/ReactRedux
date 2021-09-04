import React, { Component } from "react";
import TaskItem from "./TaskItem";
import { connect } from "react-redux";
import * as actions from "../actions/index.js";

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName: "",
      filterStatus: -1, //all:-1     active:1        deactive:0
    };
  }

  onChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    if (name === "filterStatus") {
      value = parseInt(value);
    }
    // this.props.onFilter(
    //   this.state.filterName = name === 'filterName' ? value : this.state.filterName,
    //   this.state.filterStatus = name === 'filterStatus' ? value : this.state.filterStatus
    // );
    this.setState({ [name]: value });
    this.props.filterTaskNS({
      filterName: name === "filterName" ? value : this.state.filterName,
      filterStatus: name === "filterStatus" ? value : this.state.filterStatus,
    });
  };

  render() {
    // console.log(this.props.taskSend);

    var tasks = this.props.taskSend;
    var filterTask = this.props.filterState;
    var searchByName = this.props.searchName;
    var sortState = this.props.sortState;


    if (filterTask.filterName !== "") {
      console.log(filterTask.filterName);
      var tasks = tasks.filter((item) => {
        if (item.name.indexOf(filterTask.filterName) !== -1) return item;
      });
    }

    if (filterTask.filterStatus === 1) {
      var tasks = tasks.filter((item) => {
        if (item.status === true) return item;
      });
    }

    if (filterTask.filterStatus === 0) {
      var tasks = tasks.filter((item) => {
        if (item.status === false) return item;
      });
    }

    if (filterTask.filterStatus === -1) {
      var tasks = tasks.filter((item) => {
        return item;
      });
    }

    if(searchByName !== ''){
      var tasks = tasks.filter((item) => {
        if(item.name.includes(searchByName))
        return item;
      })
    }

    if(sortState.by === 'name'){
      var tasks = tasks.sort((a, b) => {
        if(a.name > b.name) return sortState.value;
        else if(a.name < b.name) return -sortState.value;
        else return 0;
      })
    }

    if(sortState.by === 'status'){
      var tasks = tasks.sort((a, b) => {
        if(a.status > b.status) return -sortState.value;
        else if(a.status < b.status) return +sortState.value;
        else return 0;
      })
    }

    var taskItem = tasks.map((item) => {
      return (
        <TaskItem
          key={item.id}
          id={item.id}
          name={item.name}
          status={item.status}
        />
      );
    });

    // var taskItem = tasks.map((item) => {
    //   return <TaskItem key={item.id} id={item.id} name={item.name} status={item.status}
    //   onChangeStatus={this.props.onChangeStatus}
    //   onDelete2={this.props.onDelete}
    //   onUpdate2={this.props.onUpdate}
    //   />
    // })
    return (
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th className="text-center">STT</th>
            <th className="text-center">Tên</th>
            <th className="text-center">Trạng Thái</th>
            <th className="text-center">Hành Động</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>

            <td>
              <input
                type="text"
                className="form-control"
                name="filterName"
                value={this.state.filterName}
                onChange={this.onChange}
              />
            </td>

            <td>
              <select
                className="form-control"
                name="filterStatus"
                value={this.state.filterStatus}
                onChange={this.onChange}
              >
                <option value={-1}>Tất Cả</option>
                <option value={0}>Ẩn</option>
                <option value={1}>Kích Hoạt</option>
              </select>
            </td>
            <td></td>
          </tr>

          {/* Loop */}
          {/* <TaskItem/> */}
          {taskItem}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    taskSend: state.task, //return props
    filterState: state.filter,
    searchName: state.search,
    sortState : state.sort,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    filterTaskNS: (filter) => {
      dispatch(actions.filterTable(filter));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
