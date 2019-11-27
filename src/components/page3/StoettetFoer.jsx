import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../../actions/actions';
// css
import styles from './StoettetFoer.module.css'
// components
import ListView from '../ui-components/ListView'
import ListItem from '../ui-components/ListItem'
// content 
import content from '../../content/content'

const StoettetFoer = (props, {count, dispatch}) => {
    return (  
        <div className={styles.container}>
            {/* {props.count}
            <button onClick={() => props.increment()}>Hest</button>
            <button onClick={() => props.decrement()}>Ko</button> */}
            {/* {handleSomething()} */}
             {content.filter(content => content.supportedBefore).map((content, index) => 
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

const mapStateToProps = state => {
    return {
      count: state.count
    };
};

const mapDispatchToProps = dispatch => {
    return {
      increment: () => dispatch({ type: 'INCREMENT' }),
      decrement: () => dispatch({ type: 'DECREMENT' }),
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(StoettetFoer);