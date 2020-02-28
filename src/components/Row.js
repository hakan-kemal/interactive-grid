import React, { Component } from 'react';
import Cell from './Cell';

export default class Row extends Component {
  render() {
    return (
      <Cell
        count={this.props.cells}
        onClick={this.props.onClick}
        highlight={this.props.highlight}
      />
    );
  }
}
