import * as React from 'react';
function GridListComponent(props: any) {
      
    
  return (    
    <div className="GridList">
    <div data-grid="col-12 stack-2">
    {props.values.map((entry:any, index:any) => (
      <div data-grid={`col-${props.inRow}`} className={`p-1 col-${props.inRow}`}>
          <div data-grid="col-12">
              <h3 className="c-heading">
              <i className={`"fa  fa-lg" ${entry.icon}`}></i>
              {entry.elink ? (
                
                 <a href={entry.elink} target="_blank"> {entry.name} </a>
               
              ) : <span>{entry.name}  </span>}
              </h3>
              <div className="c-paragraph">   
               <p> {entry.period} </p>  
               <p> {entry.desc} </p>  
               {entry.target ? (
                <div>
                 <a href={entry.target} target="_blank"> {entry.elink} </a>
                </div>
              ) : <span> </span>}
                 </div>
          </div>
        </div>
    ))}
    </div>
    </div>
  )
}
export default GridListComponent;