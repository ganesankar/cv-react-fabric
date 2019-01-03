import * as React from 'react';
import {
    DocumentCard,
    DocumentCardActivity,
    DocumentCardTitle,
    DocumentCardLogo,
    DocumentCardStatus,
    IDocumentCardLogoProps,
    DocumentCardType
  } from 'office-ui-fabric-react/lib/DocumentCard';

function CardSmallComponent(props: any) {
    const logoProps: IDocumentCardLogoProps = {
        logoIcon: 'OutlookLogo'
      };
    
    
  return (
    
    <div className="CardList">
    <div data-grid="col-12 stack-2">
    {props.values.map((entry:any) => (
                     <div data-grid="col-12 pad-6x">
            <div data-grid="col-12">
            
              <DocumentCard  type={DocumentCardType.compact} className="cardItem" >
                <DocumentCardLogo {...logoProps} />
                <div className="ms-ConversationTile-TitlePreviewArea">
                  <DocumentCardTitle
                    title={entry.name}
                    shouldTruncate={true}
                  />
                  <DocumentCardActivity
                  activity={entry.period}
                  people={[
                    { name: entry.comp, profileImageSrc: '' }
                  ]}
                />
                <div  className="p-1" dangerouslySetInnerHTML={{ __html: entry.desc }}         />
                      
                          {entry.status > 0  && (
                  <DocumentCardStatus statusIcon="attach" status={entry.status } />)}
                </div>
                
              </DocumentCard>
        <p/>
            </div>
        </div>
                ))}
    </div>
    </div>
  )
}
export default CardSmallComponent;