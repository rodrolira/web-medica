import React from "react";
const SectionTitle = ({ title, additionalClasses }) => {
    const classNames = `inline-block border rounded rounded-pill py-2 px-8 title ${additionalClasses}`;

    return (
        <div className={classNames}>
            {title}
        </div>
    );
};

export default SectionTitle;
