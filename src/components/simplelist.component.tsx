import * as React from 'react';

import { Image, ImageFit } from 'office-ui-fabric-react/lib/Image';
function SimpleListComponent(props: any) {
    
    
    
  return (
    
    <div className="CardList">
    <div data-grid="col-12 stack-2">
    {props.values.map((entry:any, index:any) => (
                     <div data-grid="col-12 pad-6x">
            <div data-grid="col-12">
            
            <div className="ms-ListBasicExample-itemCell" data-is-focusable={true}>
            <Image className="ms-ListBasicExample-itemImage" src={entry.thumbnail} width={50} height={50} imageFit={ImageFit.cover} />
            <div className="ms-ListBasicExample-itemContent">
              <div className="ms-ListBasicExample-itemName">{entry.name}</div>
              <h4 className="strong">{entry.small} <small> {entry.team} </small></h4>
              <div className="ms-ListBasicExample-itemIndex">{`${index} - at ${entry.period}`}</div>
              <div className="ms-ListBasicExample-itemDesc"  dangerouslySetInnerHTML={{ __html: entry.desc }}  ></div>
            </div>
             </div>
        <p/>
            </div>
        </div>
                ))}
    </div>
    </div>
  )
}
export default SimpleListComponent;