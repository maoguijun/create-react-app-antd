import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';

import {Button, Col, Row} from 'antd';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  // add = value => {   console.log(this.props)   const {dispatch} = this.props
  // dispatch({type: 'ADD', value}) } delete = value => {   const {dispatch} =
  // this.props   dispatch({type: 'DELETE', value}) }
  render() {
    const {Counter: {
        value
      }, addNumber, deleteNumber} = this.props
    console.log(this.props)
    return (
      <Row style={{
        textAlign: 'center',
        marginTop: '100px'
      }}>
        <Button type="primary" onClick={() => addNumber(1)}>+ 1</Button>
        <Button type="primary" onClick={() => addNumber(2)}>+ 2</Button>
        <Button type="primary" onClick={() => deleteNumber(1)}>- 1</Button>
        <Button type="primary" onClick={() => deleteNumber(2)}>- 2</Button>
        <Row>
          <Col>
            value
          </Col>
          <Col>
            {value}
          </Col>
        </Row>
      </Row>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    addNumber: (value) => ({type: 'ADD', value}),
    deleteNumber: (value) => ({type: 'DELETE', value})
  }, dispatch)
})
const mapStateToProps = (state, ownProps) => {
  console.log(state)
  return {Counter: state.Counter}
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);