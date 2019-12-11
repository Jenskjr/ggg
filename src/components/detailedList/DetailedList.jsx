import React, { useState, useEffect } from 'react';
import content from '../../content/content'
import { css } from 'emotion';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// components
import ScrollView from './../ui-components/ScrollView'

const DetailedList = props => {

    let [thisContent, setThisContent] = useState([]);

    useEffect(() => {
        getProjects();
    }, [])
    
    const getProjects = () => {
        const contentId = window.location.href.split("detailed-list/")[1];
        content.forEach(content => {
            if (contentId.toString() === content.id.toString()) {
                setThisContent(content)
            }
        })
    }

    return (
        <div className={container()}>
            <Link to={`/`}>
                <div className="organization"><img src={`/media/logos/${thisContent.logo}`} alt="" /><h4>{thisContent.title}</h4></div>
            </Link>

            {!thisContent.projects && <p className="disclamer">{props.lang.thereAreNoProjectsAtTheMoment}</p>}

            {thisContent.projects && thisContent.projects.length && thisContent.projects.map((project, index) => 
                <>
                    <div className="body">
                            <div className="left">
                                <div className="one">
                                    <Link to={`/details/${thisContent.organizationId}/${project.id}`}>
                                        <img src={`/media/images/${project.image}`} alt="" />
                                    </Link>
                                </div>
                            </div>
                            <div className="right">
                                <a href={thisContent.projects[index].url} target="_blank" rel="noopener noreferrer">
                                    <img src={"/media/logos/supporters/" + project.logo} alt=""/>
                                </a>
                            </div>
                    </div>
                    <div className="two">
                        <Link to={`/details/${thisContent.organizationId}/${project.id}`}>
                            <h4>{project.title}</h4>
                            <div>{project.description}</div>
                        </Link>
                    </div> 
                </>
            )}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        lang: state.lang
    };
};

const container = () => css`
    font-size: 0.8rem;
    background-color: white;

    .header, .body {
        display: flex;
       
    }

    .disclamer {
        text-align: center;
        padding: 1rem;
    }

    .organization {
        display: flex;
        margin: 1rem 0 1rem 0;
        padding: 0.5rem 0.75rem;
        border: 1px solid lightgrey;
        height: 2rem;
        align-items: center;

        img {
            max-height: 100%;
            padding-right: 1rem;
        }
    }

    .body {
        padding: 1rem;
        // border: 1px solid grey; 
        
        .left {
            width: 60%;
            margin-right: 0.8rem;
            overflow-y: hidden;
        
            img {
                width: 100%;
            }
        }
        
        .right {
            width: 40%;
            img {
                width: 100%;
            }
        }
    }

    .two {
        padding: 0 1rem 1rem 1rem;
        border-bottom: 1px solid lightgrey;
    }

    a {
        text-decoration: none;
        color: black;
    }

    h4 {
        padding: 0 0 0.2rem 0;
        margin: 0;
        font-weight: normal;
        font-size: 1rem;
    }


`
export default connect(mapStateToProps)(DetailedList)