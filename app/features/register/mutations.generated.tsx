import * as Types from '../../generated/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type CreateRegisteredTimeMutationVariables = Types.Exact<{
  data?: Types.InputMaybe<Types.RegisteredTimeInput>;
}>;


export type CreateRegisteredTimeMutation = { __typename?: 'Mutation', createRegisteredTime?: { __typename?: 'createRegisteredTimePayload', registeredTime?: { __typename?: 'RegisteredTime', id: string } | null | undefined } | null | undefined };


export const CreateRegisteredTimeDocument = gql`
    mutation createRegisteredTime($data: RegisteredTimeInput) {
  createRegisteredTime(input: {data: $data}) {
    registeredTime {
      id
    }
  }
}
    `;
export type CreateRegisteredTimeMutationFn = Apollo.MutationFunction<CreateRegisteredTimeMutation, CreateRegisteredTimeMutationVariables>;

/**
 * __useCreateRegisteredTimeMutation__
 *
 * To run a mutation, you first call `useCreateRegisteredTimeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRegisteredTimeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRegisteredTimeMutation, { data, loading, error }] = useCreateRegisteredTimeMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateRegisteredTimeMutation(baseOptions?: Apollo.MutationHookOptions<CreateRegisteredTimeMutation, CreateRegisteredTimeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateRegisteredTimeMutation, CreateRegisteredTimeMutationVariables>(CreateRegisteredTimeDocument, options);
      }
export type CreateRegisteredTimeMutationHookResult = ReturnType<typeof useCreateRegisteredTimeMutation>;
export type CreateRegisteredTimeMutationResult = Apollo.MutationResult<CreateRegisteredTimeMutation>;
export type CreateRegisteredTimeMutationOptions = Apollo.BaseMutationOptions<CreateRegisteredTimeMutation, CreateRegisteredTimeMutationVariables>;