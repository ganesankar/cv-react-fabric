import { AgGridReact } from 'ag-grid-react';
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/ag-theme-balham.css';
import ClickableRenderer from './clickable.component';

import { connect } from "react-redux";
import { Dispatch } from 'redux';
import { bindActionCreators } from 'redux';
import { getAllRecords } from '../actions/actions';

import * as React from 'react';

class GridComponent extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            columnDefs: [
                { headerName: "Date", field: "date", width: 198 },
                { headerName: "Title", field: "title", width: 198 },
                { headerName: "Amount", field: "amount", width: 198 },
                { headerName: "Actions", field: "title", width: 198, cellRendererFramework: ClickableRenderer }


            ],
            rowData: this.props.myData
        }

    }
    componentDidMount() {
        this.props.getAllRecords();
      }
    componentWillReceiveProps(nextProps:any) {
        this.setState({ rowData: nextProps.myData });
    }
    shouldComponentUpdate() {
        return true
    }
    public render() {
        return (
            <div
                className="ag-theme-balham"
                style={{
                    height: '200px',
                    width: '800px',
                    margin: '20px'
                }}
            >
                <AgGridReact enableSorting={true} enableFilter={true} columnDefs={this.state.columnDefs} rowData={this.state.rowData} />
            </div>
        )
    }

}
const mapStateToProps = (state: any) => {
    return {
      myData: state.records
    };
  };
  
  const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators({ getAllRecords }, dispatch)
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(GridComponent);
  
