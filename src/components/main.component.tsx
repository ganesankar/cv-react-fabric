
import * as React from 'react';

import CardComponent from './card.component';
import GridComponent from './grid.component';
import RecordComponent from './newRecord.component';

import { connect } from "react-redux";

class MainComponent extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
    }

    public render() {
        let total: number = 0;
        let credits: number = 0;
        let debits: number = 0;
        this.props.myData.map((row: { amount: number }) => {
            if (row.amount < 0) {
                debits = debits + -(row.amount);
            }
            else {
                credits = +credits + +row.amount;
            }
            total = +total + +row.amount;
        })
        return (
            <div>
                <h2>Records</h2>
                <div style={{ textAlign: 'left', width: '800px' }}>
                    <CardComponent amount={credits} recordType='Credit' classes='greenCard' />
                    <CardComponent amount={debits} recordType='Debit' classes='redCard' />
                    <CardComponent amount={total} recordType='Balance' classes='blueCard' />
                </div>
                <RecordComponent myProps={this.props.myProps} />
                <GridComponent />
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
