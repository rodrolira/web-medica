import React from 'react';

const Copyright = () => (
    <div className="container">
        <div className="copyright">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="text-center md:text-start mb-3 md:mb-0">
                    ©
                    <a className="border-b" href="index.html">Blablabla  2022</a>, All Right Reserved.
                </div>
                <div className="text-center md:text-end">
                    Diseñado por
                    <a className="border-b" href="https://htmlcodex.com">  Rodrigo Lira</a>
                    <br />
                </div>
            </div>
        </div>
    </div>
);

export default Copyright;
