import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {Icon} from 'react-icons-kit';
import {iosWorld} from 'react-icons-kit/ionicons/iosWorld';
import {arrowSortedDown} from 'react-icons-kit/typicons/arrowSortedDown';
import {generateMedia} from 'styled-media-query';

class FooterChoosePlan extends Component {
    state = { 
        langContent: false,
     }

     handleToggle = e => {
         e.preventDefault();
         this.setState({
             langContent: !this.state.langContent
         })
     }
    render() { 
        return ( 
            <FooterContainer>
            <div className="footer-wrapper">
                <span style={{marginLeft: '3rem', color:'#999',fontSize:'1rem'}}>Quesionts? &nbsp;<Link>Call 1-877-742-1335</Link></span>
                <div className="footer-columns">
                <ul>
                    <li>
                        <Link>Gift Card Terms</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link>Terms of Use</Link>
                    </li>
                    </ul>
                    <ul>
                        <li>
                            <Link>Privacy Statment</Link>
                        </li>
                    </ul>
                    </div>
                    {/* Language Button */}
                    <div className="lang-btn" onClick={this.handleToggle}>
                        <Icon icon={iosWorld} size={20} />
                        &nbsp;&nbsp;English&nbsp;&nbsp;
                        <Icon icon={arrowSortedDown} />
                    </div>
                    {/* Toggle Language Content */}
                    {this.state.langContent && (
                    <div className="lang-toggle">
                        <ul>
                            <li>
                                English
                            </li>
                        </ul>
                        <ul style={{marginTop:'-1em'}}>
                            <li>French</li>
                        </ul>
                    </div>
                    )}
                    </div>
            </FooterContainer>
         );
    }
}
 
export default FooterChoosePlan;

// Media
const customMedia = generateMedia({
    bgTablet:'960px',
    tablet: '740px',
})

// Footer

const FooterContainer = styled.footer`
    display: grid;
    justify-content: center;
    background: #f3f3f3;
    padding: 1.875rem 0;
    margin-top: 10rem;
    position: relative;
    border-top: 1px solid #e6e6e6;
    z-index: 5;

    .footer-columns {
        width: 80%;
        margin: 1rem 3rem 0 3rem;
        color:#999;
        font-size: 0.9rem;
        overflow: atuo;
        display: grid;
        grid-template-columns: repeat(3, 15.625rem);
        grid-gap: 0.3rem;
        ${customMedia.lessThan('tablet')`
        grid-template-columns: repeat(2, 1fr);
        `}
        ${customMedia.between('tablet','BgTablet')`
        grid-template-columns: repeat(3, 10.625rem);
    `};
    }

    .footer-wrapper {
        margin: 0 auto;
        padding: 1.25rem;
    }

    .footer-columns ul {
        padding-inline-start: 0px !important;
    }
    ul li {
        list-style: none;
        line-height: 2.5;
    }

    a {
        color: #999;
        font-size: 0.9rem;
    }

    p {
        text-decoration: underline;
        cursor: pointer;
    }

    a:hover {
        text-decoration: 
        cursor: pointer;
    }


    .lang-btn {
        background: transparent;
        border: 0.9px solid #333;
        padding: 1rem;
        width: 8rem;
        display: grid;
        margin-left: 3rem !important;
        grid-template-columns: repeat(3, 1fr);
        margin: 2rem 0 3rem;
        cursor: pointer;
        color:#999;
    }

    .lang-toggle{
        margin-left: 3rem;
        position: absolute;
        margin-top: -4rem;
    }

    .lang-toggle ul{
        background: transparent;
        width: 8rem;
        margin-left: 0em;
        border: 1px solid #333;
        color: #999;
        &:hover{
            background: #0085ff; 
            color: #999;
        }
    }
`