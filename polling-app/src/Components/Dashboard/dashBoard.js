import React from "react";
import { Navbar, Card, Button } from "react-bootstrap";
import { addPollAction } from "../../Redux/Action/Poll/getPollAction";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = () => {
    this.props.AddPollStatus();
  };
  componentDidUpdate = () => {
    // console.log(this.props.addPollStatus.response.length);
  };
  render() {
    return (
      <div>
        <Navbar className="navbar" bg="dark" variant="dark">
          <Navbar.Brand href="#home">PollingApp</Navbar.Brand>
          <Link to="/dashboard/addpoll">
            <Button variant="success">Add Poll</Button>
          </Link>
          <Link to="/dashboard/updatepoll" className="ml-4">
            <Button variant="success">Update Poll</Button>
          </Link>
        </Navbar>
        <div className="login">
          <h1>Take Poll</h1>
        </div>
        {this.props.addPollStatus.response &&
          this.props.addPollStatus.response.length &&
          this.props.addPollStatus.response.map((val, key) => {
            return (
              <Card style={{ margin: "40px 60px" }} className={"card"}>
                <Card.Body>
                  <Card.Title>Title : {val.title} </Card.Title>
                  Options :
                  <ul>
                    {val.options.map(res => {
                      return (
                        <li>
                          {res.option}
                          <span>{res.vote}</span>
                        </li>
                      );
                    })}
                  </ul>
                  <hr />
                </Card.Body>
              </Card>
            );
          })}
      </div>
    );
  }
}
const getProps = state => {
  return {
    addPollStatus: state.AddPollStatus
  };
};
const dispatchProps = dispatch => ({
  AddPollStatus: () => dispatch(addPollAction())
});
export default connect(getProps, dispatchProps)(DashBoard);
