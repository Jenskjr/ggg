import React, { useState, useEffect } from 'react';
import content from '../../content/content'
import { css } from 'emotion';
import { Link } from 'react-router-dom';

const DetailedList = () => {

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
            <div className="header">
                <div className="left">
                    Projekter
                </div>
                <div className="right">Partnere</div>
            </div>
            {!thisContent.projects && <p className="disclamer">Der er desværre i øjeblikket ingen projekter.</p>}

            {thisContent.projects && thisContent.projects.length > 0 && thisContent.projects.map((project, index) => 
                <div className="body">
                    <>
                        <div className="left">
                            <div className="one">
                                <Link to={`/details/${project.id}`}>
                                    <img src={`/media/images/${project.image}`} alt="" />
                                </Link> 
                            </div>
                            <div className="two">
                                <Link to={`/details/${project.id}`}>
                                    <h4>{project.title}</h4>
                                    <div>{project.description}</div>
                                </Link>
                            </div>
                        </div>
                        <div className="right">
                            <a href={thisContent.projects[index].url} target="_blank" rel="noopener noreferrer">
                                <img src={"/media/logos/supporters/" + project.logo} alt=""/>
                            </a>
                        </div>
                    </>
                </div> 
            )}
        </div>
    )
}

const container = () => css`
    font-size: 0.8rem;

    .header, .body {
        display: flex;
       
    }

    .disclamer {
        text-align: center;
        padding: 1rem;
    }

    .header {
        border-bottom: 1px solid lightgrey;
        color: grey; 
        padding: 0.5rem 1rem;
        font-size: 0.9rem;
        
        .left {
            // border: 1px solid grey;
            width: 80%;
            text-align: center;   
        }

        .right {
            // border: 1px solid grey;
            width: 20%;
        }
    }

    .body {
        padding: 1rem;
        
        .left {
            display: flex;
            width: 80%;
            // border: 1px solid grey;
            
            .one {
                width: 40%;
                overflow-y: hidden;
            }
    
            .two {
                width: 60%;
                padding: 0 0.8rem 0 0.8rem;
            }
    
            img {
                width: 100%;
            }
        }
        
        .right {
            // border: 1px solid grey;
            width: 20%;
            img {
                width: 100%;
            }
        }
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
    

export default DetailedList;