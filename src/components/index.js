import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Index extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div>
                首页
            </div>
        );
    }
}

window.onload = function(){
  $("#root").show();
  $("#startLoadPage").hide();
}

export default Index;