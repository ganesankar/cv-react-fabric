
import * as React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import { Dispatch } from 'redux';
import { bindActionCreators } from 'redux';
import { updateRecord } from '../actions/actions';

class RecordComponent extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            amount: '', title: '', date: ''
        }
    }


    onChangeAmount: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        this.setState({ amount: e.currentTarget.value })
    }
    onChangeTitle: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        this.setState({ title: e.currentTarget.value })
    }
    onChangeDate: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        this.setState({ date: e.currentTarget.value })
    }

    onClickSubmit: React.ChangeEventHandler<HTMLInputElement> = () => {
        let myData = [...this.props.myData];
        myData.push(this.state)
        this.props.updateRecord(myData);
        this.setState({
            amount: '', title: '', date: ''
        })
    }

    public render() {
        return (
            <div style={{ textAlign: 'left', margin: '20px' }}>
                <input type="date" placeholder="date" value={this.state.date} onChange={this.onChangeDate} />
                <input type="text" placeholder="title" value={this.state.title} onChange={this.onChangeTitle} />
                <input type="number" placeholder="Amount" value={this.state.amount} onChange={this.onChangeAmount} />
                <Button variant="contained" color="primary" size="small" onClick={this.onClickSubmit.bind(this)}>Create Record</Button>
            </div>
        )
    }
}
const mapStateToProps = (state: any) => {
    return {
        myData:state.records
    };
  };
  
  const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators({ updateRecord }, dispatch)
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(RecordComponent);


