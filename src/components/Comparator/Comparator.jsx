import React from 'react';
import { inject, observer } from "mobx-react";
import './Comparator.css';

class Comparator extends React.Component {
  renderCars = () => (
    <table>
      <thead>
        <td>Creator</td>
        <td>Model</td>
        <td>Year</td>
        <td>KM</td>
        <td>Price</td>
      </thead>
      <tbody>
        {this.renderRows()}
      </tbody>
    </table>
  )

  renderRows = () => {
    const { MarketStore: { compareList, handleCompareList } } = this.props;

    return compareList.map(car => (<tr>
      <td>{car.creator}</td>
      <td>{car.model}</td>
      <td>{car.year}</td>
      <td>{car.km}</td>
      <td className="price">{car.price}</td>
      <td><button onClick={() => handleCompareList(car.id)}>X</button></td>
    </tr>));
  }

  render() {
    return (
      <div className="comparatorContainer">
        {this.renderCars()}
      </div>
    )
  }
}

export default inject('MarketStore')(observer(Comparator));
