import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";
import "./Breadcrumb.css"

const Breadcrumb = ({ items }) => {
    return (
        <div className="txt-header header page-header bg-primary wow slideInDown" data-wow-delay="0.1s" style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'slideInDown' }}>
            <div className="container py-12">
                <h1 className="display-3 txt-header text-white mb-3 slideInDown">
                    {items.length > 0 ? items[items.length - 1].text : ''}
                </h1>
                <nav className="breadcrumb animated slideInDown">
                    <ol className="breadcrumb uppercase text-uppercase mb-0">
                        {items.map((item, index) => (
                            <li key={index} className={`breadcrumb-item txt-header ${item.active ? 'text-primary active' : ''}`}>
                                {item.onClick ? (
                                    <button
                                        className={`fw-medium cursor-pointer breadcrumb-link uppercase text-white ${item.active ? 'text-primary active' : ''}`}
                                        onClick={item.onClick}
                                    >
                                        {item.text}
                                    </button>
                                ) : item.link ? (
                                    <NavLink
                                        smooth={true}
                                        duration={500}
                                        to={item.link}
                                        spy={true}
                                        className={`fw-medium cursor-pointer  breadcrumb-link text-white ${item.active ? 'text-primary active' : ''}`}
                                        activeClassName='active'
                                        offset={-70}
                                    >
                                        {item.text}
                                    </NavLink>
                                ) : (
                                    <span className={`fw-medium  text-white ${item.active ? 'text-primary active' : ''}`}>
                                        {item.text}
                                    </span>
                                )}
                            </li>
                        ))}
                    </ol>
                </nav>
            </div>
        </div>
    );
};

Breadcrumb.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            link: PropTypes.string,
            active: PropTypes.bool,
            onClick: PropTypes.func,
        })
    ).isRequired,
};

export default Breadcrumb;
