import React from 'react'

function ServiceName( {serviceName, i} ){
    return <div className="col-xs-12 col-md-4">
    <div className={i===1?"single-service bordered":"single-service"}>
        <div className="service-icon">
            <i className={serviceName.icon}></i>
        </div>
        <div className="service-content">
            <h3> {serviceName.name} </h3>
            <div className="s-line"></div>
            <p> {serviceName.comment} </p>
        </div>
    </div>
</div>
}

export function Services( props ){
    return (
        <section id="services" className="section one-page-section second-bg">
            <div className="container">
                <div className="section-title">
                    <h2>Services</h2>
                </div>
                
                <div className="row">
                    {
                        props.serviceName.map( (service, i) => {
                            return <ServiceName serviceName = {service} i={i} key = {service.name}/>
                        })
                    }
                </div> 
            </div> 
        </section>
    )
}