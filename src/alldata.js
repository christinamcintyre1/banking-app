import React from 'react';

function AllData () {
    const UserContext = React.createContext(null);
    const ctx = UserContext(UserContext);
    return (
      
        <h1>AllData<br />
            {JSON.stringify(ctx)}
        </h1>
      
    );
}

export default AllData;