import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppState, Team as TeamDocument } from '../../state';

interface OwnProps {
  yearId: string;
}

interface StateProps {
  teamSeasons: TeamDocument[];
}

type Props = OwnProps & StateProps;

class Team extends Component<Props> {
  render() {
    const { teamSeasons = [] } = this.props;
    return (
      <div className="teams">
        <h1>teams page</h1>
        {teamSeasons.length > 0 && (
          <table className="teams-seasons">
            <thead>
              <tr>
                <th>id</th>
                <th />
                <th>team</th>
                <th>wins</th>
                <th>losses</th>
                <th>ties</th>
                <th>gb</th>
              </tr>
            </thead>
            <tbody>
              {teamSeasons.map(({ _id, name, wins, losses, ties }) => (
                <tr key={_id}>
                  <td>{`${_id}`}</td>
                  <td />
                  <td>{name}</td>
                  <td>{wins}</td>
                  <td>{losses}</td>
                  <td>{ties}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ teams, router }: AppState, { yearId }: OwnProps) => {
  if (router) {
    console.log('inside dynamic route');
    console.log(router.location.pathname);
  }
  return {
    yearId,
    teamSeasons: teams.all.filter(team => team.year === parseInt(yearId)),
  };
};

export default connect(mapStateToProps)(Team);
