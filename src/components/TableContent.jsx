import React from 'react'

const TableContent = ({ users, loading }) => {
  return (
  <>
    {
        loading ? (<div className='.spinner-border-holder'>
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div> loading
    
    </div>):(<>
          <table className='table table-striped'>
              <thead className='thead-dark'>
                      <tr>
                      <td>S/N</td>
                        <td>Full Name</td>
                        <td>Phone Number</td>
                        <td>Email Address</td>
                        <td>Street</td>
                      </tr>
                    </thead>
                    <tbody>

                      {
                    users.map((user, index) => (
                      <tr key={user.id}>
                        <td>{index+1}</td>
                        <td>{user.name + user.username}</td>
                        <td>{user.phone}</td>
                        <td>{user.email}</td>
                        <td>{user.address.suite + ',' + user.address.street + ',' + user.address.city}</td>
                                
                              </tr>
                          )
                          )
                      }

                   </tbody>
                  </table>
    
    </>)
    }
  
  </>
  )
}

export default TableContent