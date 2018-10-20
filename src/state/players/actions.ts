import actionCreatorFactory from 'typescript-fsa';
import { asyncFactory } from 'typescript-fsa-redux-thunk';
import { RemoteMongoClient } from 'mongodb-stitch-browser-sdk';
import { AppState, AsyncContext } from '..';
import { Player } from '.';

const create = actionCreatorFactory('league results');
const createAsync = asyncFactory<AppState, AsyncContext>(create);

export const listPlayers = createAsync<{}, Player[]>('list players', (_params, _dispatch, _getState, { stitch }) =>
  stitch
    .getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas')
    .db('players')
    .collection<Player>('players')
    .find({})
    .asArray()
);
