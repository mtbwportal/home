import actionCreatorFactory from 'typescript-fsa';
import { AppPage } from '.';

const create = actionCreatorFactory('admin');

export const setCurrentPage = create<AppPage>('set current page');
