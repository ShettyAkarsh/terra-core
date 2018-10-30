import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import { Avatar } from 'terra-avatar/lib/Avatar';
import exampleAvatarImage from '../../assets/150x150.jpg';

const AvatarSize = () => (
  <Avatar alt="John Doe" image={exampleAvatarImage} height="5em" width="5em" />
);

export default AvatarSize;
