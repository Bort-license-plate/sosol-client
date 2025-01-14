import gql from "graphql-tag";

export const FEED = gql`
  query feed($offset: Int!, $limit: Int) {
    feed(offset: $offset, limit: $limit) {
      id
      text
      tags
      isTweetMine
      commentsCount
      retweetsCount
      isRetweet
      files {
        id
        url
      }
      user {
        id
        publicAddress
        avatar
        handle
        consumerName
      }
      reactions {
        id
        emojiId
        skin
        isMine
        count
      }
      createdAt
    }
  }
`;

export const USERS = gql`
  query users {
    users {
      id
      handle
      isFollowing
      isSelf
      consumerName
      avatar
    }
  }
`;

export const MENTIONS = gql`
  query mention {
    mentions {
      id
      text
      tags
      isTweetMine
      commentsCount
      retweetsCount
      isRetweet
      reactions {
        id
        emojiId
        skin
        isMine
        count
      }
      files {
        id
        url
      }
      user {
        id
        avatar
        publicAddress
        handle
        consumerName
      }
      createdAt
    }
  }
`;

export const HEALTH = gql`
  query healthCheck {
    healthCheck
  }
`;
