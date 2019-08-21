import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        textAlign: 'center',
        alignContent: 'center'
    },
    media: {
        float: 'left',
        width: 200
    },
    info: {
        textAlign: 'center'
    },
    icons: {
        padding: '15px',
        marginRight: '5px'
    }
});

const Header = () => {
    const classes = useStyles();
    return (
        <div>
            <div className={
                classes.media
            }>
                <img alt="headshot" border="0" src="https://i.ibb.co/vqXKQBf/headshot.png" width="200"/>
            </div>
            <div className={
                classes.info
            }>
                <div>
                    <h1>Brandon Mitchell</h1>
                    <div className={classes.icons}>
                        <FontAwesomeIcon icon="check-square"/>
                        <FontAwesomeIcon icon={
                            ['fab', 'github-square']
                        }/>
                        <FontAwesomeIcon icon={
                            ['fab', 'spotify']
                        }/>
                        <FontAwesomeIcon icon={
                            ['fab', 'flickr']
                        }/>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Header;
