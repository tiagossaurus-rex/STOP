import React from "react";

import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import { useAppContext } from "../context";

const Field = ({
    label,
    currentLetter,
    ...props
}) => {
    const classes = {};

    return (
        <TextField
            autoFocus
            fullWidth
            variant="outlined"
            // value={value}
            // onChange={handleChange}
            // onKeyDown={onKeyDown}
            label={label}
            classes={{
                root: classes.root,
            }}
            placeholder={currentLetter}
            InputLabelProps={{
                shrink: true,
                classes: {
                    root: classes.label,
                },
            }}
        />
    );
};

export const Game = props => {
    const { state, actions } = useAppContext();
    const { currentLetter, selectedCategories } = state;

    return (
        <>
            <Typography variant="h1" align="center" color="primary">{currentLetter.toUpperCase()}</Typography>
            <div style={{padding: 48}}>
                <Grid container spacing={2} padding={2}>
                    {selectedCategories.map(cat => {
                        return (
                            <Grid key={cat.id} item md={4} sm={6} xs={12}>
                                <Field
                                    label={cat.name}
                                    currentLetter={currentLetter}
                                />
                            </Grid>
                        );
                    })}
                </Grid>
            </div>
        </>
    );
};
