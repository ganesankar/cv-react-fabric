import * as React from 'react';

function ContactLinkComponent(props: any) {
  return (
    <section>
    <div data-grid="container">
        <div className="m-content-placement x-clearfix">
            <div data-grid="col-12 stack-2">
                {props.profile.contacts.map((entry:any) => (
                    <div data-grid="col-3 pad-6x">
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
</section>
  )
}
export default ContactLinkComponent;