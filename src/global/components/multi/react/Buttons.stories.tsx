import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {Buttons} from "./Buttons";

storiesOf('Components/Buttons', module)
    .add('Ok button', () => <Buttons text={'Ok'}/>);