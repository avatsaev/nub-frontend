import gql from 'graphql-tag';


export const ALL_SNIPPETS = gql`
{
  getSnippets {
    id,
    name,
    description,
    content
  }
}
`;

export const CREATE_SNIPPET = gql`
  mutation ($name: String!, $description: String, $content: String!) {
    createLink(
      name: $name,
      description: $description,
      content: $content,
    ) {
      id,
      name,
      description
      content
    }
  }
`;


