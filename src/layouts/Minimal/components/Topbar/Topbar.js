import React from "react";
import { Link as RouterLink } from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        boxShadow: "none",
    },
    logo:{
        color: theme.palette.white,
        fontWeight:"bold"
    }
}));

const Topbar = (props) => {
    const { className, ...rest } = props;

    const classes = useStyles();

    return (
        <AppBar
            {...rest}
            className={clsx(classes.root, className)}
            color="primary"
            position="fixed"
        >
        <Toolbar>
            <RouterLink style={{ textDecoration: 'none', color:'inherit', marginTop: '2px'}} to="/">
                <Typography variant="h3" className={classes.logo}>Boilerplate</Typography>
            </RouterLink>
        </Toolbar>
        </AppBar>
    );
};

Topbar.propTypes = {
    className: PropTypes.string,
};

export default Topbar;
