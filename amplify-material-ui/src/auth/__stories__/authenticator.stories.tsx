import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Authenticator from '../authenticator';

const stories = storiesOf('Auth/Authenticator', module);

stories.add('without props', () => <Authenticator />);