import React from "react";

const SavedContainer=(props)=>(
    <div className="row">
        <div className="col-sm-12">
        <br/>
        {/* <!-- This panel will initially be made up of a panel and wells for each of the articles retrieved --> */}
            <div className="panel panel-primary">

                {/* <!-- Panel Heading for the retrieved articles box --> */}
                <div className="panel-heading">
                    <h3 className="panel-title"><strong><i className="fa fa-table"></i>   Saved Articles</strong></h3>
                </div>
                {/* <!-- This main panel will hold each of the resulting articles --> */}
                <div className="panel-body" >
                    <ul>
                        {props.savedArticles.map(article=>(
                            <li>
                                <a href={article.link}><h3>{article.title}</h3></a>
                                <h6>{article.pub_date}</h6>
                                <button>delete</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
);

export default SavedContainer;