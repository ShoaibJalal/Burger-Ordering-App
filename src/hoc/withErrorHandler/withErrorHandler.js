import React, { Fragment, Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axiox) => {
    return class extends Component {

        state = {
            error: null
        }
        componentWillMount() {
            this.reqInterceptor = axiox.interceptors.request.use(req => {
                this.setState({
                    error: null
                });
                return req;
            });
            this.resInterceptor = axiox.interceptors.response.use(res => res, error => {
                this.setState({
                    error: error
                });
            });
        }
        componentWillUnmount(){
            axiox.interceptors.request.eject(this.reqInterceptor);
            axiox.interceptors.response.eject(this.resInterceptor);
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
