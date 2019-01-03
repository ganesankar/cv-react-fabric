import * as React from 'react';

function ExpertiseComponent(props: any) {
  return (
    <section>
    <div data-grid="container">
        <div className="m-content-placement x-clearfix">
            <div className="ms-Grid ms-Grid--wide">
                <div className="ms-Grid-row contentInGrid_cbb802cf">
                    <div className="ms-Grid-col ms-lg3 ">
                        
                        <div className="description_cbb802cf">Fabric gives you access to Segoe, Microsoft’s official typeface, along with the color palette, type ramp, icons,
                            and responsive grid for Office 365.</div>
                    </div>
                    <div className="ms-Grid-col ms-lg9 ">
                    {props.data.values.map((entry:any) => (
                    <div data-grid="col-12 pad-6x">
                        <div data-grid="col-12">
                            <h3 className="c-heading">{entry.name}</h3>
                            <div className="c-paragraph">
                                <div>
                                    <a style={{ margin: "10px 0" }} href={entry.target} target="_blank">
                                        {entry.elink}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                    </div>
                    
                </div>
            </div>

        </div>
        </div>
</section>
  )
}
export default ExpertiseComponent;