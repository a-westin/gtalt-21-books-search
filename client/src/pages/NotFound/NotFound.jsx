import React from 'react';
import Container from '../../components/Container/Container';
import Row from '../../components/Row/Row';

const NotFound = () => {
    return (
<Container>
    <Row>
        <div className="col-sm-12 text-center mt-5">
            <h1 className="error-header">Error: Not Found</h1>
        </div>
    </Row>
</Container>
    );
};

export default NotFound;