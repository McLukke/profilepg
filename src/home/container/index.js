import React, { Component, PropTypes } from 'react';
import Preload from 'react-preload/lib/Preload';
import Scroll from 'react-scroll';
import Loader from 'components/loader';
import formatError from 'utils/format-error';

import HomePageContent from '../components/content';

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
      0,
    );

    Scroll.Events.scrollEvent.register('begin', function() {
      console.log("begin", arguments);
    });

    Scroll.Events.scrollEvent.register('end', function() {
      console.log("end", arguments);
    });

    Scroll.scrollSpy.update();
  }

  componentWillUnmount() {
    Scroll.Events.scrollEvent.remove('begin');
    Scroll.Events.scrollEvent.remove('end');
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
