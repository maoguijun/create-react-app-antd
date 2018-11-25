import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';

import {Button, Col, Row} from 'antd';
import * as actions from '../actions';

class Excel2json extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const {} = this.props
    console.log(this.props)
    return (
      <Row
        style={{
        textAlign: 'center',
        width: 1000,
        margin: '100px auto 0'
      }}></Row>
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
  return {Excel2json: state.Excel2json}
}
export default connect(mapStateToProps, mapDispatchToProps)(Excel2json);