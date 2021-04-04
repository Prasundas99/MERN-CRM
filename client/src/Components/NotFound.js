import React from 'react'
import Container from '@material-ui/core/Container';

import Typography from '@material-ui/core/Typography';

function NotFound() {
    return (
        <>
        <br /><br /><br /><br /><br /><br />
        <Container maxWidth="md">
            <Typography variant='h2'>Error 404 :(</Typography>
            <Typography variant='h6'>We are sorry but the page you are looking for does not exist....</Typography>
        </Container>
        </>
    )
}

export default NotFound
