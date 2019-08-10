import React from 'react';
import Header from './Header';
import TerminalApp from './TerminalApp';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
    const {
        children,
        value,
        index,
        ...other
    } = props;

    return (
        <div style={
            {backgroundColor: "#e0e2e6"}
        }>
            <Typography component="div" role="tabpanel"
                hidden={
                    value !== index
                }
                id={
                    `simple-tabpanel-${index}`
                }
                aria-labelledby={
                    `simple-tab-${index}`
                }
                {...other}>
                <Box p={4}>
                    {children}</Box>
            </Typography>
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
};

function a11yProps(index) {
    return {id: `simple-tab-${index}`, 'aria-controls': `simple-tabpanel-${index}`};
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    }
}));

const NavBar = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    return (
        <div className={
            classes.root
        }>
            <AppBar position="static">
                <Tabs centered='true'
                    value={value}
                    onChange={handleChange}
                    aria-label="simple tabs example">
                    <Tab label="Home" {...a11yProps(0)}/>
                    <Tab label="About" {...a11yProps(1)}/>
                    <Tab label="Hobbies" {...a11yProps(2)}/>
                    <Tab label="Hack" {...a11yProps(3)}/>
                </Tabs>
            </AppBar>
            <TabPanel value={value}
                index={0}>
                <Header/>
            </TabPanel>
            <TabPanel value={value}
                index={1}>
                <Header/>
                Item Two
            </TabPanel>
            <TabPanel value={value}
                index={2}>
                <Header/>
                Item Three
            </TabPanel>
            <TabPanel value={value}
                index={3}>
                <Header/>
                <TerminalApp/>
            </TabPanel>
        </div>
    );
}

export default NavBar;
