import React, { Fragment, Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axiox) => {
    return class extends Component {

        state = {
            error: null
        }
        componentDidMount() {
            axiox.interceptors.request.use(req => {
                this.setState({
                    error: null
                });
                return req;
            });
            axiox.interceptors.response.use(res => res, error => {
                this.setState({
                    error: error
                });
            });
        }
        errorConfirmationHandler = () => {
            this.setState({error:null});
        }
        render() {
            return (
                <Fragment>
                  <Modal 
                  display = {this.state.error}
                  modalClosed = {this.errorConfirmationHandler}>
                    {this.state.error? this.state.error.message : null}
                  </Modal>
                  <WrappedComponent {... this.props} />
                </Fragment>
                );
        }
    }
}
export default withErrorHandler;
