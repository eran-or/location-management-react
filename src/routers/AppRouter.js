import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EditCategoryPage from '../components/EditCategoryPage';
import EditLocationPage from '../components/EditLocationPage';
import Dashboard from '../components/Dashboard'
import CategoryList from '../components/CategoryList';
import LocationList from '../components/LocationList';
import AddCategoryPage from '../components/AddCategoryPage';
import AddLocationPage from '../components/AddLocationPage';
import LocationDetails from '../components/LocationDetails';
import Navbar from '../components/Navbar';

//import NotFoundPage from '../components/NotFoundPage';
import Footer from '../components/Footer';

const AppRouter = (props) => (
    <Router basename="/location-management-react">
        <div>
            <Navbar />
            <Switch>
                <Route path="/" component={Dashboard} exact={true} />
                <Route path="/categories/edit/:id" component={EditCategoryPage} />
                <Route path="/locations/edit/:id" component={EditLocationPage} />
                <Route path="/locations/create/" component={AddLocationPage} exact={true} />
                <Route path="/locations/:edit?" component={LocationList} exact={true} />
                <Route path="/categories/create/" component={AddCategoryPage} exact={true} />
                <Route path="/categories/:edit?" component={CategoryList} exact={true} />
                <Route path="/location/:id" component={LocationDetails} />
                {
                /* <Route component={NotFoundPage} /> */
                }
            </Switch>
            <Footer {...props}/>
        </div>
    </Router >
);

export default AppRouter;