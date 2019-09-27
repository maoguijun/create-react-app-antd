import { Col, Input, Row, Button } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import SWHP from 'sensitive-word-helper-plus';
import './index.less';
const { TextArea } = Input;

class Sensitive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time1: '',
      time2: ''
    };
  }

  onChange = (e, name) => {
    const {
      target: { value }
    } = e;
    this.setState({
      [`${name}`]: value
    });
  };

  submit = () => {
    const { keywords, replacement, step, text } = this.state;
    const keywords_ = keywords.split('~');
    const initObj = {
      keywords: keywords_
    };
    if (step) {
      initObj.step = Number(step);
    }
    if (replacement) {
      initObj.replacement = replacement;
    }
    const time1Start = Number(new Date());
    const swhp = new SWHP(initObj);
    const time1End = Number(new Date());

    const time2Start = Number(new Date());
    const result = swhp.filterSync(text);
    const time2End = Number(new Date());
    // console.log(result, swhp);
    this.setState({
      filterText: result.text,
      time1: time1End - time1Start,
      time2: time2End - time2Start
    });
  };

  render() {
    const {
      keywords,
      replacement,
      step,
      text,
      filterText,
      time1,
      time2
    } = this.state;
    return (
      <Row className={'sensitive-wrap'}>
        <Col span={12} className={'left-wrap'} key={'left'}>
          <Row className='item'>
            <Col span={6} className='label'>
              敏感词
            </Col>
            <Col span={14}>
              <TextArea
                value={keywords}
                onChange={e => this.onChange(e, 'keywords')}
                placeholder='多个敏感词用 ~ 隔开'
              />
            </Col>
          </Row>
          <Row className='item'>
            <Col span={6} className='label'>
              步数
            </Col>
            <Col span={14}>
              <Input
                value={step}
                onChange={e => this.onChange(e, 'step')}
                placeholder='非负整数, 可以不输人， 默认为 3'
              />
            </Col>
          </Row>
          <Row className='item'>
            <Col span={6} className='label'>
              需要替换的符号
            </Col>
            <Col span={14}>
              <Input
                value={replacement}
                onChange={e => this.onChange(e, 'replacement')}
                placeholder='默认为 *'
              />
            </Col>
          </Row>
          <Row className='item'>
            <Col span={6} className='label'>
              需要检验的文字
            </Col>
            <Col span={14}>
              <TextArea
                value={text}
                onChange={e => this.onChange(e, 'text')}
                maxLength={20000}
                
              />
            </Col>
          </Row>
          <Row className='item'>
            <Col span={14} offset={6}>
              <Button type='primary' onClick={this.submit}>
                校验
              </Button>
            </Col>
          </Row>
        </Col>
        <Col span={12} className={'right-wrap'} key={'right'}>
          <Row className='item'>
            <Col span={6} className='label'>
              构建节点树耗时
            </Col>
            <Col span={14}>{time1} ms</Col>
          </Row>
          <Row className='item'>
            <Col span={6} className='label'>
              文章过滤耗时
            </Col>
            <Col span={14}>{time2} ms</Col>
          </Row>
          <Row className='item'>
            <Col span={6} className='label'>
              过滤后的文字
            </Col>
            <Col span={14}>{filterText}</Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      ...actions
    },
    dispatch
  )
});
const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return { Sensitive: state.Sensitive };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sensitive);
