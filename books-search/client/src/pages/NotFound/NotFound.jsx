import React from 'react';

const NotFound = () => {
    return (
<Container>
    <Row>
        <div className="col-sm-12 text-center mt-5">
            <h1 className="error-header">Error: Not Found</h1>
            <img src={errorImg} alt="error: not found"/>
        </div>
    </Row>
</Container>
    );
};

export default NotFound;