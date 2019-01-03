import * as React from 'react';

function HeadComponent(props: any) {
  return (
    <section role="presentation" className="m-hero-item f-medium f-x-left f-y-bottom context-game theme-dark f-mask-80" >  
                <div>
                    <div>
                    <h1 className="c-heading"> {props.profile.intro.title}  {props.profile.lastname}</h1>
                        <h2 className="c-heading">{props.profile.intro.name}</h2>
                        <div className="c-paragraph">
                            <div    dangerouslySetInnerHTML={{ __html: props.profile.intro.desc }}         />
                        <div>               

                        </div>
                        </div>
                    </div>
                </div>
            </section>
  )
}
export default HeadComponent;