import React,{Component} from 'react';
import employees from '../../data/employeeList.json';
//import Row from 'react-bootstrap/Row';
// import Table from 'react-bootstrap/Table';
import { MDBDataTable } from 'mdbreact';

class Search extends Component {
    state = {
        searchResults:[]
    }
    componentDidMount() {
        this.setState({
            searchResults:employees
        });
    }

    // componentDidUpdate(previousProp) {
    //     if(previousProp.search!==this.props.search) {
    //         this.setState({
    //             searchResults:employees.filter(employee=>employee.name.includes(this.props.search))
    //         });
    //         this.DatatablePage();
    //     }
    // }

    DatatablePage = ()=> {
        const data = {
          columns: [
            {
              label: 'ID',
              field: 'id',
              sort: 'asc',
            },
            {
              label: 'Name',
              field: 'name',
              sort: 'asc',
            },
            {
              label: 'Department',
              field: 'department',
              sort: 'asc',
            }
          ],
          rows: this.state.searchResults
        };
      
        return (
          <MDBDataTable
          responsive
            striped
            bordered
            data={data}
          />
        );
      }

    // sortList = ()=> {
    //     let newArray = this.state.searchResults.sort();
    //     console.log(newArray);
    //     this.setState({
    //         searchResults:newArray
    //     });
        
    // }

    render() {
        return <div>
            {/* <button onClick={()=>this.sortList()}>Sort list by alphabetical order</button> */}
            {/* <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Department</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.searchResults.map(employee=>
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.name}</td>
                        <td>{employee.department}</td>
                    </tr>)}
                </tbody>
            </Table> */}
            {this.DatatablePage()}
            {/* {this.state.searchResults.map(employee=><div key={employee.id}>{employee.name}</div>)} */}
        </div>
    }
}

export default Search;

// Note to TA: I had spent a ridiculous amount of time building my table and functions from scratch before I discovered there is a component (MDBDataTable) that does the sorting and searching for me, and it works better than what I had accomplished. I left my old code as comments just to show the work