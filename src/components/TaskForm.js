import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index.js";

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      status: false,
    };
  }

  // componentDidMount(){
  //   if(this.state.id !== ''){
  //     if(this.props.checkTaskUpdate.id !== ''){
  //       this.setState({id : this.props.checkTaskUpdate.id});
  //       this.setState({name : this.props.checkTaskUpdate.name});
  //       this.setState({status : this.props.checkTaskUpdate.status});
  //     }
  //   }else {
  //     this.onClear();
  //   }

  // }

  static getDerivedStateFromProps(props, state) {
    if (props.checkTaskUpdate !== "") {
      console.log('state before',state);
      if (props.checkTaskUpdate.id !== state.id) {
        return props.checkTaskUpdate;
      }
    }
     else {
      if(state.id === '') {  //load lan dau
        console.log('state id === "" ',state );
        return null;      //k yeu cau cap nhat trang thai
      }
      else {    //load sau khi update
        console.log('state id !== "" ',state );
        return {
          id: "",
          name: "",
          status: false,
        };
      }
      
    }
  }

  onChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    if (name === "status") {
      value = value === "true" ? true : false;
    }
    this.setState({ [name]: value });
  };

  onCloseTaskForm2 = () => {
    // this.props.onCloseTaskFormSend();
    this.props.onCloseForm();
    this.onClear();
  };

  onSubmit = (event) => {
    event.preventDefault();
    // this.props.onTaskSend(this.state);
    if (this.state.id === "") {
      // this.onClear();
      this.props.onTaskSend(this.state);
    } else {
      this.props.onUpdate(this.state);
    }

    this.onClear();
    this.onCloseTaskForm2();
  };

  onClear = () => {
    this.setState({
      id: "",
      name: "",
      status: false,
    });
  };

  render() {
    if (this.props.isDisplayFormState === false) return "";
    else
      return (
        <div className="panel panel-warning">
          <div className="panel-heading">
            <h3 className="panel-title">
              {this.state.id === "" ? "Them cong viec" : "Cap nhat cong viec"}
              <button
                className="fas fa-times-circle pull-right"
                onClick={this.onCloseTaskForm2}
              ></button>
            </h3>
          </div>

          <div className="panel-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Ten: </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                />
              </div>
              <label>Trang thai:</label>

              <select
                className="form-control"
                name="status"
                value={this.state.status}
                onChange={this.onChange}
              >
                <option value={true}>Kích Hoạt</option>
                <option value={false}>Ẩn</option>
              </select>
              <br />

              <div className="text-center">
                <button type="submit" className="btn btn-warning">
                  <span className="fa fa-plus" />
                  &nbsp;Lưu Lại
                </button>
                &nbsp;
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={this.onClear}
                >
                  <span className="fa fa-times" />
                  &nbsp;Hủy Bỏ
                </button>
              </div>
            </form>
          </div>
        </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    isDisplayFormState: state.isDisplayForm,
    checkTaskUpdate: state.taskUpdate,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onTaskSend: (task) => {
      //return props
      dispatch(actions.add(task));
    },
    onCloseForm: () => {
      dispatch(actions.close());
    },
    onUpdate: (task) => {
      dispatch(actions.update2(task));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
