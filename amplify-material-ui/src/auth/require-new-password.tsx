import * as React from 'react';
import { createStyles, makeStyles, TextField, Theme } from '@material-ui/core';
import { I18n } from '@aws-amplify/core';

import { AuthProps } from './auth-props';
import { FormSection, SectionHeader, SectionBody, SectionFooter } from '../ui';

import { useForm } from '../hooks';

export interface RequireNewPasswordProps extends AuthProps {}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing(1),
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        },
    }),
);

export const RequireNewPassword: React.FC<RequireNewPasswordProps> = props => {
    const { authState } = props;

    const classes = useStyles();

    const submit = () => {};

    const { inputs, handleInputChange, handleSubmit } = useForm(submit, {
        code: '',
        password: '',
    });

    if (!['requireNewPassword'].includes(authState)) {
        return null;
    }

    return (
        <FormSection>
            <SectionHeader>{I18n.get('Reset your password')}</SectionHeader>
            <form onSubmit={handleSubmit} className={classes.form} noValidate>
                <SectionBody>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="code"
                        label={I18n.get('Code')}
                        name="code"
                        autoFocus
                        onChange={handleInputChange}
                        value={inputs.code}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label={I18n.get('New Password')}
                        type="password"
                        id="password"
                        onChange={handleInputChange}
                        value={inputs.password}
                    />
                </SectionBody>
                <SectionFooter />
            </form>
        </FormSection>
    );
};
