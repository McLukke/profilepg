import React, { Component, PropTypes } from 'react';
import Preload from 'react-preload/lib/Preload';

import Loader from '../../common/components/loader';
import HomePageContent from '../components/content';
import formatError from '../../common/utils/format-error';

const allImages = [];

class HomePageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentWillMount() {
    setTimeout(
      () => { this.setState({ loading: false }); },
      4000,
    );
  }

  render() {
    if (this.state.loading) {
      return <Loader />;
    }

    return <HomePageContent />;

    // return (
    //   <Preload
    //     loadingIndicator={<Loader />}
    //     images={allImages}
    //     onError={err => formatError(err)}
    //     resolveOnError={true}
    //     mountChildren={true}
    //   >
    //     <HomePageContent />
    //   </Preload>
    // );
  }
}

export default HomePageContainer;
