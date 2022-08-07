import actionCreatorFactory from 'typescript-fsa';
import { asyncFactory } from 'typescript-fsa-redux-thunk';
import { RemoteMongoClient } from 'mongodb-stitch-browser-sdk';
import { AppState, AsyncContext } from '..';
import { AllTimeResult, SeasonResult } from '.';

const create = actionCreatorFactory('league results');
const createAsync = asyncFactory<AppState, AsyncContext>(create);

export const listAllTimeResults = createAsync('list all time results', (_params, _dispatch, _getState, { stitch }) =>
  stitch
    .getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas')
    .db('results')
    .collection<AllTimeResult>('all_time')
    .find({})
    .asArray()
);

export const listSeasosnResults = createAsync('list season results', (_params, _dispatch, _getState, { stitch }) =>
  stitch
    .getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas')
    .db('results')
    .collection<SeasonResult>('seasons')
    .find({})
    .asArray()
);
