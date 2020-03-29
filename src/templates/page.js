import React from 'react';
import _ from 'lodash';

import components, {Layout} from '../components/index';
import {markdownify, htmlToReact} from '../utils';

export default class Page extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
                <article id="main">
                    <header>
                        <h2>{_.get(this.props, 'pageContext.frontmatter.title')}</h2>
                        {markdownify(_.get(this.props, 'pageContext.frontmatter.subtitle'))}
                    </header>
                    <section className={'wrapper-page ' + _.get(this.props, 'pageContext.frontmatter.background_style')}>
                        <div className="inner">
                        {_.map(_.get(this.props, 'pageContext.frontmatter.sections'), (section, section_idx) => {
                    let GetSectionComponent = components[_.get(section, 'component')];
                    return (
                        <GetSectionComponent key={section_idx} {...this.props} section={section} site={this.props.pageContext.site} page={this.props.pageContext} />
                             )
                         })}
                        </div>
                    </section>
                </article>
            </Layout>
        );
    }
}
