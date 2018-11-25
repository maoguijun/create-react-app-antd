import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';

import {Button, Col, Row} from 'antd';
import * as actions from '../actions';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const {
      Counter: {
        value,
        stars
      },
      addNumber,
      deleteNumber,
      getStars
    } = this.props
    console.log(this.props)
    return (
      <Row
        style={{
        textAlign: 'center',
        width: 1000,
        margin: '100px auto 0'
      }}>
        <Button type="primary" onClick={() => addNumber(1)}>+ 1</Button>
        <Button type="primary" onClick={() => addNumber(2)}>+ 2</Button>
        <Button type="primary" onClick={() => deleteNumber(1)}>- 1</Button>
        <Button type="primary" onClick={() => deleteNumber(2)}>- 2</Button>
        <Row>
          <Col span={6}>
            value
          </Col>
          <Col span={18}>
            {value}
          </Col>
        </Row>
        <Button type="primary" onClick={() => getStars()}>get stars</Button>
        <Row>
          <Col span={6}>
            stars
          </Col>
          <Col span={18}>
            {stars}
          </Col>
        </Row>
      </Row>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    ...actions
  }, dispatch)
})
const mapStateToProps = (state, ownProps) => {
  console.log(state)
  return {Counter: state.Counter}
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);