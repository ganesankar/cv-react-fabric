import * as React from 'react';

function CountListComponent(props: any) {
  return (
    <div className="CountList">
        <ol className="steps">
        {props.values.map((entry:any) => (
                    <li>   <h4> {entry.name}</h4>
                        {entry.values.map((entryval:any) => (    <p> {entryval.name}</p>   ))}
                    </li>
                ))}
        </ol>
    </div>
  )
}
export default CountListComponent;