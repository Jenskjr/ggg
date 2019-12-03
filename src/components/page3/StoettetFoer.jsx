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
          Content

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