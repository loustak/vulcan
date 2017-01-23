import { registerComponent } from 'meteor/nova:lib';
import React from "react";
import { FormattedMessage } from "react-intl";

const PostsNoMore = props => <p className="posts-no-more"><FormattedMessage id="posts.no_more"/></p>;

PostsNoMore.displayName = "PostsNoMore";

registerComponent('PostsNoMore', PostsNoMore);