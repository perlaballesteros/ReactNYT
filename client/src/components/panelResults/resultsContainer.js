import React from "react";
import SaveBtn from "./savebtn.js";

const ResultsContainer=(props)=>(
    <div className="row">
        <div className="col-sm-12">
        <br/>
        {/* <!-- This panel will initially be made up of a panel and wells for each of the articles retrieved --> */}
            <div className="panel panel-primary">

                {/* <!-- Panel Heading for the retrieved articles box --> */}
                <div className="panel-heading">
                    <h3 className="panel-title"><strong><i className="fa fa-table"></i> Results</strong></h3>
                </div>
                {/* <!-- This main panel will hold each of the resulting articles --> */}
                <div className="panel-body" >
                    <ul>
                        {props.articleResults.map((article,index)=>(
                            <li key={"result-item-"+index} >
                                <a href={article.web_url}><h3>{article.headline.main}</h3></a>
                                <h6>{article.pub_date}</h6>
                                {article.snippet}
                                <br/>
                                <SaveBtn saveArticle={props.saveArticle} 
                                link={article.web_url} 
                                title={article.headline.main}
                                description={article.snippet}
                                date={article.pub_date}/>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
);

export default ResultsContainer;