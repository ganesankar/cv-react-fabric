
import * as React from 'react';

import HeadComponent from './head.component'; 
import SectionComponent from './section.component';
import { Spinner, SpinnerSize } from 'office-ui-fabric-react/lib/Spinner';
import { connect } from "react-redux";

class MainComponent extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
    }

    public render() {
        let profileData:any = {};
        console.log("mydata", this.props.myData[0]);   
        if(this.props.myData.length > 0){
            profileData =  this.props.myData[0]; 
        }     
        return (
            <div className="ms-Fabric">
            {this.props.myData.length > 0  && (
                <div>
                    <HeadComponent profile={profileData}  />
                    <SectionComponent type="gridlist" data={profileData.contacts} inRow={3} />
                    <SectionComponent type="count" data={profileData.expertise}  />
                    <SectionComponent type="progress" data={profileData.percentage}  />
                    <SectionComponent type="timeline" data={profileData.experience}  />
                    <SectionComponent type="cardsmall" data={profileData.education}  />
                    <SectionComponent type="simplelist" data={profileData.projects}  />
                    <SectionComponent type="list" data={profileData.otherproj}  />
                    <SectionComponent type="gridlist" data={profileData.awards} inRow={4} />
                    <SectionComponent type="gridlist" data={profileData.profile} inRow={3} />
                    <SectionComponent type="gridlist" data={profileData.contacts} inRow={3} />
                    <footer  className="c-uhff context-uhf" data-uhf-mscc-rq="false"  >
                        <div className="c-uhff-base">                            
                            <nav role="navigation" aria-label="Microsoft corporate links">
                            <SectionComponent type="gridlist" data={profileData.social} inRow={3} />
                            </nav>
                        </div>
                        
                    </footer>


                </div>
            )}
             {this.props.myData.length == 0  && (
                 <div className="flexCenter">
                 <Spinner size={SpinnerSize.large} label="loading..." ariaLive="assertive" />
                 </div>
                 )}


            
            
                
                
               
                
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        myData:state.records
    };
  };
    
  export default connect(mapStateToProps)(MainComponent);
