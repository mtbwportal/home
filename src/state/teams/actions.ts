import actionCreatorFactory from 'typescript-fsa';
import { asyncFactory } from 'typescript-fsa-redux-thunk';
import { RemoteMongoClient } from 'mongodb-stitch-browser-sdk';
import { AppState, AsyncContext } from '..';
import { Manager, Team } from '.';

const create = actionCreatorFactory('teams');
const createAsync = asyncFactory<AppState, AsyncContext>(create);

export const listTeams = createAsync<{}, Team[]>('list teams', (_params, _dispatch, _getState, { stitch }) =>
  stitch
    .getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas')
    .db('teams')
    .collection<Team>('teams')
    .find({})
    .asArray()
);

export const listTeamManagers = createAsync<{}, Manager[]>(
  'list team managers',
  (_params, _dispatch, _getState, { stitch }) =>
    stitch
      .getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas')
      .db('teams')
      .collection<Manager>('managers')
      .find({})
      .asArray()
);
