import * as Types from '../../generated/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type GetRegisteredTimesQueryVariables = Types.Exact<{
  filter?: Types.InputMaybe<Types.Scalars['JSON']>;
  sort?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type GetRegisteredTimesQuery = { __typename?: 'Query', registeredTimes?: Array<{ __typename?: 'RegisteredTime', id: string, created_at: any, timeRegistered?: any | null | undefined, user?: { __typename?: 'UsersPermissionsUser', id: string, username: string, name?: string | null | undefined, role?: { __typename?: 'UsersPermissionsRole', type?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined> | null | undefined };


export const GetRegisteredTimesDocument = gql`
    query getRegisteredTimes($filter: JSON, $sort: String) {
  registeredTimes(where: $filter, sort: $sort) {
    id
    created_at
    timeRegistered
    user {
      id
      username
      name
      role {
        type
      }
    }
  }
}
    `;

/**
 * __useGetRegisteredTimesQuery__
 *
 * To run a query within a React component, call `useGetRegisteredTimesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRegisteredTimesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRegisteredTimesQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useGetRegisteredTimesQuery(baseOptions?: Apollo.QueryHookOptions<GetRegisteredTimesQuery, GetRegisteredTimesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRegisteredTimesQuery, GetRegisteredTimesQueryVariables>(GetRegisteredTimesDocument, options);
      }
export function useGetRegisteredTimesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRegisteredTimesQuery, GetRegisteredTimesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRegisteredTimesQuery, GetRegisteredTimesQueryVariables>(GetRegisteredTimesDocument, options);
        }
export type GetRegisteredTimesQueryHookResult = ReturnType<typeof useGetRegisteredTimesQuery>;
export type GetRegisteredTimesLazyQueryHookResult = ReturnType<typeof useGetRegisteredTimesLazyQuery>;
export type GetRegisteredTimesQueryResult = Apollo.QueryResult<GetRegisteredTimesQuery, GetRegisteredTimesQueryVariables>;