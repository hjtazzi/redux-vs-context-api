import axios from 'axios';
import { Dispatch } from 'react';
import { ActionType } from "../action-types";
import { Action } from '../actions';


export const searchRepositories = (dispatch: Dispatch<Action>, term: string) => {
   dispatch({
      type: ActionType.SEARCH_REPOSITORIES,
   });

   axios.get(
      'https://registry.npmjs.org/-/v1/search',
      {
         params: {
            text: term,
         },
      }
   ).then(({ data }) => {
      const results = data.objects.map((result: any, id: number) => {
         const resultPackage = result.package;
         return {
            id: id + 1,
            name: resultPackage.name,
            description: resultPackage.description,
            link: resultPackage.links.npm,
            version: resultPackage.version
         };
      });

      dispatch({
         type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
         payload: results,
      });

   }).catch(err => {
      dispatch({
         type: ActionType.SEARCH_REPOSITORIES_ERROR,
         payload: err.message,
      });
   });
};
