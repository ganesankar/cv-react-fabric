import * as React from 'react';

function ListComponent(props: any) {
    
    
    
  return (
    
    <div className="CardList">
    <div data-grid="col-12 stack-2">
    {props.values.map((entry:any, index:any) => (
      <div role="listitem" className="ms-List-cell" data-list-index="1" data-automationid="ListCell">
        <div className="ms-ListScrollingExample-itemCell" data-is-focusable="true" >
        <div className={`ms-ListScrollingExample-itemContent ms-ListScrollingExample-itemContent-${index  % 2 == 0 ? 'even' : 'odd'}`}>
        {entry.name} </div></div></div>
                   
                ))}
    </div>
    </div>
  )
}
export default ListComponent;