import * as React from "react";
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import { Dispatch } from 'redux';
import { bindActionCreators } from 'redux';
import {  updateRecord } from '../actions/actions';

class ClickableRenderer extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            cell: {

                col: this.props.colDef.headerName,
                row: this.props.value
            }
        };

        this.clicked = this.clicked.bind(this);
    }

    public clicked() {
        let myData=[...this.props.myData];
        myData.map((data:any, index:number)=>{
                if(data.title == this.props.data.title){
                        
                    myData.splice(index,1)
                }
        })
       this.props.updateRecord(myData);
    }

    public render() {
        return (
            <div>
                <Button variant="contained" color="secondary" size="small" onClick={this.clicked} className="btn btn-info">Delete</Button>
                <Button variant="contained" color="primary" size="small" onClick={this.clicked} className="btn btn-info">Edit</Button>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
      myData: state.records
    };
  };
  
  const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators({ updateRecord }, dispatch)
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(ClickableRenderer);
