import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Preload from 'react-preload/lib/Preload';
import Scroll from 'react-scroll';
import Loader from 'components/loader';
import formatError from 'utils/format-error';
import { portfolioImages } from 'content';

import HomePageContent from '../components/content';
import {
  toggleHeaderBg,
} from '../modules';

const allImages = portfolioImages.map(image => image.source);

class HomePageContainer extends Component {
  static propTypes = {
    toggleHeaderBg: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      maxVH: Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
    };
  }

  componentWillMount() {
    const { toggleHeaderBg: toggleHeader } = this.props;
    const { maxVH } = this.state;

    // test to simulate loading screen
    setTimeout(
      () => { this.setState({ loading: false }); },
      0,
    );

    console.log('maxVH: ', maxVH);

    Scroll.Events.scrollEvent.register('begin', function(scrollTop) {
      console.log("begin", arguments);
      if (
        (
          maxVH &&
          scrollTop < maxVH
        ) || (
          arguments &&
          arguments[0] &&
          arguments[0] === 'landingPage'
        )
      ) {
        toggleHeader(false);
      } else {
        toggleHeader(true);
      }
    });

    Scroll.Events.scrollEvent.register('end', function() {
      console.log("end", arguments);
    });

    window.addEventListener('scroll', this.handleScroll);

    Scroll.scrollSpy.update();
  }

  componentWillUnmount() {
    Scroll.Events.scrollEvent.remove('begin');
    Scroll.Events.scrollEvent.remove('end');
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = ev => Scroll.Events.registered.begin(ev.srcElement.body.scrollTop);

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
    //     resolveOnError
    //     mountChildren
    //   >
    //     <HomePageContent />
    //   </Preload>
    // );
  }
}

export default connect(
  null,
  { toggleHeaderBg },
)(HomePageContainer);
