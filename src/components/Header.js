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
                         <p>
                            nsectetur, adipisci velit..."
                            "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
                            What is Lorem Ipsum?
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                            Why do we use it?
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


                            Where does it come from?
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                         </p>
                         </div>
                
            

        </div>
    );
}

export default Header;
