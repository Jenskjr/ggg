import React from  'react';
import TabView from '../ui-components/TabView';
import Page1 from '../page1/AlleNGOer';
import Page2 from '../page2/TidligereSoegte';
import Page3 from '../page3/StoettetFoer';

const Example = () => {

    const tabs = ["Alle NGO'er", "Tidligere Søgte", "Støttet før"]
    const content = [<Page1/>, <Page2/>, <Page3/>]
    return (
        <div>
	        <TabView tabs={tabs} content={content}/>
        </div>
)}

export default Example
