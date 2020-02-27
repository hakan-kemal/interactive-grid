import React, { Component } from 'react';
import Cell from './Cell';

export default class Grid extends Component {
  render() {
    return (
      <div className='Grid'>
        <div>
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
        </div>
        <div>
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
        </div>
        <div>
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
        </div>
        <div>
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
        </div>
        <div>
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
        </div>
      </div>
    );
  }
}
