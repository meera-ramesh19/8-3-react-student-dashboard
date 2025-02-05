import { Component } from 'react';
import Student from './Student';
import './Students.css';

class Students extends Component {
  render() {
    const { data, selectedCohortCode } = this.props;

    /**
     *  removes the space from the SelectedCohortCode
     * @param {state variable} - selectedCohortCode
     * @returns the selectedCohortCode with removed spaces
     */
    const newselectedCohortCode = selectedCohortCode.split(' ').join('');

    /**
     *  filters the cohortCode
     * @param {[]Array} data- array
     * @returns filtered array
     */
    const cohortStudents = data.filter(
      (ele) => ele.cohort.cohortCode === newselectedCohortCode
    );

    const cohortSelected =
      selectedCohortCode === 'All Students'
        ? data.length
        : cohortStudents.length;

    return (
      <div className='students'>
        <div className='cohortHeader'>
          <h2>{selectedCohortCode}</h2>
          <small>
            Total Students:{' '}
            <span style={{ color: 'green', fontWeight: '900' }}>
              {cohortSelected}
            </span>
          </small>
        </div>
        <div className='studentInfo'>
          {selectedCohortCode === 'All Students'
            ? data.map((datas) => {
                return <Student key={datas.id} studentData={datas} />;
              })
            : cohortStudents.map((datas) => {
                return <Student key={datas.id} studentData={datas} />;
              })}
        </div>
      </div>
    );
  }
}

export default Students;
