import React from 'react';
// css
import styles from './TidligereSoegte.module.css'
// components
import ListView from '../ui-components/ListView'
import ListItem from '../ui-components/ListItem'
// content 
import content from '../../content/content'



const TidligereSoegte = () => {
    return (
        <div className={styles.container}>
        {content.filter(content => content.searchedBefore).map((content, index) => 
                <ListView key={index}>
                    <ListItem 
                        left={"/media/logos/" + content.logo} 
                        center={content.title} 
                        contentId={content.id}
                        link={"detailed-list"}
                        height="8rem">
                    </ListItem>
                </ListView>
            )}
        </div>
    )
    
}

export default TidligereSoegte;