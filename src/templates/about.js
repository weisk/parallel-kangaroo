import React from 'react';
import _ from 'lodash';
import {Layout} from '../components/index';
import {markdownify, htmlToReact} from '../utils';
import {Helmet} from 'react-helmet';

/* eslint-disable */

export default class Elements extends React.Component {
    render() {
        return (

            <Layout {...this.props}>
            <div> 
                <Helmet>
                    <title>Thirteen | About</title>
                    <meta name="description" content="This is the about page which is all about me, Six" />
                </Helmet>
            </div>
                <article id="main">
                    <header class="about">
                        <h2>{_.get(this.props, 'pageContext.frontmatter.title')}</h2>
                        {markdownify(_.get(this.props, 'pageContext.frontmatter.subtitle'))}
                    </header>
                    <section className={'wrapper ' + _.get(this.props, 'pageContext.frontmatter.background_style')}>
                        <div className="inner">
                            {htmlToReact(_.get(this.props, 'pageContext.html'))}
                        </div>
                    </section>
                </article>
            </Layout>
        );
    }
}
