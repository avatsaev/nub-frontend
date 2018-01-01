import gql from 'graphql-tag';


export const GET_ALL = gql`
  {
    getSnippets {
      id,
      name,
      description,
      content,
      mime
    }
  }
`;


export const GET_BY_ID = gql`
  query ($id: ID!){
    getSnippetById(id: $id) {
      id,
      name,
      description,
      content,
      mime
    }
  }
`;

export const CREATE = gql`
  mutation ($name: String!, $description: String, $content: String!) {
    createLink(
      name: $name,
      description: $description,
      content: $content,
    ) {
      id,
      name,
      description
      content,
      mime
    }
  }
`;


