import * as React from 'react';

import CountListComponent from './countlist.component';
import ProgressListComponent from './progresslist.component';
import TimeLineListComponent from './timelinelist.component';
import CardSmallComponent from './cardsmall.component';
import SimpleListComponent from './simplelist.component';
import ListComponent from './list.component';
import GridListComponent from './gridlist.component';



function SectionComponent(props: any) {
  return (
    <section>
    <div data-grid="container">
        <div className="m-content-placement x-clearfix">
        <div data-grid="col-12 stack-2 border-top-1">
        <div data-grid="col-3 pad-6x">
            <div data-grid="col-12 ">
                <h3 className="c-heading"> {props.data.name}</h3>
                <div className="c-paragraph">
                    <p>
                    {props.data.desc}
                    </p>
                </div>
            </div>
        </div>
        <div data-grid="col-9 pad-6x">
            <div data-grid="col-12">
                <h3 className="c-heading"></h3>
                {props.type==="count"  && (<CountListComponent values={props.data.values}  /> )}
                {props.type==="progress"  && (<ProgressListComponent values={props.data.values}  /> )}
                {props.type==="timeline"  && (<TimeLineListComponent values={props.data.values}  /> )}            
                {props.type==="cardsmall"  && (<CardSmallComponent values={props.data.values}  /> )}
                {props.type==="simplelist"  && (<SimpleListComponent values={props.data.values}  /> )}
                {props.type==="list"  && (<ListComponent values={props.data.values}  /> )}
                {props.type==="gridlist"  && (<GridListComponent values={props.data.values}   inRow={props.inRow}/> )}
                
        </div></div>
    </div>

        </div>
        </div>
</section>
  )
}
export default SectionComponent;