import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../state';

interface StateProps {
  availableYears: string[];
  players: { id: string; name: string; prices: { [key: number]: number } }[];
}

type Props = StateProps;

const initialState = {
  selectedYear: 2018,
};

type State = typeof initialState;

class Players extends Component<Props, State> {
  state: State = initialState;

  render() {
    const { availableYears, players } = this.props;
    const { selectedYear } = this.state;
    return (
      <div className="players">
        <h1>players page</h1>
        <p>{availableYears.join(', ')}</p>
        <table className="players-prices">
          <thead>
            <tr>
              <th>player</th>
              <th>price</th>
            </tr>
          </thead>
          <tbody>
            {players.map(({ id, name, prices }) => (
              <tr key={id}>
                <td>{name}</td>
                <td>{prices[selectedYear]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  const playerMap = state.players.all || {};
  const availableYears = {} as { [key: string]: boolean };

  const players = Object.keys(playerMap)
    .map(key => playerMap[key])
    .map(({ _id, name, prices }) => {
      Object.keys(prices).forEach(key => {
        availableYears[key] = true;
      });
      return { id: _id.toHexString(), name, prices };
    });

  return { players, availableYears: Object.keys(availableYears) };
};

export default connect(mapStateToProps)(Players);
