import { ActionType } from '../action-types';

interface SearchRepositoriesAction {
   type: ActionType.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesSuccessAction {
   type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
   payload: SearchRepositoriesSuccessPayload[];
}
export interface SearchRepositoriesSuccessPayload {
   id: number;
   name: string;
   description: string;
   link: string;
   version: string;
}

interface SearchRepositoriesErrorAction {
   type: ActionType.SEARCH_REPOSITORIES_ERROR;
   payload: string;
}

export type Action =
   | SearchRepositoriesAction
   | SearchRepositoriesSuccessAction
   | SearchRepositoriesErrorAction;
