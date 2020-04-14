import React from 'react';

import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import BlockIcon from '@material-ui/icons/Block';
import Slider from '@material-ui/core/Slider';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import { makeStyles, withStyles } from '@material-ui/styles';

import { useAppContext } from '../context';

const useCategoryStyles = makeStyles(
    theme => ({
        root: {
            margin: theme.spacing(0.5),
        },
    }),
    {
        name: 'Chip',
    }
);
const useLetterStyles = makeStyles(
    theme => ({
        wrapper: {
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
        },
        root: {
            margin: 2,
            borderRadius: 2,
            textAlign: 'center',
        },
        icon: {
            color: theme.palette.error.main,
            margin: 0,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            opacity: 0.5,
        },
        label: {
            padding: 0,
            width: '2.5em',
        },
    }),
    {
        name: 'Chip',
    }
);

const CustomSlider = withStyles(theme => ({
    root: {
        color: theme.palette.primary,
        height: 8,
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -8,
        marginLeft: -12,
        '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
    },
    track: {
        height: 8,
        borderRadius: 4,
    },
    rail: {
        height: 8,
        borderRadius: 4,
    },
    mark: {
        opacity: 0,
    },
}))(Slider);

const useRoundsSliderStyles = makeStyles(theme => ({
    formControl: {
        width: '100%',
    },
    root: {
        padding: theme.spacing(2),
        // borderRadius: theme.shape.borderRadius,
        // background: 'white',
    },
    input: {
        width: 42,
    },
}));

const RoundNumberSelect = props => {
    const { state, actions } = useAppContext();
    const { lettersList } = state;

    const marks = lettersList.filter(l => l.selected).map((l, i) => ({ value: i + 1 }));

    const max = marks.length;

    const classes = useRoundsSliderStyles();

    const handleChange = event => {
        actions.roundSettings({
            number: event.target.value,
        });
    };

    return (
        <div className={classes.root}>
            <FormControl className={classes.formControl}>
                <InputLabel id="numberOfRoundsLabel">Number of Rounds</InputLabel>
                <Select
                    labelId="numberOfRoundsLabel"
                    id="numberOfRounds"
                    value={state.roundSettings.number < max ? state.roundSettings.number : max}
                    onChange={handleChange}
                >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                        <MenuItem value={num} disabled={num > max}>
                            {`${num} ${num === 1 ? 'round' : 'rounds'}`}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
};

const RoundDurationSelect = props => {
    const { state, actions } = useAppContext();
    const classes = useRoundsSliderStyles();

    const handleChange = event => {
        actions.roundSettings({
            duration: event.target.value,
        });
    };

    return (
        <div className={classes.root}>
            <FormControl className={classes.formControl}>
                <InputLabel id="RoundDurationLabel">Round Duration</InputLabel>
                <Select labelId="RoundDurationLabel" id="RoundDuration" value={state.roundSettings.duration} onChange={handleChange}>
                    {[30, 90, 120, 180, 300].map(num => (
                        <MenuItem value={num}>{num} seconds</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
};

export const Create = props => {
    const { state, actions } = useAppContext();
    const { lettersList, categoriesList } = state;

    const categoryClasses = useCategoryStyles();
    const { wrapper: wrapperClass, ...letterClasses } = useLetterStyles();

    const handleCategoryClick = id => {
        actions.toggleCategory({ id });
    };

    const handleLetterClick = id => {
        actions.toggleLetter({ id });
    };

    return (
        <>
            <Typography variant="h1" align="center" color="primary">
                Create New Game
            </Typography>

            <div style={{ padding: 48 }}>
                <Grid container spacing={2} padding={2}>
                    <Grid item xs={12}>
                        <Typography variant="h4" align="center" color="primary">
                            Letters
                        </Typography>
                        <Typography align="center">Choose which letters you want to play with</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <div className={wrapperClass}>
                            {lettersList.map(letter => {
                                return (
                                    <Chip
                                        key={letter.id}
                                        label={letter.id}
                                        color="default"
                                        icon={letter.selected ? null : <BlockIcon />}
                                        onClick={() => handleLetterClick(letter.id)}
                                        classes={letterClasses}
                                    />
                                );
                            })}
                        </div>
                    </Grid>
                </Grid>
            </div>

            <div style={{ padding: 48 }}>
                <Grid container spacing={2} padding={2}>
                    <Grid item xs={12}>
                        <Typography variant="h4" align="center" color="primary">
                            Rounds
                        </Typography>
                        {/* <Typography align="center">
                            How many rounds do you want to play?
                        </Typography> */}
                    </Grid>
                    <Grid item xs={4}>
                        <RoundNumberSelect />
                    </Grid>
                    <Grid item xs={4}>
                        <RoundDurationSelect />
                    </Grid>
                </Grid>
            </div>

            <div style={{ padding: 48 }}>
                <Grid container spacing={2} padding={2}>
                    <Grid item xs={12}>
                        <Typography variant="h4" align="center" color="primary">
                            Categories
                        </Typography>
                        <Typography align="center">Choose between 3 and 20 categories</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        {categoriesList.map(cat => {
                            return (
                                <Chip
                                    key={cat.id}
                                    label={cat.name}
                                    color={cat.selected ? 'primary' : 'default'}
                                    onClick={() => handleCategoryClick(cat.id)}
                                    classes={{
                                        root: categoryClasses.root,
                                    }}
                                />
                            );
                        })}
                    </Grid>
                </Grid>
            </div>
        </>
    );
};
