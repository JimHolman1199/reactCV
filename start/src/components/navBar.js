import  React from 'react';

function Item ({navbarItem}){
    return <li><a href={navbarItem.href} className = {navbarItem.name === 'HOME' ? 'scroll effect active': 'scroll effect' } data-speed={navbarItem.dataSpeed}>{ navbarItem.name }</a></li>
}

export function NavBar( props ){
    return (
        <header className="nav-wrapper effect">
            <nav className="navbar-custom">
                <div className="container">

                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bm-navbar" aria-expanded="false">
                            <span className="sr-only"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand effect" href="CV.pdf" download target="_blank">My CV</a>
                    </div>

                    <div className="collapse navbar-collapse" id="bm-navbar">
                        <ul className="nav navbar-nav navbar-right">
                            { props.navbarItem.map( items => {
                                return <Item navbarItem={ items } key = {items.name}/>
                            })}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
