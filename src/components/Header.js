import React from 'react';
import '../css/Header.css';
import {makeStyles} from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        minWidth: 300,
        textAlign: 'center',
        alignContent: 'center'
    },
    head: {
        backgroundImage: 'linear-gradient(#ffebee, #bbdefb)'
    },
    media: {
        float: 'left',
        width: 200
    },
    info: {
        textAlign: 'center',
        marginRight: '50px'
    },
    icons: {
        padding: '15px',
    }
    
});

const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes.head}>
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
                        <Button href="https://github.com/BrandontMitchell">
                            <div className="spotify">
                        <FontAwesomeIcon icon={
                            ['fab', 'github-square']
                        }
                        size="4x"
                        style={{color: "#000"}}/>
                        
                        </div>
                        </Button>
                        <Button href="https://www.flickr.com/photos/182839985@N04/">
                         <FontAwesomeIcon icon={
                             ['fab', 'linkedin']
                         }
                         size="4x"
                         style={{color: '#0063dc'}}/>
                         </Button>
                         <Button href="https://open.spotify.com/show/4x5t8ruHBJ6by93IHrUfFN">
                         <FontAwesomeIcon icon={
                             ['fab', 'spotify']
                         }
                         size="4x"
                         style={{color: "#1DB954"}}/>
                         </Button>
                         <Button href="https://www.flickr.com/photos/182839985@N04/">
                         <FontAwesomeIcon icon={
                             ['fab', 'flickr']
                         }
                         size="4x"
                         style={{color: '#ff0084'}}/>
                         </Button>
                         <Button href="./bmitchell_resume_vf.pdf" download>
                         <FontAwesomeIcon icon={faFileAlt}
                         size="4x"
                         style={{color: '#fff'}}/>
                         </Button>
                         </div>
                         </div>
                         </div>
                         <div>
                             <br/><br/><br/><br/><br/><br/>
                         </div>
                
            

        </div>
    );
}

export default Header;
