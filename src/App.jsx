// import Header from '@components/Header' is possible due to proper webpack configuration with resolve.aliases property
import Header from '@components/Header';
import React from 'react';

const App = () => {
    return (
        <div className="App">
            <Header fullName="Ferko Halushka" />
            <span>My first app</span>
        </div>
    );
};

export default App;
// export { App };
