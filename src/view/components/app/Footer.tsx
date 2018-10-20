import React from 'react';
import { connect } from 'react-redux';
import { AppPage, AppState } from '../../../state';

interface Props {
  currentPage: AppPage;
}

const defaultState: State = {
  time: new Date().toLocaleString(),
};

interface State {
  time: string;
  message?: string;
}

class Footer extends React.Component<Props, State> {
  state: State = defaultState;

  componentWillReceiveProps({ currentPage: nextPage }: Props) {
    if (this.props.currentPage !== nextPage) {
      this.setState(() => ({ message: `navigated to ${nextPage}` }));
      setTimeout(() => this.setState(() => ({ message: undefined })), 3000);
    }
  }

  render() {
    const { message } = this.state;
    return (
      <div className="footer">
        <div className="footer-lhs">
          <p className="footer-lhs-lead">established in 2013.</p>
          {message && <p>{message}</p>}
        </div>
        <p>
          powered by&nbsp;
          <a href="https://docs.mongodb.com/stitch/" target="_blank" rel="noopener noreferrer">
            mongodb stitch.
          </a>
        </p>
      </div>
    );
  }
}

const mapStateToProps = ({ admin: { currentPage = AppPage.NOT_FOUND } }: AppState) => ({ currentPage });

export default connect(mapStateToProps)(Footer);
