import React from  'react';
import { connect } from 'react-redux';
import TabView from '../ui-components/TabView';
import Page1 from '../page1/AlleNGOer';
import Page2 from '../page2/TidligereSoegte';
import Page3 from '../page3/StoettetFoer';
import Search from '../ui-components/Search';

const Example = props => {

    const tabs = [props.lang.allNGOs, props.lang.previousSearches, props.lang.supportedBefore]
    const content = [<Page1/>, <Page2/>, <Page3/>]
    return (
        <div>
            <Search/>
	        <TabView tabs={tabs} content={content}/>
        </div>
)}

const mapStateToProps = state => {
    return {
        lang: state.lang
    };
};

export default connect(mapStateToProps)(Example)
