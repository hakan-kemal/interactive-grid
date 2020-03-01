import React, { Component } from 'react';
import Cell from './Cell';

export default class Grid extends Component {
  state = {
    cells: new Array(100).fill(0),
    flashCells: new Array(100).fill(false)
  };

  renderCell(i) {
    return (
      <Cell
        count={this.state.cells[i]}
        onClick={() => this.onClick(i)}
        flashCell={this.state.flashCells[i]}
      />
    );
  }

  containsFibonacciSequence = (main, sub) => {
    let status = sub.every((i => v => (i = main.indexOf(v, i) + 1))(0));
    return status;
  }

  onClick = i => {
    let newCells = [...this.state.cells];
    let newFlashCells = [...this.state.flashCells];
    if (i >= 0 && i <= 9) {
      for (let index = 0; index < 10; index++) {
        newCells[index] += 1;
        newFlashCells[index] = true;
      }
      if (i === 0) {
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newCells[i + 40] += 1;
        newCells[i + 50] += 1;
        newCells[i + 60] += 1;
        newCells[i + 70] += 1;
        newCells[i + 80] += 1;
        newCells[i + 90] += 1;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        newFlashCells[i + 40] = true;
        newFlashCells[i + 50] = true;
        newFlashCells[i + 60] = true;
        newFlashCells[i + 70] = true;
        newFlashCells[i + 80] = true;
        newFlashCells[i + 90] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 1) {
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newCells[i + 40] += 1;
        newCells[i + 50] += 1;
        newCells[i + 60] += 1;
        newCells[i + 70] += 1;
        newCells[i + 80] += 1;
        newCells[i + 90] += 1;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        newFlashCells[i + 40] = true;
        newFlashCells[i + 50] = true;
        newFlashCells[i + 60] = true;
        newFlashCells[i + 70] = true;
        newFlashCells[i + 80] = true;
        newFlashCells[i + 90] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 2) {
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newCells[i + 40] += 1;
        newCells[i + 50] += 1;
        newCells[i + 60] += 1;
        newCells[i + 70] += 1;
        newCells[i + 80] += 1;
        newCells[i + 90] += 1;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        newFlashCells[i + 40] = true;
        newFlashCells[i + 50] = true;
        newFlashCells[i + 60] = true;
        newFlashCells[i + 70] = true;
        newFlashCells[i + 80] = true;
        newFlashCells[i + 90] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 3) {
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newCells[i + 40] += 1;
        newCells[i + 50] += 1;
        newCells[i + 60] += 1;
        newCells[i + 70] += 1;
        newCells[i + 80] += 1;
        newCells[i + 90] += 1;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        newFlashCells[i + 40] = true;
        newFlashCells[i + 50] = true;
        newFlashCells[i + 60] = true;
        newFlashCells[i + 70] = true;
        newFlashCells[i + 80] = true;
        newFlashCells[i + 90] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 4) {
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newCells[i + 40] += 1;
        newCells[i + 50] += 1;
        newCells[i + 60] += 1;
        newCells[i + 70] += 1;
        newCells[i + 80] += 1;
        newCells[i + 90] += 1;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        newFlashCells[i + 40] = true;
        newFlashCells[i + 50] = true;
        newFlashCells[i + 60] = true;
        newFlashCells[i + 70] = true;
        newFlashCells[i + 80] = true;
        newFlashCells[i + 90] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 5) {
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newCells[i + 40] += 1;
        newCells[i + 50] += 1;
        newCells[i + 60] += 1;
        newCells[i + 70] += 1;
        newCells[i + 80] += 1;
        newCells[i + 90] += 1;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        newFlashCells[i + 40] = true;
        newFlashCells[i + 50] = true;
        newFlashCells[i + 60] = true;
        newFlashCells[i + 70] = true;
        newFlashCells[i + 80] = true;
        newFlashCells[i + 90] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 6) {
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newCells[i + 40] += 1;
        newCells[i + 50] += 1;
        newCells[i + 60] += 1;
        newCells[i + 70] += 1;
        newCells[i + 80] += 1;
        newCells[i + 90] += 1;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        newFlashCells[i + 40] = true;
        newFlashCells[i + 50] = true;
        newFlashCells[i + 60] = true;
        newFlashCells[i + 70] = true;
        newFlashCells[i + 80] = true;
        newFlashCells[i + 90] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 7) {
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newCells[i + 40] += 1;
        newCells[i + 50] += 1;
        newCells[i + 60] += 1;
        newCells[i + 70] += 1;
        newCells[i + 80] += 1;
        newCells[i + 90] += 1;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        newFlashCells[i + 40] = true;
        newFlashCells[i + 50] = true;
        newFlashCells[i + 60] = true;
        newFlashCells[i + 70] = true;
        newFlashCells[i + 80] = true;
        newFlashCells[i + 90] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 8) {
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newCells[i + 40] += 1;
        newCells[i + 50] += 1;
        newCells[i + 60] += 1;
        newCells[i + 70] += 1;
        newCells[i + 80] += 1;
        newCells[i + 90] += 1;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        newFlashCells[i + 40] = true;
        newFlashCells[i + 50] = true;
        newFlashCells[i + 60] = true;
        newFlashCells[i + 70] = true;
        newFlashCells[i + 80] = true;
        newFlashCells[i + 90] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else {
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newCells[i + 40] += 1;
        newCells[i + 50] += 1;
        newCells[i + 60] += 1;
        newCells[i + 70] += 1;
        newCells[i + 80] += 1;
        newCells[i + 90] += 1;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        newFlashCells[i + 40] = true;
        newFlashCells[i + 50] = true;
        newFlashCells[i + 60] = true;
        newFlashCells[i + 70] = true;
        newFlashCells[i + 80] = true;
        newFlashCells[i + 90] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      }
      this.setState({
        cells: newCells,
        flashCells: newFlashCells
      });
      setTimeout(() => {
        this.setState({ flashCells: new Array(100).fill(false) });
      }, 100);
    } else if (i >= 10 && i <= 19) {
      for (let index = 10; index < 20; index++) {
        newCells[index] += 1;
        newFlashCells[index] = true;
      }
      if (i === 10) {
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newCells[i + 40] += 1;
        newCells[i + 50] += 1;
        newCells[i + 60] += 1;
        newCells[i + 70] += 1;
        newCells[i + 80] += 1;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        newFlashCells[i + 40] = true;
        newFlashCells[i + 50] = true;
        newFlashCells[i + 60] = true;
        newFlashCells[i + 70] = true;
        newFlashCells[i + 80] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 11) {
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newCells[i + 40] += 1;
        newCells[i + 50] += 1;
        newCells[i + 60] += 1;
        newCells[i + 70] += 1;
        newCells[i + 80] += 1;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        newFlashCells[i + 40] = true;
        newFlashCells[i + 50] = true;
        newFlashCells[i + 60] = true;
        newFlashCells[i + 70] = true;
        newFlashCells[i + 80] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 12) {
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newCells[i + 40] += 1;
        newCells[i + 50] += 1;
        newCells[i + 60] += 1;
        newCells[i + 70] += 1;
        newCells[i + 80] += 1;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        newFlashCells[i + 40] = true;
        newFlashCells[i + 50] = true;
        newFlashCells[i + 60] = true;
        newFlashCells[i + 70] = true;
        newFlashCells[i + 80] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 13) {
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newCells[i + 40] += 1;
        newCells[i + 50] += 1;
        newCells[i + 60] += 1;
        newCells[i + 70] += 1;
        newCells[i + 80] += 1;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        newFlashCells[i + 40] = true;
        newFlashCells[i + 50] = true;
        newFlashCells[i + 60] = true;
        newFlashCells[i + 70] = true;
        newFlashCells[i + 80] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 14) {
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newCells[i + 40] += 1;
        newCells[i + 50] += 1;
        newCells[i + 60] += 1;
        newCells[i + 70] += 1;
        newCells[i + 80] += 1;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        newFlashCells[i + 40] = true;
        newFlashCells[i + 50] = true;
        newFlashCells[i + 60] = true;
        newFlashCells[i + 70] = true;
        newFlashCells[i + 80] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 15) {
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newCells[i + 40] += 1;
        newCells[i + 50] += 1;
        newCells[i + 60] += 1;
        newCells[i + 70] += 1;
        newCells[i + 80] += 1;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        newFlashCells[i + 40] = true;
        newFlashCells[i + 50] = true;
        newFlashCells[i + 60] = true;
        newFlashCells[i + 70] = true;
        newFlashCells[i + 80] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 16) {
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newCells[i + 40] += 1;
        newCells[i + 50] += 1;
        newCells[i + 60] += 1;
        newCells[i + 70] += 1;
        newCells[i + 80] += 1;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        newFlashCells[i + 40] = true;
        newFlashCells[i + 50] = true;
        newFlashCells[i + 60] = true;
        newFlashCells[i + 70] = true;
        newFlashCells[i + 80] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 17) {
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newCells[i + 40] += 1;
        newCells[i + 50] += 1;
        newCells[i + 60] += 1;
        newCells[i + 70] += 1;
        newCells[i + 80] += 1;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        newFlashCells[i + 40] = true;
        newFlashCells[i + 50] = true;
        newFlashCells[i + 60] = true;
        newFlashCells[i + 70] = true;
        newFlashCells[i + 80] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 18) {
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newCells[i + 40] += 1;
        newCells[i + 50] += 1;
        newCells[i + 60] += 1;
        newCells[i + 70] += 1;
        newCells[i + 80] += 1;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        newFlashCells[i + 40] = true;
        newFlashCells[i + 50] = true;
        newFlashCells[i + 60] = true;
        newFlashCells[i + 70] = true;
        newFlashCells[i + 80] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else {
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newCells[i + 40] += 1;
        newCells[i + 50] += 1;
        newCells[i + 60] += 1;
        newCells[i + 70] += 1;
        newCells[i + 80] += 1;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        newFlashCells[i + 40] = true;
        newFlashCells[i + 50] = true;
        newFlashCells[i + 60] = true;
        newFlashCells[i + 70] = true;
        newFlashCells[i + 80] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      }
      this.setState({
        cells: newCells,
        flashCells: newFlashCells
      });
      setTimeout(() => {
        this.setState({ flashCells: new Array(100).fill(false) });
      }, 100);
    } else if (i >= 20 && i <= 29) {
      for (let index = 20; index < 30; index++) {
        newCells[index] += 1;
        newFlashCells[index] = true;
      }
      if (i === 20) {
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newCells[i + 40] += 1;
        newCells[i + 50] += 1;
        newCells[i + 60] += 1;
        newCells[i + 70] += 1;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        newFlashCells[i + 40] = true;
        newFlashCells[i + 50] = true;
        newFlashCells[i + 60] = true;
        newFlashCells[i + 70] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 21) {
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newCells[i + 40] += 1;
        newCells[i + 50] += 1;
        newCells[i + 60] += 1;
        newCells[i + 70] += 1;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        newFlashCells[i + 40] = true;
        newFlashCells[i + 50] = true;
        newFlashCells[i + 60] = true;
        newFlashCells[i + 70] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 22) {
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newCells[i + 40] += 1;
        newCells[i + 50] += 1;
        newCells[i + 60] += 1;
        newCells[i + 70] += 1;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        newFlashCells[i + 40] = true;
        newFlashCells[i + 50] = true;
        newFlashCells[i + 60] = true;
        newFlashCells[i + 70] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 23) {
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newCells[i + 40] += 1;
        newCells[i + 50] += 1;
        newCells[i + 60] += 1;
        newCells[i + 70] += 1;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        newFlashCells[i + 40] = true;
        newFlashCells[i + 50] = true;
        newFlashCells[i + 60] = true;
        newFlashCells[i + 70] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 24) {
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newCells[i + 40] += 1;
        newCells[i + 50] += 1;
        newCells[i + 60] += 1;
        newCells[i + 70] += 1;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        newFlashCells[i + 40] = true;
        newFlashCells[i + 50] = true;
        newFlashCells[i + 60] = true;
        newFlashCells[i + 70] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 25) {
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newCells[i + 40] += 1;
        newCells[i + 50] += 1;
        newCells[i + 60] += 1;
        newCells[i + 70] += 1;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        newFlashCells[i + 40] = true;
        newFlashCells[i + 50] = true;
        newFlashCells[i + 60] = true;
        newFlashCells[i + 70] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 26) {
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newCells[i + 40] += 1;
        newCells[i + 50] += 1;
        newCells[i + 60] += 1;
        newCells[i + 70] += 1;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        newFlashCells[i + 40] = true;
        newFlashCells[i + 50] = true;
        newFlashCells[i + 60] = true;
        newFlashCells[i + 70] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 27) {
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newCells[i + 40] += 1;
        newCells[i + 50] += 1;
        newCells[i + 60] += 1;
        newCells[i + 70] += 1;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        newFlashCells[i + 40] = true;
        newFlashCells[i + 50] = true;
        newFlashCells[i + 60] = true;
        newFlashCells[i + 70] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 28) {
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newCells[i + 40] += 1;
        newCells[i + 50] += 1;
        newCells[i + 60] += 1;
        newCells[i + 70] += 1;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        newFlashCells[i + 40] = true;
        newFlashCells[i + 50] = true;
        newFlashCells[i + 60] = true;
        newFlashCells[i + 70] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else {
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newCells[i + 40] += 1;
        newCells[i + 50] += 1;
        newCells[i + 60] += 1;
        newCells[i + 70] += 1;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        newFlashCells[i + 40] = true;
        newFlashCells[i + 50] = true;
        newFlashCells[i + 60] = true;
        newFlashCells[i + 70] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      }
      this.setState({
        cells: newCells,
        flashCells: newFlashCells
      });
      setTimeout(() => {
        this.setState({ flashCells: new Array(100).fill(false) });
      }, 100);
    } else if (i >= 30 && i <= 39) {
      for (let index = 30; index < 40; index++) {
        newCells[index] += 1;
        newFlashCells[index] = true;
      }
      if (i === 30) {
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newCells[i + 40] += 1;
        newCells[i + 50] += 1;
        newCells[i + 60] += 1;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        newFlashCells[i + 40] = true;
        newFlashCells[i + 50] = true;
        newFlashCells[i + 60] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 31) {
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newCells[i + 40] += 1;
        newCells[i + 50] += 1;
        newCells[i + 60] += 1;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        newFlashCells[i + 40] = true;
        newFlashCells[i + 50] = true;
        newFlashCells[i + 60] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 32) {
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newCells[i + 40] += 1;
        newCells[i + 50] += 1;
        newCells[i + 60] += 1;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        newFlashCells[i + 40] = true;
        newFlashCells[i + 50] = true;
        newFlashCells[i + 60] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 33) {
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newCells[i + 40] += 1;
        newCells[i + 50] += 1;
        newCells[i + 60] += 1;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        newFlashCells[i + 40] = true;
        newFlashCells[i + 50] = true;
        newFlashCells[i + 60] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 34) {
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newCells[i + 40] += 1;
        newCells[i + 50] += 1;
        newCells[i + 60] += 1;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        newFlashCells[i + 40] = true;
        newFlashCells[i + 50] = true;
        newFlashCells[i + 60] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 35) {
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newCells[i + 40] += 1;
        newCells[i + 50] += 1;
        newCells[i + 60] += 1;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        newFlashCells[i + 40] = true;
        newFlashCells[i + 50] = true;
        newFlashCells[i + 60] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 36) {
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newCells[i + 40] += 1;
        newCells[i + 50] += 1;
        newCells[i + 60] += 1;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        newFlashCells[i + 40] = true;
        newFlashCells[i + 50] = true;
        newFlashCells[i + 60] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 37) {
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newCells[i + 40] += 1;
        newCells[i + 50] += 1;
        newCells[i + 60] += 1;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        newFlashCells[i + 40] = true;
        newFlashCells[i + 50] = true;
        newFlashCells[i + 60] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 38) {
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newCells[i + 40] += 1;
        newCells[i + 50] += 1;
        newCells[i + 60] += 1;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        newFlashCells[i + 40] = true;
        newFlashCells[i + 50] = true;
        newFlashCells[i + 60] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else {
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newCells[i + 40] += 1;
        newCells[i + 50] += 1;
        newCells[i + 60] += 1;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        newFlashCells[i + 40] = true;
        newFlashCells[i + 50] = true;
        newFlashCells[i + 60] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      }
      this.setState({
        cells: newCells,
        flashCells: newFlashCells
      });
      setTimeout(() => {
        this.setState({ flashCells: new Array(100).fill(false) });
      }, 100);
    } else if (i >= 40 && i <= 49) {
      for (let index = 40; index < 50; index++) {
        newCells[index] += 1;
        newFlashCells[index] = true;
      }
      if (i === 40) {
        newCells[i - 40] += 1;
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newCells[i + 40] += 1;
        newCells[i + 50] += 1;
        newFlashCells[i - 40] = true;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        newFlashCells[i + 40] = true;
        newFlashCells[i + 50] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 41) {
        newCells[i - 40] += 1;
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newCells[i + 40] += 1;
        newCells[i + 50] += 1;
        newFlashCells[i - 40] = true;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        newFlashCells[i + 40] = true;
        newFlashCells[i + 50] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 42) {
        newCells[i - 40] += 1;
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newCells[i + 40] += 1;
        newCells[i + 50] += 1;
        newFlashCells[i - 40] = true;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        newFlashCells[i + 40] = true;
        newFlashCells[i + 50] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 43) {
        newCells[i - 40] += 1;
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newCells[i + 40] += 1;
        newCells[i + 50] += 1;
        newFlashCells[i - 40] = true;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        newFlashCells[i + 40] = true;
        newFlashCells[i + 50] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 44) {
        newCells[i - 40] += 1;
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newCells[i + 40] += 1;
        newCells[i + 50] += 1;
        newFlashCells[i - 40] = true;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        newFlashCells[i + 40] = true;
        newFlashCells[i + 50] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 45) {
        newCells[i - 40] += 1;
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newCells[i + 40] += 1;
        newCells[i + 50] += 1;
        newFlashCells[i - 40] = true;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        newFlashCells[i + 40] = true;
        newFlashCells[i + 50] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 46) {
        newCells[i - 40] += 1;
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newCells[i + 40] += 1;
        newCells[i + 50] += 1;
        newFlashCells[i - 40] = true;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        newFlashCells[i + 40] = true;
        newFlashCells[i + 50] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 47) {
        newCells[i - 40] += 1;
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newCells[i + 40] += 1;
        newCells[i + 50] += 1;
        newFlashCells[i - 40] = true;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        newFlashCells[i + 40] = true;
        newFlashCells[i + 50] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 48) {
        newCells[i - 40] += 1;
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newCells[i + 40] += 1;
        newCells[i + 50] += 1;
        newFlashCells[i - 40] = true;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        newFlashCells[i + 40] = true;
        newFlashCells[i + 50] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else {
        newCells[i - 40] += 1;
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newCells[i + 40] += 1;
        newCells[i + 50] += 1;
        newFlashCells[i - 40] = true;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        newFlashCells[i + 40] = true;
        newFlashCells[i + 50] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      }
      this.setState({
        cells: newCells,
        flashCells: newFlashCells
      });
      setTimeout(() => {
        this.setState({ flashCells: new Array(100).fill(false) });
      }, 100);
    } else if (i >= 50 && i <= 59) {
      for (let index = 50; index < 60; index++) {
        newCells[index] += 1;
        newFlashCells[index] = true;
      }
      if (i === 50) {
        newCells[i - 50] += 1;
        newCells[i - 40] += 1;
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newCells[i + 40] += 1;
        newFlashCells[i - 50] = true;
        newFlashCells[i - 40] = true;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        newFlashCells[i + 40] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 51) {
        newCells[i - 50] += 1;
        newCells[i - 40] += 1;
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newCells[i + 40] += 1;
        newFlashCells[i - 50] = true;
        newFlashCells[i - 40] = true;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        newFlashCells[i + 40] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 52) {
        newCells[i - 50] += 1;
        newCells[i - 40] += 1;
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newCells[i + 40] += 1;
        newFlashCells[i - 50] = true;
        newFlashCells[i - 40] = true;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        newFlashCells[i + 40] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 53) {
        newCells[i - 50] += 1;
        newCells[i - 40] += 1;
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newCells[i + 40] += 1;
        newFlashCells[i - 50] = true;
        newFlashCells[i - 40] = true;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        newFlashCells[i + 40] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 54) {
        newCells[i - 50] += 1;
        newCells[i - 40] += 1;
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newCells[i + 40] += 1;
        newFlashCells[i - 50] = true;
        newFlashCells[i - 40] = true;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        newFlashCells[i + 40] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 55) {
        newCells[i - 50] += 1;
        newCells[i - 40] += 1;
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newCells[i + 40] += 1;
        newFlashCells[i - 50] = true;
        newFlashCells[i - 40] = true;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        newFlashCells[i + 40] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 56) {
        newCells[i - 50] += 1;
        newCells[i - 40] += 1;
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newCells[i + 40] += 1;
        newFlashCells[i - 50] = true;
        newFlashCells[i - 40] = true;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        newFlashCells[i + 40] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 57) {
        newCells[i - 50] += 1;
        newCells[i - 40] += 1;
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newCells[i + 40] += 1;
        newFlashCells[i - 50] = true;
        newFlashCells[i - 40] = true;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        newFlashCells[i + 40] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 58) {
        newCells[i - 50] += 1;
        newCells[i - 40] += 1;
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newCells[i + 40] += 1;
        newFlashCells[i - 50] = true;
        newFlashCells[i - 40] = true;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        newFlashCells[i + 40] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else {
        newCells[i - 50] += 1;
        newCells[i - 40] += 1;
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newCells[i + 40] += 1;
        newFlashCells[i - 50] = true;
        newFlashCells[i - 40] = true;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        newFlashCells[i + 40] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      }
      this.setState({
        cells: newCells,
        flashCells: newFlashCells
      });
      setTimeout(() => {
        this.setState({ flashCells: new Array(100).fill(false) });
      }, 100);
    } else if (i >= 60 && i <= 69) {
      for (let index = 60; index < 70; index++) {
        newCells[index] += 1;
        newFlashCells[index] = true;
      }
      if (i === 60) {
        newCells[i - 60] += 1;
        newCells[i - 50] += 1;
        newCells[i - 40] += 1;
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newFlashCells[i - 60] = true;
        newFlashCells[i - 50] = true;
        newFlashCells[i - 40] = true;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 61) {
        newCells[i - 60] += 1;
        newCells[i - 50] += 1;
        newCells[i - 40] += 1;
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newFlashCells[i - 60] = true;
        newFlashCells[i - 50] = true;
        newFlashCells[i - 40] = true;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 62) {
        newCells[i - 60] += 1;
        newCells[i - 50] += 1;
        newCells[i - 40] += 1;
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newFlashCells[i - 60] = true;
        newFlashCells[i - 50] = true;
        newFlashCells[i - 40] = true;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 63) {
        newCells[i - 60] += 1;
        newCells[i - 50] += 1;
        newCells[i - 40] += 1;
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newFlashCells[i - 60] = true;
        newFlashCells[i - 50] = true;
        newFlashCells[i - 40] = true;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 64) {
        newCells[i - 60] += 1;
        newCells[i - 50] += 1;
        newCells[i - 40] += 1;
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newFlashCells[i - 60] = true;
        newFlashCells[i - 50] = true;
        newFlashCells[i - 40] = true;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 65) {
        newCells[i - 60] += 1;
        newCells[i - 50] += 1;
        newCells[i - 40] += 1;
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newFlashCells[i - 60] = true;
        newFlashCells[i - 50] = true;
        newFlashCells[i - 40] = true;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 66) {
        newCells[i - 60] += 1;
        newCells[i - 50] += 1;
        newCells[i - 40] += 1;
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newFlashCells[i - 60] = true;
        newFlashCells[i - 50] = true;
        newFlashCells[i - 40] = true;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 67) {
        newCells[i - 60] += 1;
        newCells[i - 50] += 1;
        newCells[i - 40] += 1;
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newFlashCells[i - 60] = true;
        newFlashCells[i - 50] = true;
        newFlashCells[i - 40] = true;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 68) {
        newCells[i - 60] += 1;
        newCells[i - 50] += 1;
        newCells[i - 40] += 1;
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newFlashCells[i - 60] = true;
        newFlashCells[i - 50] = true;
        newFlashCells[i - 40] = true;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else {
        newCells[i - 60] += 1;
        newCells[i - 50] += 1;
        newCells[i - 40] += 1;
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newCells[i + 30] += 1;
        newFlashCells[i - 60] = true;
        newFlashCells[i - 50] = true;
        newFlashCells[i - 40] = true;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        newFlashCells[i + 30] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      }
      this.setState({
        cells: newCells,
        flashCells: newFlashCells
      });
      setTimeout(() => {
        this.setState({ flashCells: new Array(100).fill(false) });
      }, 100);
    } else if (i >= 70 && i <= 79) {
      for (let index = 70; index < 80; index++) {
        newCells[index] += 1;
        newFlashCells[index] = true;
      }
      if (i === 70) {
        newCells[i - 70] += 1;
        newCells[i - 60] += 1;
        newCells[i - 50] += 1;
        newCells[i - 40] += 1;
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newFlashCells[i - 70] = true;
        newFlashCells[i - 60] = true;
        newFlashCells[i - 50] = true;
        newFlashCells[i - 40] = true;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 71) {
        newCells[i - 70] += 1;
        newCells[i - 60] += 1;
        newCells[i - 50] += 1;
        newCells[i - 40] += 1;
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newFlashCells[i - 70] = true;
        newFlashCells[i - 60] = true;
        newFlashCells[i - 50] = true;
        newFlashCells[i - 40] = true;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 72) {
        newCells[i - 70] += 1;
        newCells[i - 60] += 1;
        newCells[i - 50] += 1;
        newCells[i - 40] += 1;
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newFlashCells[i - 70] = true;
        newFlashCells[i - 60] = true;
        newFlashCells[i - 50] = true;
        newFlashCells[i - 40] = true;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 73) {
        newCells[i - 70] += 1;
        newCells[i - 60] += 1;
        newCells[i - 50] += 1;
        newCells[i - 40] += 1;
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newFlashCells[i - 70] = true;
        newFlashCells[i - 60] = true;
        newFlashCells[i - 50] = true;
        newFlashCells[i - 40] = true;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 74) {
        newCells[i - 70] += 1;
        newCells[i - 60] += 1;
        newCells[i - 50] += 1;
        newCells[i - 40] += 1;
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newFlashCells[i - 70] = true;
        newFlashCells[i - 60] = true;
        newFlashCells[i - 50] = true;
        newFlashCells[i - 40] = true;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 75) {
        newCells[i - 70] += 1;
        newCells[i - 60] += 1;
        newCells[i - 50] += 1;
        newCells[i - 40] += 1;
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newFlashCells[i - 70] = true;
        newFlashCells[i - 60] = true;
        newFlashCells[i - 50] = true;
        newFlashCells[i - 40] = true;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 76) {
        newCells[i - 70] += 1;
        newCells[i - 60] += 1;
        newCells[i - 50] += 1;
        newCells[i - 40] += 1;
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newFlashCells[i - 70] = true;
        newFlashCells[i - 60] = true;
        newFlashCells[i - 50] = true;
        newFlashCells[i - 40] = true;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 77) {
        newCells[i - 70] += 1;
        newCells[i - 60] += 1;
        newCells[i - 50] += 1;
        newCells[i - 40] += 1;
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newFlashCells[i - 70] = true;
        newFlashCells[i - 60] = true;
        newFlashCells[i - 50] = true;
        newFlashCells[i - 40] = true;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 78) {
        newCells[i - 70] += 1;
        newCells[i - 60] += 1;
        newCells[i - 50] += 1;
        newCells[i - 40] += 1;
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newFlashCells[i - 70] = true;
        newFlashCells[i - 60] = true;
        newFlashCells[i - 50] = true;
        newFlashCells[i - 40] = true;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else {
        newCells[i - 70] += 1;
        newCells[i - 60] += 1;
        newCells[i - 50] += 1;
        newCells[i - 40] += 1;
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newCells[i + 20] += 1;
        newFlashCells[i - 70] = true;
        newFlashCells[i - 60] = true;
        newFlashCells[i - 50] = true;
        newFlashCells[i - 40] = true;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        newFlashCells[i + 20] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      }
      this.setState({
        cells: newCells,
        flashCells: newFlashCells
      });
      setTimeout(() => {
        this.setState({ flashCells: new Array(100).fill(false) });
      }, 100);
    } else if (i >= 80 && i <= 89) {
      for (let index = 80; index < 90; index++) {
        newCells[index] += 1;
        newFlashCells[index] = true;
      }
      if (i === 80) {
        newCells[i - 80] += 1;
        newCells[i - 70] += 1;
        newCells[i - 60] += 1;
        newCells[i - 50] += 1;
        newCells[i - 40] += 1;
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newFlashCells[i - 80] = true;
        newFlashCells[i - 70] = true;
        newFlashCells[i - 60] = true;
        newFlashCells[i - 50] = true;
        newFlashCells[i - 40] = true;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 81) {
        newCells[i - 80] += 1;
        newCells[i - 70] += 1;
        newCells[i - 60] += 1;
        newCells[i - 50] += 1;
        newCells[i - 40] += 1;
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newFlashCells[i - 80] = true;
        newFlashCells[i - 70] = true;
        newFlashCells[i - 60] = true;
        newFlashCells[i - 50] = true;
        newFlashCells[i - 40] = true;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 82) {
        newCells[i - 80] += 1;
        newCells[i - 70] += 1;
        newCells[i - 60] += 1;
        newCells[i - 50] += 1;
        newCells[i - 40] += 1;
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newFlashCells[i - 80] = true;
        newFlashCells[i - 70] = true;
        newFlashCells[i - 60] = true;
        newFlashCells[i - 50] = true;
        newFlashCells[i - 40] = true;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 83) {
        newCells[i - 80] += 1;
        newCells[i - 70] += 1;
        newCells[i - 60] += 1;
        newCells[i - 50] += 1;
        newCells[i - 40] += 1;
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newFlashCells[i - 80] = true;
        newFlashCells[i - 70] = true;
        newFlashCells[i - 60] = true;
        newFlashCells[i - 50] = true;
        newFlashCells[i - 40] = true;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 84) {
        newCells[i - 80] += 1;
        newCells[i - 70] += 1;
        newCells[i - 60] += 1;
        newCells[i - 50] += 1;
        newCells[i - 40] += 1;
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newFlashCells[i - 80] = true;
        newFlashCells[i - 70] = true;
        newFlashCells[i - 60] = true;
        newFlashCells[i - 50] = true;
        newFlashCells[i - 40] = true;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 85) {
        newCells[i - 80] += 1;
        newCells[i - 70] += 1;
        newCells[i - 60] += 1;
        newCells[i - 50] += 1;
        newCells[i - 40] += 1;
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newFlashCells[i - 80] = true;
        newFlashCells[i - 70] = true;
        newFlashCells[i - 60] = true;
        newFlashCells[i - 50] = true;
        newFlashCells[i - 40] = true;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 86) {
        newCells[i - 80] += 1;
        newCells[i - 70] += 1;
        newCells[i - 60] += 1;
        newCells[i - 50] += 1;
        newCells[i - 40] += 1;
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newFlashCells[i - 80] = true;
        newFlashCells[i - 70] = true;
        newFlashCells[i - 60] = true;
        newFlashCells[i - 50] = true;
        newFlashCells[i - 40] = true;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 87) {
        newCells[i - 80] += 1;
        newCells[i - 70] += 1;
        newCells[i - 60] += 1;
        newCells[i - 50] += 1;
        newCells[i - 40] += 1;
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newFlashCells[i - 80] = true;
        newFlashCells[i - 70] = true;
        newFlashCells[i - 60] = true;
        newFlashCells[i - 50] = true;
        newFlashCells[i - 40] = true;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 88) {
        newCells[i - 80] += 1;
        newCells[i - 70] += 1;
        newCells[i - 60] += 1;
        newCells[i - 50] += 1;
        newCells[i - 40] += 1;
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newFlashCells[i - 80] = true;
        newFlashCells[i - 70] = true;
        newFlashCells[i - 60] = true;
        newFlashCells[i - 50] = true;
        newFlashCells[i - 40] = true;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else {
        newCells[i - 80] += 1;
        newCells[i - 70] += 1;
        newCells[i - 60] += 1;
        newCells[i - 50] += 1;
        newCells[i - 40] += 1;
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newCells[i + 10] += 1;
        newFlashCells[i - 80] = true;
        newFlashCells[i - 70] = true;
        newFlashCells[i - 60] = true;
        newFlashCells[i - 50] = true;
        newFlashCells[i - 40] = true;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        newFlashCells[i + 10] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      }
      this.setState({
        cells: newCells,
        flashCells: newFlashCells
      });
      setTimeout(() => {
        this.setState({ flashCells: new Array(100).fill(false) });
      }, 100);
    } else {
      for (let index = 90; index < 100; index++) {
        newCells[index] += 1;
        newFlashCells[index] = true;
      }
      if (i === 90) {
        newCells[i - 90] += 1;
        newCells[i - 80] += 1;
        newCells[i - 70] += 1;
        newCells[i - 60] += 1;
        newCells[i - 50] += 1;
        newCells[i - 40] += 1;
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newFlashCells[i - 90] = true;
        newFlashCells[i - 80] = true;
        newFlashCells[i - 70] = true;
        newFlashCells[i - 60] = true;
        newFlashCells[i - 50] = true;
        newFlashCells[i - 40] = true;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 91) {
        newCells[i - 90] += 1;
        newCells[i - 80] += 1;
        newCells[i - 70] += 1;
        newCells[i - 60] += 1;
        newCells[i - 50] += 1;
        newCells[i - 40] += 1;
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newFlashCells[i - 90] = true;
        newFlashCells[i - 80] = true;
        newFlashCells[i - 70] = true;
        newFlashCells[i - 60] = true;
        newFlashCells[i - 50] = true;
        newFlashCells[i - 40] = true;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 92) {
        newCells[i - 90] += 1;
        newCells[i - 80] += 1;
        newCells[i - 70] += 1;
        newCells[i - 60] += 1;
        newCells[i - 50] += 1;
        newCells[i - 40] += 1;
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newFlashCells[i - 90] = true;
        newFlashCells[i - 80] = true;
        newFlashCells[i - 70] = true;
        newFlashCells[i - 60] = true;
        newFlashCells[i - 50] = true;
        newFlashCells[i - 40] = true;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 93) {
        newCells[i - 90] += 1;
        newCells[i - 80] += 1;
        newCells[i - 70] += 1;
        newCells[i - 60] += 1;
        newCells[i - 50] += 1;
        newCells[i - 40] += 1;
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newFlashCells[i - 90] = true;
        newFlashCells[i - 80] = true;
        newFlashCells[i - 70] = true;
        newFlashCells[i - 60] = true;
        newFlashCells[i - 50] = true;
        newFlashCells[i - 40] = true;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 94) {
        newCells[i - 90] += 1;
        newCells[i - 80] += 1;
        newCells[i - 70] += 1;
        newCells[i - 60] += 1;
        newCells[i - 50] += 1;
        newCells[i - 40] += 1;
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newFlashCells[i - 90] = true;
        newFlashCells[i - 80] = true;
        newFlashCells[i - 70] = true;
        newFlashCells[i - 60] = true;
        newFlashCells[i - 50] = true;
        newFlashCells[i - 40] = true;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 95) {
        newCells[i - 90] += 1;
        newCells[i - 80] += 1;
        newCells[i - 70] += 1;
        newCells[i - 60] += 1;
        newCells[i - 50] += 1;
        newCells[i - 40] += 1;
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newFlashCells[i - 90] = true;
        newFlashCells[i - 80] = true;
        newFlashCells[i - 70] = true;
        newFlashCells[i - 60] = true;
        newFlashCells[i - 50] = true;
        newFlashCells[i - 40] = true;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 96) {
        newCells[i - 90] += 1;
        newCells[i - 80] += 1;
        newCells[i - 70] += 1;
        newCells[i - 60] += 1;
        newCells[i - 50] += 1;
        newCells[i - 40] += 1;
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newFlashCells[i - 90] = true;
        newFlashCells[i - 80] = true;
        newFlashCells[i - 70] = true;
        newFlashCells[i - 60] = true;
        newFlashCells[i - 50] = true;
        newFlashCells[i - 40] = true;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 97) {
        newCells[i - 90] += 1;
        newCells[i - 80] += 1;
        newCells[i - 70] += 1;
        newCells[i - 60] += 1;
        newCells[i - 50] += 1;
        newCells[i - 40] += 1;
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newFlashCells[i - 90] = true;
        newFlashCells[i - 80] = true;
        newFlashCells[i - 70] = true;
        newFlashCells[i - 60] = true;
        newFlashCells[i - 50] = true;
        newFlashCells[i - 40] = true;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else if (i === 98) {
        newCells[i - 90] += 1;
        newCells[i - 80] += 1;
        newCells[i - 70] += 1;
        newCells[i - 60] += 1;
        newCells[i - 50] += 1;
        newCells[i - 40] += 1;
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newFlashCells[i - 90] = true;
        newFlashCells[i - 80] = true;
        newFlashCells[i - 70] = true;
        newFlashCells[i - 60] = true;
        newFlashCells[i - 50] = true;
        newFlashCells[i - 40] = true;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      } else {
        newCells[i - 90] += 1;
        newCells[i - 80] += 1;
        newCells[i - 70] += 1;
        newCells[i - 60] += 1;
        newCells[i - 50] += 1;
        newCells[i - 40] += 1;
        newCells[i - 30] += 1;
        newCells[i - 20] += 1;
        newCells[i - 10] += 1;
        newFlashCells[i - 90] = true;
        newFlashCells[i - 80] = true;
        newFlashCells[i - 70] = true;
        newFlashCells[i - 60] = true;
        newFlashCells[i - 50] = true;
        newFlashCells[i - 40] = true;
        newFlashCells[i - 30] = true;
        newFlashCells[i - 20] = true;
        newFlashCells[i - 10] = true;
        this.setState({
          cells: newCells,
          flashCells: newFlashCells
        });
        setTimeout(() => {
          this.setState({ flashCells: new Array(100).fill(false) });
        }, 100);
      }
      this.setState({
        cells: newCells,
        flashCells: newFlashCells
      });
      setTimeout(() => {
        this.setState({ flashCells: new Array(100).fill(false) });
      }, 100);
    }
  };

  render() {
    return (
      <div className='Grid'>
        <div>
          {/* <Cell onClick={this.onClick} count={this.state.countArray[0]} /> */}
          {/* <Cell onClick={this.onClick} count={this.state.countArray[1]} /> */}
          {/* <Cell onClick={this.onClick} count={this.state.countArray[2]} /> */}
          {/* <Cell onClick={this.onClick} count={this.state.countArray[3]} /> */}
          {/* <Cell onClick={this.onClick} count={this.state.countArray[4]} /> */}
          {this.renderCell(0)}
          {this.renderCell(1)}
          {this.renderCell(2)}
          {this.renderCell(3)}
          {this.renderCell(4)}
          {this.renderCell(5)}
          {this.renderCell(6)}
          {this.renderCell(7)}
          {this.renderCell(8)}
          {this.renderCell(9)}
        </div>
        <div>
          {this.renderCell(10)}
          {this.renderCell(11)}
          {this.renderCell(12)}
          {this.renderCell(13)}
          {this.renderCell(14)}
          {this.renderCell(15)}
          {this.renderCell(16)}
          {this.renderCell(17)}
          {this.renderCell(18)}
          {this.renderCell(19)}
        </div>
        <div>
          {this.renderCell(20)}
          {this.renderCell(21)}
          {this.renderCell(22)}
          {this.renderCell(23)}
          {this.renderCell(24)}
          {this.renderCell(25)}
          {this.renderCell(26)}
          {this.renderCell(27)}
          {this.renderCell(28)}
          {this.renderCell(29)}
        </div>
        <div>
          {this.renderCell(30)}
          {this.renderCell(31)}
          {this.renderCell(32)}
          {this.renderCell(33)}
          {this.renderCell(34)}
          {this.renderCell(35)}
          {this.renderCell(36)}
          {this.renderCell(37)}
          {this.renderCell(38)}
          {this.renderCell(39)}
        </div>
        <div>
          {this.renderCell(40)}
          {this.renderCell(41)}
          {this.renderCell(42)}
          {this.renderCell(43)}
          {this.renderCell(44)}
          {this.renderCell(45)}
          {this.renderCell(46)}
          {this.renderCell(47)}
          {this.renderCell(48)}
          {this.renderCell(49)}
        </div>
        <div>
          {this.renderCell(50)}
          {this.renderCell(51)}
          {this.renderCell(52)}
          {this.renderCell(53)}
          {this.renderCell(54)}
          {this.renderCell(55)}
          {this.renderCell(56)}
          {this.renderCell(57)}
          {this.renderCell(58)}
          {this.renderCell(59)}
        </div>
        <div>
          {this.renderCell(60)}
          {this.renderCell(61)}
          {this.renderCell(62)}
          {this.renderCell(63)}
          {this.renderCell(64)}
          {this.renderCell(65)}
          {this.renderCell(66)}
          {this.renderCell(67)}
          {this.renderCell(68)}
          {this.renderCell(69)}
        </div>
        <div>
          {this.renderCell(70)}
          {this.renderCell(71)}
          {this.renderCell(72)}
          {this.renderCell(73)}
          {this.renderCell(74)}
          {this.renderCell(75)}
          {this.renderCell(76)}
          {this.renderCell(77)}
          {this.renderCell(78)}
          {this.renderCell(79)}
        </div>
        <div>
          {this.renderCell(80)}
          {this.renderCell(81)}
          {this.renderCell(82)}
          {this.renderCell(83)}
          {this.renderCell(84)}
          {this.renderCell(85)}
          {this.renderCell(86)}
          {this.renderCell(87)}
          {this.renderCell(88)}
          {this.renderCell(89)}
        </div>
        <div>
          {this.renderCell(90)}
          {this.renderCell(91)}
          {this.renderCell(92)}
          {this.renderCell(93)}
          {this.renderCell(94)}
          {this.renderCell(95)}
          {this.renderCell(96)}
          {this.renderCell(97)}
          {this.renderCell(98)}
          {this.renderCell(99)}
        </div>
      </div>
    );
  }
}
