import gql from 'graphql-tag';


export const ALL_LINKS = gql`
{
  allLinks {
    id,
    description,
    url
  }
}
`;

export const CREATE_LINK = gql`
  mutation ($description: String!, $url: String!) {
    createLink(
      description: $description,
      url: $url,
    ) {
      id
      url
      description
    }
  }
`;


