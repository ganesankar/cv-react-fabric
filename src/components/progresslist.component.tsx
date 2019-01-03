import * as React from 'react';
import { ProgressIndicator } from 'office-ui-fabric-react/lib/ProgressIndicator';

function ProgressComponent(props: any) {
  return (
    <div className="ProgressList">
    <div data-grid="col-12 stack-2">
    {props.values.map((entry:any) => (
                     <div data-grid="col-6 pad-6x">
            <div data-grid="col-12">
            <ProgressIndicator label={entry.name} description={entry.ico} percentComplete={Number(entry.ico)} />
             
            </div>
        </div>
                ))}
    </div>
    </div>
  )
}
export default ProgressComponent;