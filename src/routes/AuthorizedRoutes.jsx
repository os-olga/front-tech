import { Box } from '@mui/material'
import { Route, Redirect, useLocation } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Test from '../components/test/Test'
import CreateResume from '../pages/resumes/CreateResume'
import EditResume from '../pages/resumes/EditResume'
import Resumes from '../pages/resumes/Resumes'
import ViewResume from '../pages/resumes/ViewResume'

const links = ['/sigin', '/acceptline', '/resume']

export default function AuthorizedRoutes({ userData, token }) {
    const location = useLocation();
    const { pathname } = location;
    console.log('/' + document.location.pathname.split('/').slice(1,2).join('/'))
    return (
        <Box>
            {!token && !links.includes('/' + document.location.pathname.split('/').slice(1,2).join('/'))

                ?
                <Redirect to="/" />
                :
                <Box>
                    {pathname !== "/" &&
                        pathname !== "/signin"  && <Header />}
                    <Box sx={{
                        maxWidth: "1440px",
                        padding: "0px 38px",
                        margin: "0 auto",
                        "@media (max-width: 900px)": {
                            padding: "0px 24px",
                        },
                        "@media (max-width: 490px)": {
                            width: "100%",
                            padding: "0px 12px",
                        },
                    }}>
                        <Route path="/resumes">
                            <Resumes userData={userData} />
                        </Route>
                        {/* <Route path="/resume/:id">
                            <ViewResume />
                        </Route> */}
                        <Route path="/create-resume">
                            <CreateResume />
                        </Route>
                        <Route path="/edit-resume/:id">
                            <EditResume />
                        </Route>
                        <Route path="/new">
                            <Test />
                        </Route>
                    </Box>
                    {pathname !== "/" &&
                        pathname !== "/signin" && <Footer />}
                </Box>
            }
        </Box>
    )
}