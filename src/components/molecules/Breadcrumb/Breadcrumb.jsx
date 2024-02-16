import React from 'react';
import "./Breadcrumb.css";
const Breadcrumb = ({ items }) => (
    <div className="txt-header header page-header bg-primary wow slideInDown" data-wow-delay="0.1s" style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'slideInDown' }}>
        <div className="container py-12">
            <h1 className="display-3 txt-header text-white mb-3  slideInDown">
                {items[items.length - 1].text}
            </h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb uppercase text-uppercase mb-0">
                    {items.map((item, index) => (
                        <li key={index} className={`breadcrumb-item txt-header ${item.active ? 'text-primary active' : ''}`}>
                            <a href={item.link} className={`fw-medium text-white ${item.active ? 'text-primary active' : ''}`}>
                                {item.text}
                            </a>
                        </li>
                    ))}
                </ol>
            </nav>
        </div>
    </div>
);

export default Breadcrumb;
